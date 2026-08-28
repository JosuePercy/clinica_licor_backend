import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { VentasRepository } from './ventas.repository';
import { ProductosRepository } from '../productos/productos.repository';
import type { CreateVentaDto } from './dto/ventas.dto';

@Injectable()
export class VentasService {
  constructor(
    private readonly repository: VentasRepository,
    private readonly productosRepository: ProductosRepository,
  ) {}

  private parseLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  async getTransaccionesPorPeriodo(
    periodo: string = 'dia',
    desde?: string,
    hasta?: string,
  ) {
    const now = new Date();
    let fechaInicio: Date;
    let fechaFin: Date;

    switch (periodo) {
      case 'semana': {
        const day = now.getDay();
        fechaInicio = new Date(now);
        fechaInicio.setDate(now.getDate() - day);
        fechaInicio.setHours(0, 0, 0, 0);
        fechaFin = new Date(now);
        fechaFin.setHours(23, 59, 59, 999);
        break;
      }
      case 'mes':
        fechaInicio = new Date(now.getFullYear(), now.getMonth(), 1);
        fechaFin = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        break;
      case 'fecha-especifica':
        fechaInicio = desde
          ? this.parseLocalDate(desde)
          : new Date(now.getFullYear(), now.getMonth(), now.getDate());
        fechaFin = new Date(fechaInicio);
        fechaFin.setHours(23, 59, 59, 999);
        break;
      case 'rango':
        fechaInicio = desde
          ? this.parseLocalDate(desde)
          : new Date(now.getFullYear(), now.getMonth(), 1);
        fechaFin = hasta ? this.parseLocalDate(hasta) : new Date();
        fechaFin.setHours(23, 59, 59, 999);
        break;
      default: // 'dia'
        fechaInicio = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        fechaFin = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    }

    const ventas = await this.repository.findMany({ date: { gte: fechaInicio, lte: fechaFin } });
    return ventas.map((v) => this.toDto(v));
  }

  async registrarTransaccion(data: CreateVentaDto) {
    if (!data.items.length) {
      throw new BadRequestException('La venta debe tener al menos un ítem');
    }

    for (const item of data.items) {
      const producto = await this.productosRepository.findById(item.productoId);
      if (!producto) {
        throw new NotFoundException(`Producto ${item.productoId} no encontrado`);
      }
      if (producto.stock < item.cantidad) {
        throw new BadRequestException(
          `Stock insuficiente para "${producto.name}". Disponible: ${producto.stock}, solicitado: ${item.cantidad}`,
        );
      }
    }

    const codigoVenta = `VTA-${Date.now()}`;
    const total = data.items.reduce(
      (sum, item) => sum + item.cantidad * item.precioUnitario,
      0,
    );
    const fecha = data.fecha ? new Date(data.fecha) : new Date();

    const venta = await this.repository.create({
      saleCode: codigoVenta,
      total,
      date: fecha,
      items: {
        create: data.items.map((item) => ({
          product: { connect: { id: item.productoId } },
          quantity: item.cantidad,
          unitPrice: item.precioUnitario,
          subtotal: item.cantidad * item.precioUnitario,
        })),
      },
    });

    for (const item of data.items) {
      await this.repository.decrementStock(item.productoId, item.cantidad);
    }

    return this.toDto(venta);
  }

  private toDto(venta: any) {
    return {
      id: venta.id,
      codigoVenta: venta.saleCode,
      total: venta.total,
      fecha: venta.date,
      createdAt: venta.createdAt,
      anulado: venta.cancelled,
      items: venta.items?.map((item: any) => ({
        id: item.id,
        productoId: item.productId,
        cantidad: item.quantity,
        precioUnitario: item.unitPrice,
        subtotal: item.subtotal,
        producto: item.product
          ? {
              id: item.product.id,
              nombre: item.product.name,
              precio: item.product.price,
            }
          : undefined,
      })),
    };
  }
}