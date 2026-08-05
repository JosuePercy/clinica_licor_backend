import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class ProductosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByCodigo(codigo: string) {
    return this.prisma.producto.findUnique({ where: { codigo } });
  }
  async findLastCodigo() {
    const productos = await this.prisma.producto.findMany({
      where: { codigo: { startsWith: 'LIC-' } },
      orderBy: { codigo: 'desc' },
      take: 1,
    });
    return productos[0]?.codigo ?? null;
  }
  async findById(id: string) {
    return this.prisma.producto.findUnique({ where: { id } });
  }

  async findMany(
    where: Prisma.ProductoWhereInput,
    orderBy: Prisma.ProductoOrderByWithRelationInput,
  ) {
    return this.prisma.producto.findMany({ where, orderBy });
  }

  async create(data: Prisma.ProductoCreateInput) {
    return this.prisma.producto.create({ data });
  }

  async update(id: string, data: Prisma.ProductoUpdateInput) {
    return this.prisma.producto.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.producto.delete({ where: { id } });
  }

}
