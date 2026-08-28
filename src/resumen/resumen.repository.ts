import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class ResumenRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findTransacciones(where: Prisma.SaleWhereInput) {
    return this.prisma.sale.findMany({
      where,
      include: { items: { include: { product: true } } },
    });
  }

  async findItemsVenta(where: Prisma.SaleItemWhereInput) {
    return this.prisma.saleItem.findMany({
      where,
      include: { product: true },
    });
  }
}