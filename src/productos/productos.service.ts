import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  // Mapea tamano (DB) → tamaño (frontend)
  private toDto(p: any) {
    const { tamano, ...rest } = p;
    return { ...rest, tamaño: tamano };
  }

  async findAll(filters: { codigo?: string; stockBajo?: string; categoria?: string }) {
    if (filters.codigo) {
      const producto = await this.prisma.producto.findUnique({
        where: { codigo: filters.codigo },
      });
      return producto ? [this.toDto(producto)] : [];
    }

    if (filters.stockBajo !== undefined) {
      const productos = await this.prisma.producto.findMany({
        where: { activo: true, stock: { lte: parseInt(filters.stockBajo) } },
        orderBy: { stock: 'asc' },
      });
      return productos.map((p) => this.toDto(p));
    }

    if (filters.categoria) {
      const productos = await this.prisma.producto.findMany({
        where: { activo: true, categoria: filters.categoria },
        orderBy: { nombre: 'asc' },
      });
      return productos.map((p) => this.toDto(p));
    }

    const productos = await this.prisma.producto.findMany({
      where: { activo: true },
      orderBy: { nombre: 'asc' },
    });
    return productos.map((p) => this.toDto(p));
  }

  async findOne(id: string) {
    const producto = await this.prisma.producto.findUnique({ where: { id } });
    if (!producto) throw new NotFoundException(`Producto ${id} no encontrado`);
    return this.toDto(producto);
  }

  async create(data: {
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
    tamaño?: string;
    tamano?: string;
    unidad: string;
    activo?: boolean;
    codigo?: string;
  }) {
    const { tamaño, tamano, ...rest } = data;
    const producto = await this.prisma.producto.create({
      data: { ...rest, tamano: tamaño ?? tamano ?? '' },
    });
    return this.toDto(producto);
  }

  async update(
    id: string,
    data: Partial<{
      nombre: string;
      precio: number;
      stock: number;
      categoria: string;
      tamaño: string;
      tamano: string;
      unidad: string;
      activo: boolean;
      codigo: string;
    }>,
  ) {
    const { tamaño, tamano, ...rest } = data;
    const updateData: any = { ...rest };
    if (tamaño !== undefined) updateData.tamano = tamaño;
    if (tamano !== undefined) updateData.tamano = tamano;

    const producto = await this.prisma.producto.update({
      where: { id },
      data: updateData,
    });
    return this.toDto(producto);
  }

  async remove(id: string) {
    await this.prisma.producto.delete({ where: { id } });
    return { success: true };
  }
}
