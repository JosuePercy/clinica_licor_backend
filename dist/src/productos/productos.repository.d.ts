import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';
export declare class ProductosRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByCodigo(codigo: string): Promise<{
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findLastCodigo(): Promise<string | null>;
    findById(id: string): Promise<{
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findMany(where: Prisma.ProductoWhereInput, orderBy: Prisma.ProductoOrderByWithRelationInput): Promise<{
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(data: Prisma.ProductoCreateInput): Promise<{
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: Prisma.ProductoUpdateInput): Promise<{
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        codigo: string | null;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
