import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByCode(code: string) {
    return this.prisma.product.findUnique({
      where: { code },
      include: { category: true },
    });
  }

  async findLastCode() {
    const products = await this.prisma.product.findMany({
      where: { code: { startsWith: 'LIC-' } },
      orderBy: { code: 'desc' },
      take: 1,
    });
    return products[0]?.code ?? null;
  }

  async findById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async findMany(
    where: Prisma.ProductWhereInput,
    orderBy: Prisma.ProductOrderByWithRelationInput,
  ) {
    return this.prisma.product.findMany({
      where,
      orderBy,
      include: { category: true },
    });
  }

  async create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data,
      include: { category: true },
    });
  }

  async update(id: string, data: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async findCategoryByName(name: string) {
    return this.prisma.category.findUnique({ where: { name } });
  }
}