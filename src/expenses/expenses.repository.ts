import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class ExpensesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(where: Prisma.ExpenseWhereInput) {
    return this.prisma.expense.findMany({
      where,
      orderBy: { date: 'desc' },
    });
  }

  async create(data: Prisma.ExpenseCreateInput) {
    return this.prisma.expense.create({ data });
  }

  async findById(id: string) {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  async delete(id: string) {
    return this.prisma.expense.delete({ where: { id } });
  }
}