import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import type { CreateProductDto } from './dto/create-product.dto';
import type { UpdateProductDto } from './dto/update-product.dto';
import { generateBarcode } from './utils/barcode.generator';
import type { Product, Category } from '@prisma/client';
import { ProductsRepository } from './products.repository';

type ProductWithCategory = Product & { category: Category };

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  private toResponse(p: ProductWithCategory) {
    const { categoryId, category, ...rest } = p;
    return {
      ...rest,
      category: category?.name ?? null,
    };
  }

  async findAll(filters: { code?: string; lowStock?: string; category?: string }) {
    if (filters.code) {
      const product = await this.repository.findByCode(filters.code);
      return product ? [this.toResponse(product)] : [];
    }

    const where: { active: boolean; stock?: { lte: number }; category?: { name: string } } = {
      active: true,
    };
    if (filters.lowStock !== undefined) {
      where.stock = { lte: parseInt(filters.lowStock, 10) };
    }
    if (filters.category) {
      where.category = { name: filters.category };
    }

    const products = await this.repository.findMany(where, { name: 'asc' });
    return products.map((p) => this.toResponse(p));
  }

  async findByCode(code: string) {
    const product = await this.repository.findByCode(code);
    if (!product) {
      throw new NotFoundException(`Product with code ${code} not found`);
    }
    return this.toResponse(product);
  }

  async findOne(id: string) {
    const product = await this.repository.findById(id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.toResponse(product);
  }

  async create(data: CreateProductDto) {
  const { code, category: categoryName, size, ...rest } = data;

  const category = await this.repository.findCategoryByName(categoryName);
  if (!category) {
    throw new BadRequestException(`Category "${categoryName}" does not exist`);
  }

  let finalCode = code;
  if (!finalCode) {
    const lastCode = await this.repository.findLastCode();
    finalCode = generateBarcode(lastCode);
  }

  const product = await this.repository.create({
    ...rest,
    code: finalCode,
    size: size ?? '',
    category: { connect: { id: category.id } },
  });

  return this.toResponse(product);
}

  async update(id: string, data: UpdateProductDto) {
    const product = await this.repository.findById(id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    const { category: categoryName, ...rest } = data;
    const updateData: Record<string, unknown> = { ...rest };

    if (categoryName !== undefined) {
      const category = await this.repository.findCategoryByName(categoryName);
      if (!category) {
        throw new BadRequestException(`Category "${categoryName}" does not exist`);
      }
      updateData.category = { connect: { id: category.id } };
    }

    const updated = await this.repository.update(id, updateData);
    return this.toResponse(updated);
  }

  async remove(id: string) {
    const product = await this.repository.findById(id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    await this.repository.update(id, { active: false });
  }
}