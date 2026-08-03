import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class ResumenRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findTransacciones(where: Prisma.TransaccionWhereInput) {
    return this.prisma.transaccion.findMany({
      where,
      include: { items: { include: { producto: true } } },
    });
  }

  async findItemsVenta(where: Prisma.ItemVentaWhereInput) {
    return this.prisma.itemVenta.findMany({
      where,
      include: { producto: true },
    });
  }
}
