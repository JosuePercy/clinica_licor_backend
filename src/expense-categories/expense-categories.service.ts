import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ExpenseCategoriesRepository } from './expense-categories.repository';
import type { CreateExpenseCategoryDto } from './dto/create-expense-category.dto';

@Injectable()
export class ExpenseCategoriesService {
  constructor(private readonly repository: ExpenseCategoriesRepository) {}

  async findAll() {
    return this.repository.findAll();
  }

  async create(data: CreateExpenseCategoryDto) {
    const existing = await this.repository.findByName(data.name);
    if (existing) {
      throw new ConflictException(
        `Expense category "${data.name}" already exists`,
      );
    }
    return this.repository.create(data.name);
  }

  async remove(id: string) {
    const category = await this.repository.findById(id);
    if (!category) {
      throw new NotFoundException(`Expense category ${id} not found`);
    }
    await this.repository.delete(id);
  }
}
