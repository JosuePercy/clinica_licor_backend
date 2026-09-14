import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

const itemsInclude = { items: { include: { product: true } } } as const;

@Injectable()
export class PromotionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(where: Prisma.PromotionWhereInput = {}) {
    return this.prisma.promotion.findMany({
      where,
      include: itemsInclude,
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: string) {
    return this.prisma.promotion.findUnique({
      where: { id },
      include: itemsInclude,
    });
  }

  async create(data: {
    name: string;
    price: number;
    items: { productId: string; quantity: number }[];
  }) {
    return this.prisma.promotion.create({
      data: {
        name: data.name,
        price: data.price,
        items: { create: data.items },
      },
      include: itemsInclude,
    });
  }

  async update(
    id: string,
    data: {
      name?: string;
      price?: number;
      active?: boolean;
      items?: { productId: string; quantity: number }[];
    },
  ) {
    const { items, ...rest } = data;

    return this.prisma.$transaction(async (tx) => {
      if (items) {
        await tx.promotionItem.deleteMany({ where: { promotionId: id } });
      }

      return tx.promotion.update({
        where: { id },
        data: {
          ...rest,
          ...(items ? { items: { create: items } } : {}),
        },
        include: itemsInclude,
      });
    });
  }

  async setActive(id: string, active: boolean) {
    return this.prisma.promotion.update({ where: { id }, data: { active } });
  }
}
