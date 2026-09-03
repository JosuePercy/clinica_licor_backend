import { Injectable, NotFoundException } from '@nestjs/common';
import { ExpensesRepository } from './expenses.repository';
import type { CreateExpenseDto } from './dto/create-expense.dto';
import { getLimaPeriodRange } from 'src/common/filters/date-range.util';

@Injectable()
export class ExpensesService {
  constructor(private readonly repository: ExpensesRepository) {}

  async getByPeriod(period?: string, from?: string, to?: string) {
    const where = period
      ? (() => {
          const { startDate, endDate } = getLimaPeriodRange(period, from, to);
          return { date: { gte: startDate, lte: endDate } };
        })()
      : {};

    const expenses = await this.repository.findMany(where);
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    return { expenses, total };
  }

  async create(data: CreateExpenseDto) {
    const date = data.date ? new Date(`${data.date}T00:00:00-05:00`) : new Date();
    return this.repository.create({
      description: data.description,
      amount: data.amount,
      category: data.category,
      date,
    });
  }

  async remove(id: string) {
    const expense = await this.repository.findById(id);
    if (!expense) {
      throw new NotFoundException(`Expense ${id} not found`);
    }
    await this.repository.delete(id);
  }
}