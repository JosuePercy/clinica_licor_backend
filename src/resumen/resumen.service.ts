import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResumenService {
  constructor(private readonly prisma: PrismaService) {}

  async getResumenMensual(mes?: number, anio?: number) {
    const now = new Date();
    const targetMes = mes ?? now.getMonth() + 1;
    const targetAnio = anio ?? now.getFullYear();

    const inicio = new Date(targetAnio, targetMes - 1, 1);
    const fin = new Date(targetAnio, targetMes, 0, 23, 59, 59, 999);

    const transacciones = await this.prisma.transaccion.findMany({
      where: { fecha: { gte: inicio, lte: fin } },
      include: {
        items: {
          include: { producto: true },
        },
      },
    });

    const totalVentas = transacciones.reduce((sum, t) => sum + t.total, 0);

    // Agrupar ventas por producto
    const productMap = new Map<string, { producto: any; cantidadVendida: number }>();
    for (const t of transacciones) {
      for (const item of t.items) {
        const existing = productMap.get(item.productoId);
        if (existing) {
          existing.cantidadVendida += item.cantidad;
        } else {
          productMap.set(item.productoId, {
            producto: item.producto,
            cantidadVendida: item.cantidad,
          });
        }
      }
    }

    const productosTopVendidos = [...productMap.values()]
      .sort((a, b) => b.cantidadVendida - a.cantidadVendida)
      .slice(0, 5);

    return {
      totalVentas,
      ganancia: totalVentas * 0.3,
      totalGastos: 0,
      productosTopVendidos,
    };
  }

  async getProductoMasVendido() {
    const now = new Date();
    const inicio = new Date(now.getFullYear(), now.getMonth(), 1);

    const items = await this.prisma.itemVenta.findMany({
      where: {
        transaccion: { fecha: { gte: inicio } },
      },
      include: { producto: true },
    });

    if (!items.length) return null;

    const productMap = new Map<string, { producto: any; cantidadVendida: number }>();
    for (const item of items) {
      const existing = productMap.get(item.productoId);
      if (existing) {
        existing.cantidadVendida += item.cantidad;
      } else {
        productMap.set(item.productoId, {
          producto: item.producto,
          cantidadVendida: item.cantidad,
        });
      }
    }

    return [...productMap.values()].sort((a, b) => b.cantidadVendida - a.cantidadVendida)[0] ?? null;
  }
}
