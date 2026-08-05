import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductosRepository } from './productos.repository';
import type { CreateProductoDto } from './dto/create-producto.dto';
import type { UpdateProductoDto } from './dto/update-producto.dto';
import { generarCodigoBarras } from './utils/barcode.generator';
import type { Producto } from '@prisma/client';

@Injectable()
export class ProductosService {
  constructor(private readonly repository: ProductosRepository) {}

  private toDto(p: Producto) {
    const { tamano, ...rest } = p;
    return { ...rest, tamaño: tamano };
  }

  async findAll(filters: { codigo?: string; stockBajo?: string; categoria?: string }) {
    if (filters.codigo) {
      const producto = await this.repository.findByCodigo(filters.codigo);
      return producto ? [this.toDto(producto)] : [];
    }

    const where: { activo: boolean; stock?: { lte: number }; categoria?: string } = { activo: true };
    if (filters.stockBajo !== undefined) {
      where.stock = { lte: parseInt(filters.stockBajo, 10) };
    }
    if (filters.categoria) {
      where.categoria = filters.categoria;
    }

    const productos = await this.repository.findMany(where, { nombre: 'asc' });
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
  const { tamaño, tamano, codigo, ...rest } = data;

  let codigoFinal = codigo;
  if (!codigoFinal) {
    const ultimoCodigo = await this.repository.findLastCodigo();
    codigoFinal = generarCodigoBarras(ultimoCodigo);
  }

  const producto = await this.repository.create({
    ...rest,
    codigo: codigoFinal,
    tamano: tamaño ?? tamano ?? '',
  });

  return this.toDto(producto);
}

  async update(id: string, data: UpdateProductoDto) {
    const producto = await this.repository.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }

    const { tamaño, tamano, ...rest } = data;
    const updateData: Record<string, unknown> = { ...rest };
    if (tamaño !== undefined) updateData.tamano = tamaño;
    if (tamano !== undefined) updateData.tamano = tamano;

    const updated = await this.repository.update(id, updateData);
    return this.toDto(updated);
  }

  async remove(id: string) {
    const producto = await this.repository.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
    await this.repository.delete(id);
  }
}
