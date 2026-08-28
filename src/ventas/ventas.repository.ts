import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class VentasRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  async decrementStock(productoId: string, cantidad: number) {
    return this.prisma.product.update({
      where: { id: productoId },
      data: { stock: { decrement: cantidad } },
    });
  }
}