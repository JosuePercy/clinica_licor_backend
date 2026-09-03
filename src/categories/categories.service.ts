import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import type { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly repository: CategoriesRepository) {}

  async findAll() {
    return this.repository.findAll();
  }

  async create(data: CreateCategoryDto) {
    const existing = await this.repository.findByName(data.name);
    if (existing) {
      throw new ConflictException(`Category "${data.name}" already exists`);
    }
    return this.repository.create(data.name);
  }

  async remove(id: string) {
    const category = await this.repository.findById(id);
    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    await this.repository.delete(id);
  }
}