import { Injectable } from '@nestjs/common';
import { AnalyticsRepository } from './analytics.repository';
import { ExpensesRepository } from '../expenses/expenses.repository';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly repository: AnalyticsRepository,
    private readonly expensesRepository: ExpensesRepository,
  ) {}

  private getMonthRange(month?: number, year?: number): { start: Date; end: Date } {
    const now = new Date();
    const m = month ?? now.getMonth() + 1;
    const y = year ?? now.getFullYear();
    const start = new Date(y, m - 1, 1, 0, 0, 0, 0);
    const end = new Date(y, m, 0, 23, 59, 59, 999);
    return { start, end };
  }

  private toProductResponse(p: any) {
    if (!p) return null;
    return { id: p.id, name: p.name, price: p.price };
  }

  async getMonthlySummary(month?: number, year?: number) {
    const { start, end } = this.getMonthRange(month, year);

    const [sales, expenses] = await Promise.all([
      this.repository.findSales({ date: { gte: start, lte: end }, cancelled: false }),
      this.expensesRepository.findMany({ date: { gte: start, lte: end } }),
    ]);

    const totalSales = sales.reduce((sum, s) => sum + s.total, 0);
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

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
      totalExpenses,
      profit: totalSales - totalExpenses,
      topSellingProducts,
    };
  }

  async getTopProduct() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);

    const items = await this.repository.findSaleItems({ sale: { date: { gte: start }, cancelled: false } });

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

  async getDailySales(month?: number, year?: number) {
    const { start, end } = this.getMonthRange(month, year);
    const { sales, expenses } = await this.repository.findSalesAndExpensesInRange(start, end);

    const daysInMonth = end.getDate();
    const salesByDay = new Map<number, number>();
    const expensesByDay = new Map<number, number>();

    for (const sale of sales) {
      const day = new Date(sale.date).getDate();
      salesByDay.set(day, (salesByDay.get(day) ?? 0) + sale.total);
    }

    for (const expense of expenses) {
      const day = new Date(expense.date).getDate();
      expensesByDay.set(day, (expensesByDay.get(day) ?? 0) + expense.amount);
    }

    const data = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      return {
        day,
        sales: salesByDay.get(day) ?? 0,
        expenses: expensesByDay.get(day) ?? 0,
      };
    });

    return { data };
  }

  async getTopProducts(limit: number = 5, month?: number, year?: number) {
    const { start, end } = this.getMonthRange(month, year);

    const items = await this.repository.findSaleItems({
      sale: { date: { gte: start, lte: end }, cancelled: false },
    });

    const productMap = new Map<
      string,
      { id: string; name: string; quantitySold: number; totalRevenue: number }
    >();

    for (const item of items) {
      const existing = productMap.get(item.productId);
      const revenue = item.quantity * item.unitPrice;
      if (existing) {
        existing.quantitySold += item.quantity;
        existing.totalRevenue += revenue;
      } else {
        productMap.set(item.productId, {
          id: item.product?.id ?? item.productId,
          name: item.product?.name ?? '',
          quantitySold: item.quantity,
          totalRevenue: revenue,
        });
      }
    }

    const topProducts = [...productMap.values()]
      .sort((a, b) => b.quantitySold - a.quantitySold)
      .slice(0, limit);

    return { topProducts };
  }

  async getExpensesByCategory(month?: number, year?: number) {
    const { start, end } = this.getMonthRange(month, year);

    const expenses = await this.expensesRepository.findMany({ date: { gte: start, lte: end } });

    const categoryMap = new Map<string, number>();
    for (const expense of expenses) {
      categoryMap.set(expense.category, (categoryMap.get(expense.category) ?? 0) + expense.amount);
    }

    const total = [...categoryMap.values()].reduce((sum, v) => sum + v, 0);

    const categories = [...categoryMap.entries()].map(([category, amount]) => ({
      category,
      amount,
      percentage: total > 0 ? Math.round((amount / total) * 10000) / 100 : 0,
    }));

    return { categories, total };
  }
}