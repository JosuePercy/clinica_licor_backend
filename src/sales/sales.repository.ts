import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

const saleInclude = {
  items: { include: { product: { include: { category: true } } } },
  combos: {
    include: {
      promotion: { include: { items: { include: { product: true } } } },
    },
  },
} as const;

export interface StockChange {
  productId: string;
  quantity: number;
}

@Injectable()
export class SalesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.sale.findUnique({
      where: { id },
      include: saleInclude,
    });
  }

  async findMany(where: Prisma.SaleWhereInput) {
    return this.prisma.sale.findMany({
      where,
      include: saleInclude,
      orderBy: { date: 'desc' },
    });
  }

  /**
   * Creates the sale and decrements stock for every affected product in a single
   * transaction, using a conditional update (`stock >= quantity`) so concurrent
   * sales can't oversell the same product.
   */
  async createWithStockChanges(
    data: Prisma.SaleCreateInput,
    stockChanges: StockChange[],
  ) {
    return this.prisma.$transaction(async (tx) => {
      for (const change of stockChanges) {
        const result = await tx.product.updateMany({
          where: { id: change.productId, stock: { gte: change.quantity } },
          data: { stock: { decrement: change.quantity } },
        });
        if (result.count === 0) {
          throw new BadRequestException(
            `Insufficient stock for product ${change.productId} (requested ${change.quantity})`,
          );
        }
      }

      return tx.sale.create({ data, include: saleInclude });
    });
  }

  /**
   * Marks the sale as cancelled and restores stock for every affected product
   * (standalone items and combo member products) in a single transaction.
   */
  async cancelWithStockRestore(
    id: string,
    reason: string | undefined,
    stockChanges: StockChange[],
  ) {
    return this.prisma.$transaction(async (tx) => {
      for (const change of stockChanges) {
        await tx.product.update({
          where: { id: change.productId },
          data: { stock: { increment: change.quantity } },
        });
      }

      return tx.sale.update({
        where: { id },
        data: {
          cancelled: true,
          cancellationReason: reason,
          cancelledAt: new Date(),
        },
        include: saleInclude,
      });
    });
  }
}
