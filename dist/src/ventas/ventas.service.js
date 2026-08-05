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
exports.VentasService = void 0;
const common_1 = require("@nestjs/common");
const ventas_repository_1 = require("./ventas.repository");
const productos_repository_1 = require("../productos/productos.repository");
let VentasService = class VentasService {
    repository;
    productosRepository;
    constructor(repository, productosRepository) {
        this.repository = repository;
        this.productosRepository = productosRepository;
    }
    async getTransaccionesPorPeriodo(periodo = 'dia', desde, hasta) {
        const now = new Date();
        let fechaInicio;
        let fechaFin;
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
            default:
                fechaInicio = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                fechaFin = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
        }
        return this.repository.findMany({ fecha: { gte: fechaInicio, lte: fechaFin } });
    }
    async registrarTransaccion(data) {
        if (!data.items.length) {
            throw new common_1.BadRequestException('La venta debe tener al menos un ítem');
        }
        for (const item of data.items) {
            const producto = await this.productosRepository.findById(item.productoId);
            if (!producto) {
                throw new common_1.NotFoundException(`Producto ${item.productoId} no encontrado`);
            }
            if (producto.stock < item.cantidad) {
                throw new common_1.BadRequestException(`Stock insuficiente para "${producto.nombre}". Disponible: ${producto.stock}, solicitado: ${item.cantidad}`);
            }
        }
        const codigoVenta = `VTA-${Date.now()}`;
        const total = data.items.reduce((sum, item) => sum + item.cantidad * item.precioUnitario, 0);
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
};
exports.VentasService = VentasService;
exports.VentasService = VentasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ventas_repository_1.VentasRepository,
        productos_repository_1.ProductosRepository])
], VentasService);
//# sourceMappingURL=ventas.service.js.map