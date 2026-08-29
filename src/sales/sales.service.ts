import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { SalesRepository } from './sales.repository';
import { ProductsRepository } from '../products/products.repository';
import type { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    private readonly repository: SalesRepository,
    private readonly productsRepository: ProductsRepository,
  ) {}

  private parseLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  async getSalesByPeriod(
    period: string = 'day',
    from?: string,
    to?: string,
  ) {
    const now = new Date();
    let startDate: Date;
    let endDate: Date;

    switch (period) {
      case 'week': {
        const day = now.getDay();
        startDate = new Date(now);
        startDate.setDate(now.getDate() - day);
        startDate.setHours(0, 0, 0, 0);
        endDate = new Date(now);
        endDate.setHours(23, 59, 59, 999);
        break;
      }
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        break;
      case 'specific-date':
        startDate = from
          ? this.parseLocalDate(from)
          : new Date(now.getFullYear(), now.getMonth(), now.getDate());
        endDate = new Date(startDate);
        endDate.setHours(23, 59, 59, 999);
        break;
      case 'range':
        startDate = from
          ? this.parseLocalDate(from)
          : new Date(now.getFullYear(), now.getMonth(), 1);
        endDate = to ? this.parseLocalDate(to) : new Date();
        endDate.setHours(23, 59, 59, 999);
        break;
      default: // 'day'
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    }

    const sales = await this.repository.findMany({ date: { gte: startDate, lte: endDate } });
    return sales.map((s) => this.toResponse(s));
  }

  async registerSale(data: CreateSaleDto) {
    if (!data.items.length) {
      throw new BadRequestException('Sale must have at least one item');
    }

    for (const item of data.items) {
      const product = await this.productsRepository.findById(item.productId);
      if (!product) {
        throw new NotFoundException(`Product ${item.productId} not found`);
      }
      if (product.stock < item.quantity) {
        throw new BadRequestException(
          `Insufficient stock for "${product.name}". Available: ${product.stock}, requested: ${item.quantity}`,
        );
      }
    }

    const saleCode = `VTA-${Date.now()}`;
    const total = data.items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0,
    );
    const date = data.date ? new Date(data.date) : new Date();

    const sale = await this.repository.create({
      saleCode,
      total,
      date,
      items: {
        create: data.items.map((item) => ({
          product: { connect: { id: item.productId } },
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          subtotal: item.quantity * item.unitPrice,
        })),
      },
    });

    for (const item of data.items) {
      await this.repository.decrementStock(item.productId, item.quantity);
    }

    return this.toResponse(sale);
  }

  private toResponse(sale: any) {
    return {
      id: sale.id,
      saleCode: sale.saleCode,
      total: sale.total,
      date: sale.date,
      createdAt: sale.createdAt,
      cancelled: sale.cancelled,
      items: sale.items?.map((item: any) => ({
        id: item.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        subtotal: item.subtotal,
        product: item.product
          ? {
              id: item.product.id,
              name: item.product.name,
              price: item.product.price,
            }
          : undefined,
      })),
    };
  }
}