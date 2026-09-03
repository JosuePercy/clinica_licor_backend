import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class SalesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.sale.findUnique({
      where: { id },
      include: { items: { include: { product: true } } },
    });
  }

  async cancel(id: string, reason?: string) {
    return this.prisma.sale.update({
      where: { id },
      data: {
        cancelled: true,
        cancellationReason: reason,
        cancelledAt: new Date(),
      },
    });
  }

  async incrementStock(productId: string, quantity: number) {
    return this.prisma.product.update({
      where: { id: productId },
      data: { stock: { increment: quantity } },
    });
  }

  async findMany(where: Prisma.SaleWhereInput) {
    return this.prisma.sale.findMany({
      where,
      include: { items: { include: { product: true } } },
      orderBy: { date: 'desc' },
    });
  }

  async create(data: Prisma.SaleCreateInput) {
    return this.prisma.sale.create({
      data,
      include: { items: { include: { product: true } } },
    });
  }

  async decrementStock(productId: string, quantity: number) {
    return this.prisma.product.update({
      where: { id: productId },
      data: { stock: { decrement: quantity } },
    });
  }
}
