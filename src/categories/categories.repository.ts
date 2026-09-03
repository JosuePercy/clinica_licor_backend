import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany({ orderBy: { name: 'asc' } });
  }

  async findById(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async findByName(name: string) {
    return this.prisma.category.findUnique({ where: { name } });
  }

  async create(name: string) {
    return this.prisma.category.create({ data: { name } });
  }

  async delete(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}