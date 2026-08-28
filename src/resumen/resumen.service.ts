import { Injectable } from '@nestjs/common';
import { ResumenRepository } from './resumen.repository';

@Injectable()
export class ResumenService {
  constructor(private readonly repository: ResumenRepository) {}

  private toProductoDto(p: any) {
    if (!p) return null;
    return {
      id: p.id,
      nombre: p.name,
      precio: p.price,
    };
  }

  async getResumenMensual(mes?: number, anio?: number) {
    const now = new Date();
    const targetMes = mes ?? now.getMonth() + 1;
    const targetAnio = anio ?? now.getFullYear();

    const inicio = new Date(targetAnio, targetMes - 1, 1);
    const fin = new Date(targetAnio, targetMes, 0, 23, 59, 59, 999);

    const transacciones = await this.repository.findTransacciones({ date: { gte: inicio, lte: fin } });

    const totalVentas = transacciones.reduce((sum, t) => sum + t.total, 0);

    const productMap = new Map<string, { producto: any; cantidadVendida: number }>();
    for (const t of transacciones) {
      for (const item of t.items) {
        const existing = productMap.get(item.productId);
        if (existing) {
          existing.cantidadVendida += item.quantity;
        } else {
          productMap.set(item.productId, {
            producto: this.toProductoDto(item.product),
            cantidadVendida: item.quantity,
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

    const items = await this.repository.findItemsVenta({ sale: { date: { gte: inicio } } });

    if (!items.length) return null;

    const productMap = new Map<string, { producto: any; cantidadVendida: number }>();
    for (const item of items) {
      const existing = productMap.get(item.productId);
      if (existing) {
        existing.cantidadVendida += item.quantity;
      } else {
        productMap.set(item.productId, {
          producto: this.toProductoDto(item.product),
          cantidadVendida: item.quantity,
        });
      }
    }

    return [...productMap.values()].sort((a, b) => b.cantidadVendida - a.cantidadVendida)[0] ?? null;
  }
}