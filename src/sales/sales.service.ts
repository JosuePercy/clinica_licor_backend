import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { SalesRepository } from './sales.repository';
import { ProductsRepository } from '../products/products.repository';

import type { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    private readonly repository: SalesRepository,
    private readonly productsRepository: ProductsRepository,
  ) {}

  private getLimaDateParts() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Lima',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const parts = formatter.formatToParts(now);

    const year = Number(parts.find((p) => p.type === 'year')?.value);
    const month = Number(parts.find((p) => p.type === 'month')?.value);
    const day = Number(parts.find((p) => p.type === 'day')?.value);

    return {
      year,
      month,
      day,
    };
  }

  private parseLimaDate(dateString: string): Date {
    return new Date(`${dateString}T00:00:00-05:00`);
  }

  async getSalesByPeriod(
    period: string = 'day',
    from?: string,
    to?: string,
  ) {
    const limaToday = this.getLimaDateParts();

    let startDate: Date;
    let endDate: Date;

    switch (period) {
      case 'day': {
        const dateString = `${limaToday.year}-${String(
          limaToday.month,
        ).padStart(2, '0')}-${String(limaToday.day).padStart(2, '0')}`;

        startDate = this.parseLimaDate(dateString);

        endDate = new Date(startDate);
        endDate.setUTCDate(endDate.getUTCDate() + 1);
        endDate.setTime(endDate.getTime() - 1);

        break;
      }

      case 'week': {
        const dateString = `${limaToday.year}-${String(
          limaToday.month,
        ).padStart(2, '0')}-${String(limaToday.day).padStart(2, '0')}`;

        const limaDate = this.parseLimaDate(dateString);

        // Domingo = 0
        const dayOfWeek = limaDate.getUTCDay();

        startDate = new Date(limaDate);
        startDate.setUTCDate(startDate.getUTCDate() - dayOfWeek);

        endDate = new Date(startDate);
        endDate.setUTCDate(endDate.getUTCDate() + 7);
        endDate.setTime(endDate.getTime() - 1);

        break;
      }

      case 'month': {
        const firstDay = `${limaToday.year}-${String(
          limaToday.month,
        ).padStart(2, '0')}-01`;

        startDate = this.parseLimaDate(firstDay);

        endDate = new Date(startDate);
        endDate.setUTCMonth(endDate.getUTCMonth() + 1);
        endDate.setTime(endDate.getTime() - 1);

        break;
      }

      case 'specific-date': {
        const dateString =
          from ??
          `${limaToday.year}-${String(limaToday.month).padStart(
            2,
            '0',
          )}-${String(limaToday.day).padStart(2, '0')}`;

        startDate = this.parseLimaDate(dateString);

        endDate = new Date(startDate);
        endDate.setUTCDate(endDate.getUTCDate() + 1);
        endDate.setTime(endDate.getTime() - 1);

        break;
      }

      case 'range': {
        const fromString =
          from ??
          `${limaToday.year}-${String(limaToday.month).padStart(
            2,
            '0',
          )}-01`;

        startDate = this.parseLimaDate(fromString);

        if (to) {
          endDate = this.parseLimaDate(to);

          endDate.setUTCDate(endDate.getUTCDate() + 1);
          endDate.setTime(endDate.getTime() - 1);
        } else {
          endDate = new Date();
        }

        break;
      }

      default: {
        const dateString = `${limaToday.year}-${String(
          limaToday.month,
        ).padStart(2, '0')}-${String(limaToday.day).padStart(2, '0')}`;

        startDate = this.parseLimaDate(dateString);

        endDate = new Date(startDate);
        endDate.setUTCDate(endDate.getUTCDate() + 1);
        endDate.setTime(endDate.getTime() - 1);

        break;
      }
    }

    console.log('--- FILTRO DE VENTAS ---');
    console.log('Periodo:', period);
    console.log('Fecha Lima:', limaToday);
    console.log('Desde UTC:', startDate.toISOString());
    console.log('Hasta UTC:', endDate.toISOString());

    const sales = await this.repository.findMany({
      date: {
        gte: startDate,
        lte: endDate,
      },
    });

    return sales.map((sale) => this.toResponse(sale));
  }

  async registerSale(data: CreateSaleDto) {
    if (!data.items.length) {
      throw new BadRequestException('Sale must have at least one item');
    }

    for (const item of data.items) {
      const product = await this.productsRepository.findById(item.productId);

      if (!product) {
        throw new NotFoundException(
          `Product ${item.productId} not found`,
        );
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
          product: {
            connect: {
              id: item.productId,
            },
          },
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          subtotal: item.quantity * item.unitPrice,
        })),
      },
    });

    for (const item of data.items) {
      await this.repository.decrementStock(
        item.productId,
        item.quantity,
      );
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