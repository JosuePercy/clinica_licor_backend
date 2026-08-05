"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumenService = void 0;
const common_1 = require("@nestjs/common");
const resumen_repository_1 = require("./resumen.repository");
let ResumenService = class ResumenService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getResumenMensual(mes, anio) {
        const now = new Date();
        const targetMes = mes ?? now.getMonth() + 1;
        const targetAnio = anio ?? now.getFullYear();
        const inicio = new Date(targetAnio, targetMes - 1, 1);
        const fin = new Date(targetAnio, targetMes, 0, 23, 59, 59, 999);
        const transacciones = await this.repository.findTransacciones({ fecha: { gte: inicio, lte: fin } });
        const totalVentas = transacciones.reduce((sum, t) => sum + t.total, 0);
        const productMap = new Map();
        for (const t of transacciones) {
            for (const item of t.items) {
                const existing = productMap.get(item.productoId);
                if (existing) {
                    existing.cantidadVendida += item.cantidad;
                }
                else {
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
        const items = await this.repository.findItemsVenta({ transaccion: { fecha: { gte: inicio } } });
        if (!items.length)
            return null;
        const productMap = new Map();
        for (const item of items) {
            const existing = productMap.get(item.productoId);
            if (existing) {
                existing.cantidadVendida += item.cantidad;
            }
            else {
                productMap.set(item.productoId, {
                    producto: item.producto,
                    cantidadVendida: item.cantidad,
                });
            }
        }
        return [...productMap.values()].sort((a, b) => b.cantidadVendida - a.cantidadVendida)[0] ?? null;
    }
};
exports.ResumenService = ResumenService;
exports.ResumenService = ResumenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [resumen_repository_1.ResumenRepository])
], ResumenService);
//# sourceMappingURL=resumen.service.js.map