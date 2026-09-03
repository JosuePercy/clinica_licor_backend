import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class AnalyticsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findSales(where: Prisma.SaleWhereInput) {
    return this.prisma.sale.findMany({
      where,
      include: { items: { include: { product: true } } },
    });
  }

  async findSaleItems(where: Prisma.SaleItemWhereInput) {
    return this.prisma.saleItem.findMany({
      where,
      include: { product: true },
    });
  }

  async findSalesAndExpensesInRange(start: Date, end: Date) {
    const [sales, expenses] = await this.prisma.$transaction([
      this.prisma.sale.findMany({
        where: { date: { gte: start, lte: end }, cancelled: false },
        select: { date: true, total: true, items: { select: { productId: true, quantity: true, unitPrice: true, product: { select: { id: true, name: true } } } } },
      }),
      this.prisma.expense.findMany({
        where: { date: { gte: start, lte: end } },
        select: { date: true, amount: true, category: true },
      }),
    ]);
    return { sales, expenses };
  }
}