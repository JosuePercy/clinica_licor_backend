import { Injectable } from '@nestjs/common';
import { AnalyticsRepository } from './analytics.repository';
import { ExpensesRepository } from '../expenses/expenses.repository';
import {
  getLimaPeriodRange,
  formatLimaDateKey,
} from 'src/common/filters/date-range.util';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly repository: AnalyticsRepository,
    private readonly expensesRepository: ExpensesRepository,
  ) {}

  private toProductResponse(p: any) {
    if (!p) return null;
    return { id: p.id, name: p.name, price: p.price };
  }

  async getMonthlySummary(
    period?: string,
    from?: string,
    to?: string,
    year?: string,
    month?: string,
  ) {
    const { startDate, endDate } = getLimaPeriodRange(
      period ?? 'month',
      from,
      to,
      year,
      month,
    );

    const [sales, expenses] = await Promise.all([
      this.repository.findSales({
        date: { gte: startDate, lte: endDate },
        cancelled: false,
      }),
      this.expensesRepository.findMany({
        date: { gte: startDate, lte: endDate },
      }),
    ]);

    const totalSales = sales.reduce((sum, s) => sum + s.total, 0);
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
    const costOfGoodsSold = sales.reduce(
      (sum, sale) =>
        sum +
        sale.items.reduce(
          (itemSum, item) =>
            itemSum + (item.product?.costPrice ?? 0) * item.quantity,
          0,
        ),
      0,
    );

    const productMap = new Map<
      string,
      { product: any; quantitySold: number }
    >();
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
      costOfGoodsSold,
      profit: totalSales - totalExpenses - costOfGoodsSold,
      topSellingProducts,
    };
  }

  async getTopProduct() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);

    const items = await this.repository.findSaleItems({
      sale: { date: { gte: start }, cancelled: false },
    });

    if (!items.length) return null;

    const productMap = new Map<
      string,
      { product: any; quantitySold: number }
    >();
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

    return (
      [...productMap.values()].sort(
        (a, b) => b.quantitySold - a.quantitySold,
      )[0] ?? null
    );
  }

  async getDailySales(
    period?: string,
    from?: string,
    to?: string,
    year?: string,
    month?: string,
  ) {
    const { startDate, endDate } = getLimaPeriodRange(
      period ?? 'month',
      from,
      to,
      year,
      month,
    );
    const { sales, expenses } =
      await this.repository.findSalesAndExpensesInRange(startDate, endDate);

    const salesByDate = new Map<string, number>();
    for (const sale of sales) {
      const key = formatLimaDateKey(new Date(sale.date));
      salesByDate.set(key, (salesByDate.get(key) ?? 0) + sale.total);
    }

    const expensesByDate = new Map<string, number>();
    for (const expense of expenses) {
      const key = formatLimaDateKey(new Date(expense.date));
      expensesByDate.set(key, (expensesByDate.get(key) ?? 0) + expense.amount);
    }

    // Walks the actual [startDate, endDate] span instead of a hardcoded
    // calendar month, so the chart also works for week/range/year periods.
    const data: {
      date: string;
      label: string;
      sales: number;
      expenses: number;
    }[] = [];
    const cursor = new Date(startDate);
    while (cursor.getTime() <= endDate.getTime()) {
      const key = formatLimaDateKey(cursor);
      const [, monthPart, dayPart] = key.split('-');
      data.push({
        date: key,
        label: `${dayPart}/${monthPart}`,
        sales: salesByDate.get(key) ?? 0,
        expenses: expensesByDate.get(key) ?? 0,
      });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }

    return { data };
  }

  async getTopProducts(
    limit: number = 5,
    period?: string,
    from?: string,
    to?: string,
    year?: string,
    month?: string,
  ) {
    const { startDate, endDate } = getLimaPeriodRange(
      period ?? 'month',
      from,
      to,
      year,
      month,
    );

    const items = await this.repository.findSaleItems({
      sale: { date: { gte: startDate, lte: endDate }, cancelled: false },
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

  async getExpensesByCategory(
    period?: string,
    from?: string,
    to?: string,
    year?: string,
    month?: string,
  ) {
    const { startDate, endDate } = getLimaPeriodRange(
      period ?? 'month',
      from,
      to,
      year,
      month,
    );

    const expenses = await this.expensesRepository.findMany({
      date: { gte: startDate, lte: endDate },
    });

    const categoryMap = new Map<string, number>();
    for (const expense of expenses) {
      const categoryName = expense.category.name;
      categoryMap.set(
        categoryName,
        (categoryMap.get(categoryName) ?? 0) + expense.amount,
      );
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
