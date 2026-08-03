import { ProductosRepository } from './productos.repository';
import type { CreateProductoDto } from './dto/create-producto.dto';
import type { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosService {
    private readonly repository;
    constructor(repository: ProductosRepository);
    private toDto;
    findAll(filters: {
        codigo?: string;
        stockBajo?: string;
        categoria?: string;
    }): Promise<{
        tamaño: string;
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findByCodigo(codigo: string): Promise<{
        tamaño: string;
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: string): Promise<{
        tamaño: string;
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(data: CreateProductoDto): Promise<{
        tamaño: string;
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateProductoDto): Promise<{
        tamaño: string;
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<void>;
}
