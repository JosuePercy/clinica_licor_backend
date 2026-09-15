import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { SalesRepository, type StockChange } from './sales.repository';
import { ProductsRepository } from '../products/products.repository';
import { PromotionsRepository } from '../promotions/promotions.repository';

import type { CreateSaleDto } from './dto/create-sale.dto';
import { getLimaPeriodRange } from 'src/common/filters/date-range.util';

@Injectable()
export class SalesService {
  constructor(
    private readonly repository: SalesRepository,
    private readonly productsRepository: ProductsRepository,
    private readonly promotionsRepository: PromotionsRepository,
  ) {}

  async getSalesByPeriod(
    period: string = 'day',
    from?: string,
    to?: string,
    year?: string,
  ) {
    const { startDate, endDate } = getLimaPeriodRange(period, from, to, year);

    const sales = await this.repository.findMany({
      date: { gte: startDate, lte: endDate },
    });

    const total = sales
      .filter((s) => !s.cancelled)
      .reduce((sum, s) => sum + s.total, 0);

    const salesCount = sales.filter((s) => !s.cancelled).length;

    return {
      sales: sales.map((s) => this.toResponse(s)),
      total,
      salesCount,
    };
  }

  async registerSale(data: CreateSaleDto, userId: string) {
    const items = data.items ?? [];
    const combos = data.combos ?? [];

    if (!items.length && !combos.length) {
      throw new BadRequestException(
        'Sale must have at least one item or combo',
      );
    }

    // Resolve every distinct promotion referenced by the combos up front.
    const promotionsById = new Map<
      string,
      NonNullable<Awaited<ReturnType<PromotionsRepository['findById']>>>
    >();
    for (const combo of combos) {
      if (promotionsById.has(combo.promotionId)) continue;

      const promotion = await this.promotionsRepository.findById(
        combo.promotionId,
      );
      if (!promotion) {
        throw new NotFoundException(`Promotion ${combo.promotionId} not found`);
      }
      if (!promotion.active) {
        throw new BadRequestException(
          `Promotion "${promotion.name}" is not active`,
        );
      }
      promotionsById.set(combo.promotionId, promotion);
    }

    // Aggregate the stock required per product across standalone items and
    // every combo's member products, so the same product appearing twice
    // (as a loose item and inside a combo, or in two combos) is validated
    // and decremented against its real combined demand.
    const requiredByProduct = new Map<string, number>();
    for (const item of items) {
      requiredByProduct.set(
        item.productId,
        (requiredByProduct.get(item.productId) ?? 0) + item.quantity,
      );
    }
    for (const combo of combos) {
      const promotion = promotionsById.get(combo.promotionId)!;
      for (const promotionItem of promotion.items) {
        const needed = promotionItem.quantity * combo.quantity;
        requiredByProduct.set(
          promotionItem.productId,
          (requiredByProduct.get(promotionItem.productId) ?? 0) + needed,
        );
      }
    }

    const productIds = [...requiredByProduct.keys()];
    const products = await this.productsRepository.findManyByIds(productIds);
    const productsById = new Map(products.map((p) => [p.id, p]));

    for (const [productId, quantity] of requiredByProduct) {
      const product = productsById.get(productId);
      if (!product) {
        throw new NotFoundException(`Product ${productId} not found`);
      }
      if (product.stock < quantity) {
        throw new BadRequestException(
          `Insufficient stock for "${product.name}". Available: ${product.stock}, requested: ${quantity}`,
        );
      }
    }

    const itemsTotal = items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0,
    );
    const combosTotal = combos.reduce((sum, combo) => {
      const promotion = promotionsById.get(combo.promotionId)!;
      return sum + promotion.price * combo.quantity;
    }, 0);
    const total = itemsTotal + combosTotal;

    const saleCode = `VTA-${Date.now()}`;
    const date = data.date
      ? new Date(`${data.date}T00:00:00-05:00`)
      : new Date();

    const stockChanges: StockChange[] = [...requiredByProduct.entries()].map(
      ([productId, quantity]) => ({
        productId,
        quantity,
      }),
    );

    const sale = await this.repository.createWithStockChanges(
      {
        saleCode,
        total,
        date,
        paymentMethod: data.paymentMethod,
        userId,
        items: {
          create: items.map((item) => ({
            product: { connect: { id: item.productId } },
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            subtotal: item.quantity * item.unitPrice,
          })),
        },
        combos: {
          create: combos.map((combo) => ({
            promotion: { connect: { id: combo.promotionId } },
            quantity: combo.quantity,
            subtotal:
              promotionsById.get(combo.promotionId)!.price * combo.quantity,
          })),
        },
      },
      stockChanges,
    );

    return this.toResponse(sale);
  }

  async cancelSale(id: string, reason?: string) {
    const sale = await this.repository.findById(id);

    if (!sale) {
      throw new NotFoundException(`Sale ${id} not found`);
    }
    if (sale.cancelled) {
      throw new BadRequestException(`Sale ${id} is already cancelled`);
    }

    const restoreByProduct = new Map<string, number>();
    for (const item of sale.items) {
      restoreByProduct.set(
        item.productId,
        (restoreByProduct.get(item.productId) ?? 0) + item.quantity,
      );
    }
    for (const combo of sale.combos) {
      for (const promotionItem of combo.promotion.items) {
        const quantity = promotionItem.quantity * combo.quantity;
        restoreByProduct.set(
          promotionItem.productId,
          (restoreByProduct.get(promotionItem.productId) ?? 0) + quantity,
        );
      }
    }

    const stockChanges: StockChange[] = [...restoreByProduct.entries()].map(
      ([productId, quantity]) => ({
        productId,
        quantity,
      }),
    );

    const cancelled = await this.repository.cancelWithStockRestore(
      id,
      reason,
      stockChanges,
    );
    return this.toResponse(cancelled);
  }

  private toResponse(sale: any) {
    return {
      id: sale.id,
      saleCode: sale.saleCode,
      total: sale.total,
      paymentMethod: sale.paymentMethod,
      date: sale.date,
      createdAt: sale.createdAt,
      cancelled: sale.cancelled,
      cancellationReason: sale.cancellationReason,
      cancelledAt: sale.cancelledAt,
      items: sale.items?.map((item: any) => ({
        id: item.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        subtotal: item.subtotal,
        product: item.product
          ? {
              id: item.product.id,
              name: item.product.name,
              price: item.product.price,
              size: item.product.size,
              category: item.product.category?.name ?? null,
            }
          : undefined,
      })),
      combos: sale.combos?.map((combo: any) => ({
        id: combo.id,
        promotionId: combo.promotionId,
        quantity: combo.quantity,
        subtotal: combo.subtotal,
        promotion: combo.promotion
          ? {
              id: combo.promotion.id,
              name: combo.promotion.name,
              price: combo.promotion.price,
            }
          : undefined,
      })),
    };
  }
}
