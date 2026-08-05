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
const productos_repository_1 = require("./productos.repository");
const barcode_generator_1 = require("./utils/barcode.generator");
let ProductosService = class ProductosService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    toDto(p) {
        const { tamano, ...rest } = p;
        return { ...rest, tamaño: tamano };
    }
    async findAll(filters) {
        if (filters.codigo) {
            const producto = await this.repository.findByCodigo(filters.codigo);
            return producto ? [this.toDto(producto)] : [];
        }
        const where = { activo: true };
        if (filters.stockBajo !== undefined) {
            where.stock = { lte: parseInt(filters.stockBajo, 10) };
        }
        if (filters.categoria) {
            where.categoria = filters.categoria;
        }
        const productos = await this.repository.findMany(where, { nombre: 'asc' });
        return productos.map((p) => this.toDto(p));
    }
    async findByCodigo(codigo) {
        const producto = await this.repository.findByCodigo(codigo);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con código ${codigo} no encontrado`);
        }
        return this.toDto(producto);
    }
    async findOne(id) {
        const producto = await this.repository.findById(id);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto ${id} no encontrado`);
        }
        return this.toDto(producto);
    }
    async create(data) {
        const { tamaño, tamano, codigo, ...rest } = data;
        let codigoFinal = codigo;
        if (!codigoFinal) {
            const ultimoCodigo = await this.repository.findLastCodigo();
            codigoFinal = (0, barcode_generator_1.generarCodigoBarras)(ultimoCodigo);
        }
        const producto = await this.repository.create({
            ...rest,
            codigo: codigoFinal,
            tamano: tamaño ?? tamano ?? '',
        });
        return this.toDto(producto);
    }
    async update(id, data) {
        const producto = await this.repository.findById(id);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto ${id} no encontrado`);
        }
        const { tamaño, tamano, ...rest } = data;
        const updateData = { ...rest };
        if (tamaño !== undefined)
            updateData.tamano = tamaño;
        if (tamano !== undefined)
            updateData.tamano = tamano;
        const updated = await this.repository.update(id, updateData);
        return this.toDto(updated);
    }
    async remove(id) {
        const producto = await this.repository.findById(id);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto ${id} no encontrado`);
        }
        await this.repository.delete(id);
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [productos_repository_1.ProductosRepository])
], ProductosService);
//# sourceMappingURL=productos.service.js.map