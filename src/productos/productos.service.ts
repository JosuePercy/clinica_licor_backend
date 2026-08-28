import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { ProductosRepository } from './productos.repository';
import type { CreateProductoDto } from './dto/create-producto.dto';
import type { UpdateProductoDto } from './dto/update-producto.dto';
import { generarCodigoBarras } from './utils/barcode.generator';
import type { Product, Category } from '@prisma/client';

type ProductWithCategory = Product & { category: Category };

@Injectable()
export class ProductosService {
  constructor(private readonly repository: ProductosRepository) {}

  private toDto(p: ProductWithCategory) {
    const { categoryId, category, size, active, code, ...rest } = p;
    return {
      ...rest,
      tamaño: size,
      activo: active,
      codigo: code,
      categoria: category?.name ?? null,
    };
  }

  async findAll(filters: { codigo?: string; stockBajo?: string; categoria?: string }) {
    if (filters.codigo) {
      const producto = await this.repository.findByCodigo(filters.codigo);
      return producto ? [this.toDto(producto)] : [];
    }

    const where: { active: boolean; stock?: { lte: number }; category?: { name: string } } = {
      active: true,
    };
    if (filters.stockBajo !== undefined) {
      where.stock = { lte: parseInt(filters.stockBajo, 10) };
    }
    if (filters.categoria) {
      where.category = { name: filters.categoria };
    }

    const productos = await this.repository.findMany(where, { name: 'asc' });
    return productos.map((p) => this.toDto(p));
  }

  async findByCodigo(codigo: string) {
    const producto = await this.repository.findByCodigo(codigo);
    if (!producto) {
      throw new NotFoundException(`Producto con código ${codigo} no encontrado`);
    }
    return this.toDto(producto);
  }

  async findOne(id: string) {
    const producto = await this.repository.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
    return this.toDto(producto);
  }

  async create(data: CreateProductoDto) {
  const { tamaño, tamano, codigo, categoria, nombre, precio, unidad, activo, ...rest } = data;

  const category = await this.repository.findCategoryByName(categoria);
  if (!category) {
    throw new BadRequestException(`La categoría "${categoria}" no existe`);
  }

  let codigoFinal = codigo;
  if (!codigoFinal) {
    const ultimoCodigo = await this.repository.findLastCodigo();
    codigoFinal = generarCodigoBarras(ultimoCodigo);
  }

  const producto = await this.repository.create({
    ...rest,
    name: nombre,
    price: precio,
    unit: unidad,
    active: activo ?? true,
    code: codigoFinal,
    size: tamaño ?? tamano ?? '',
    category: { connect: { id: category.id } },
  });

  return this.toDto(producto);
}
  async update(id: string, data: UpdateProductoDto) {
    const producto = await this.repository.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }

    const { tamaño, tamano, categoria, ...rest } = data;
    const updateData: Record<string, unknown> = { ...rest };
    if (tamaño !== undefined) updateData.size = tamaño;
    if (tamano !== undefined) updateData.size = tamano;

    if (categoria !== undefined) {
      const category = await this.repository.findCategoryByName(categoria);
      if (!category) {
        throw new BadRequestException(`La categoría "${categoria}" no existe`);
      }
      updateData.category = { connect: { id: category.id } };
    }

    const updated = await this.repository.update(id, updateData);
    return this.toDto(updated);
  }

  async remove(id: string) {
    const producto = await this.repository.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
    await this.repository.update(id, { active: false });
  }
}