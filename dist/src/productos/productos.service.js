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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductosService = class ProductosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toDto(p) {
        const { tamano, ...rest } = p;
        return { ...rest, tamaño: tamano };
    }
    async findAll(filters) {
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
    async findOne(id) {
        const producto = await this.prisma.producto.findUnique({ where: { id } });
        if (!producto)
            throw new common_1.NotFoundException(`Producto ${id} no encontrado`);
        return this.toDto(producto);
    }
    async create(data) {
        const { tamaño, tamano, ...rest } = data;
        const producto = await this.prisma.producto.create({
            data: { ...rest, tamano: tamaño ?? tamano ?? '' },
        });
        return this.toDto(producto);
    }
    async update(id, data) {
        const { tamaño, tamano, ...rest } = data;
        const updateData = { ...rest };
        if (tamaño !== undefined)
            updateData.tamano = tamaño;
        if (tamano !== undefined)
            updateData.tamano = tamano;
        const producto = await this.prisma.producto.update({
            where: { id },
            data: updateData,
        });
        return this.toDto(producto);
    }
    async remove(id) {
        await this.prisma.producto.delete({ where: { id } });
        return { success: true };
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductosService);
//# sourceMappingURL=productos.service.js.map