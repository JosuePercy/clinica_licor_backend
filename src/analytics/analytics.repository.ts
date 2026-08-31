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
}