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
exports.ProductosRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductosRepository = class ProductosRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByCodigo(codigo) {
        return this.prisma.producto.findUnique({ where: { codigo } });
    }
    async findLastCodigo() {
        const productos = await this.prisma.producto.findMany({
            where: { codigo: { startsWith: 'LIC-' } },
            orderBy: { codigo: 'desc' },
            take: 1,
        });
        return productos[0]?.codigo ?? null;
    }
    async findById(id) {
        return this.prisma.producto.findUnique({ where: { id } });
    }
    async findMany(where, orderBy) {
        return this.prisma.producto.findMany({ where, orderBy });
    }
    async create(data) {
        return this.prisma.producto.create({ data });
    }
    async update(id, data) {
        return this.prisma.producto.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.producto.delete({ where: { id } });
    }
};
exports.ProductosRepository = ProductosRepository;
exports.ProductosRepository = ProductosRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductosRepository);
//# sourceMappingURL=productos.repository.js.map