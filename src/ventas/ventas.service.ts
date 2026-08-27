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
    return new Date(year, month - 1, day); // hora local, 00:00:00, sin ambigüedad UTC
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

    return this.repository.findMany({ fecha: { gte: fechaInicio, lte: fechaFin } });
  }

  async registrarTransaccion(data: CreateVentaDto) {
    if (!data.items.length) {
      throw new BadRequestException('La venta debe tener al menos un ítem');
    }

    // Verificar que todos los productos existen y tienen stock suficiente
    for (const item of data.items) {
      const producto = await this.productosRepository.findById(item.productoId);
      if (!producto) {
        throw new NotFoundException(`Producto ${item.productoId} no encontrado`);
      }
      if (producto.stock < item.cantidad) {
        throw new BadRequestException(
          `Stock insuficiente para "${producto.nombre}". Disponible: ${producto.stock}, solicitado: ${item.cantidad}`,
        );
      }
    }

    const codigoVenta = `VTA-${Date.now()}`;
    const total = data.items.reduce(
      (sum, item) => sum + item.cantidad * item.precioUnitario,
      0,
    );
    const fecha = data.fecha ? new Date(data.fecha) : new Date();

    const transaccion = await this.repository.create({
      codigoVenta,
      total,
      fecha,
      items: {
        create: data.items.map((item) => ({
          productoId: item.productoId,
          cantidad: item.cantidad,
          precioUnitario: item.precioUnitario,
          subtotal: item.cantidad * item.precioUnitario,
        })),
      },
    });

    for (const item of data.items) {
      await this.repository.decrementStock(item.productoId, item.cantidad);
    }

    return transaccion;
  }
}
