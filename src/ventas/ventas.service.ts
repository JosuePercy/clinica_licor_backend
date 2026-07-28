import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VentasService {
  constructor(private readonly prisma: PrismaService) {}

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
        fechaInicio = desde ? new Date(desde) : new Date(now.getFullYear(), now.getMonth(), now.getDate());
        fechaFin = new Date(fechaInicio);
        fechaFin.setHours(23, 59, 59, 999);
        break;
      case 'rango':
        fechaInicio = desde ? new Date(desde) : new Date(now.getFullYear(), now.getMonth(), 1);
        fechaFin = hasta ? new Date(hasta) : new Date();
        fechaFin.setHours(23, 59, 59, 999);
        break;
      default: // 'dia'
        fechaInicio = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        fechaFin = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    }

    return this.prisma.transaccion.findMany({
      where: { fecha: { gte: fechaInicio, lte: fechaFin } },
      include: {
        items: {
          include: { producto: true },
        },
      },
      orderBy: { fecha: 'desc' },
    });
  }

  async registrarTransaccion(data: {
    items: { productoId: string; cantidad: number; precioUnitario: number }[];
    fecha?: string | Date;
  }) {
    const codigoVenta = `VTA-${Date.now()}`;
    const total = data.items.reduce(
      (sum, item) => sum + item.cantidad * item.precioUnitario,
      0,
    );
    const fecha = data.fecha ? new Date(data.fecha) : new Date();

    const transaccion = await this.prisma.transaccion.create({
      data: {
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
      },
      include: {
        items: {
          include: { producto: true },
        },
      },
    });

    // Reducir stock de cada producto
    for (const item of data.items) {
      await this.prisma.producto.update({
        where: { id: item.productoId },
        data: { stock: { decrement: item.cantidad } },
      });
    }

    return transaccion;
  }
}
