import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExpenseCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.expenseCategory.findMany({ orderBy: { name: 'asc' } });
  }

  async findById(id: string) {
    return this.prisma.expenseCategory.findUnique({ where: { id } });
  }

  async findByName(name: string) {
    return this.prisma.expenseCategory.findUnique({ where: { name } });
  }

  async create(name: string) {
    return this.prisma.expenseCategory.create({ data: { name } });
  }

  async delete(id: string) {
    return this.prisma.expenseCategory.delete({ where: { id } });
  }
}
