import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class VentasRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(where: Prisma.TransaccionWhereInput) {
    return this.prisma.transaccion.findMany({
      where,
      include: { items: { include: { producto: true } } },
      orderBy: { fecha: 'desc' },
    });
  }

  async create(data: Prisma.TransaccionCreateInput) {
    return this.prisma.transaccion.create({
      data,
      include: { items: { include: { producto: true } } },
    });
  }

  async decrementStock(productoId: string, cantidad: number) {
    return this.prisma.producto.update({
      where: { id: productoId },
      data: { stock: { decrement: cantidad } },
    });
  }
}
