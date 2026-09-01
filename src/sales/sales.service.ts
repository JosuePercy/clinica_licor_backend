import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { SalesRepository } from './sales.repository';
import { ProductsRepository } from '../products/products.repository';

import type { CreateSaleDto } from './dto/create-sale.dto';
import { getLimaPeriodRange } from 'src/common/filters/date-range.util';

@Injectable()
export class SalesService {
  constructor(
    private readonly repository: SalesRepository,
    private readonly productsRepository: ProductsRepository,
  ) {}

  async getSalesByPeriod(period: string = 'day', from?: string, to?: string) {
    const { startDate, endDate } = getLimaPeriodRange(period, from, to);

    const sales = await this.repository.findMany({ date: { gte: startDate, lte: endDate } });

    const total = sales
      .filter((s) => !s.cancelled)
      .reduce((sum, s) => sum + s.total, 0);

    const salesCount = sales.filter((s) => !s.cancelled).length;

    return {
      sales: sales.map((s) => this.toResponse(s)),
      total,
      salesCount,
    };
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

    const date = data.date ? new Date(`${data.date}T00:00:00-05:00`) : new Date();

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

  async cancelSale(id: string, reason?: string) {
    const sale = await this.repository.findById(id);

    if (!sale) {
      throw new NotFoundException(`Sale ${id} not found`);
    }
    if (sale.cancelled) {
      throw new BadRequestException(`Sale ${id} is already cancelled`);
    }

    for (const item of sale.items) {
      await this.repository.incrementStock(item.productId, item.quantity);
    }

    const cancelled = await this.repository.cancel(id, reason);
    return this.toResponse(cancelled);
  }

  private toResponse(sale: any) {
    return {
      id: sale.id,
      saleCode: sale.saleCode,
      total: sale.total,
      date: sale.date,
      createdAt: sale.createdAt,
      cancelled: sale.cancelled,
      cancellationReason: sale.cancellationReason,
      cancelledAt: sale.cancelledAt,
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