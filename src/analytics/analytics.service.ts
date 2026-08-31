import { Injectable } from '@nestjs/common';
import { AnalyticsRepository } from './analytics.repository';

@Injectable()
export class AnalyticsService {
  constructor(private readonly repository: AnalyticsRepository) {}

  private toProductResponse(p: any) {
    if (!p) return null;
    return {
      id: p.id,
      name: p.name,
      price: p.price,
    };
  }

  async getMonthlySummary(month?: number, year?: number) {
    const now = new Date();
    const targetMonth = month ?? now.getMonth() + 1;
    const targetYear = year ?? now.getFullYear();

    const start = new Date(targetYear, targetMonth - 1, 1);
    const end = new Date(targetYear, targetMonth, 0, 23, 59, 59, 999);

    const sales = await this.repository.findSales({ date: { gte: start, lte: end } });

    const totalSales = sales.reduce((sum, s) => sum + s.total, 0);

    const productMap = new Map<string, { product: any; quantitySold: number }>();
    for (const sale of sales) {
      for (const item of sale.items) {
        const existing = productMap.get(item.productId);
        if (existing) {
          existing.quantitySold += item.quantity;
        } else {
          productMap.set(item.productId, {
            product: this.toProductResponse(item.product),
            quantitySold: item.quantity,
          });
        }
      }
    }

    const topSellingProducts = [...productMap.values()]
      .sort((a, b) => b.quantitySold - a.quantitySold)
      .slice(0, 5);

    return {
      totalSales,
      profit: totalSales * 0.3,
      totalExpenses: 0,
      topSellingProducts,
    };
  }

  async getTopProduct() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);

    const items = await this.repository.findSaleItems({ sale: { date: { gte: start } } });

    if (!items.length) return null;

    const productMap = new Map<string, { product: any; quantitySold: number }>();
    for (const item of items) {
      const existing = productMap.get(item.productId);
      if (existing) {
        existing.quantitySold += item.quantity;
      } else {
        productMap.set(item.productId, {
          product: this.toProductResponse(item.product),
          quantitySold: item.quantity,
        });
      }
    }

    return [...productMap.values()].sort((a, b) => b.quantitySold - a.quantitySold)[0] ?? null;
  }
}