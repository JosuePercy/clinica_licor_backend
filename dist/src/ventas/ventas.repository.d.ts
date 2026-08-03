import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';
export declare class VentasRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findMany(where: Prisma.TransaccionWhereInput): Promise<({
        items: ({
            producto: {
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
            };
        } & {
            id: string;
            cantidad: number;
            precioUnitario: number;
            subtotal: number;
            transaccionId: string;
            productoId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        codigoVenta: string;
        total: number;
        fecha: Date;
    })[]>;
    create(data: Prisma.TransaccionCreateInput): Promise<{
        items: ({
            producto: {
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
            };
        } & {
            id: string;
            cantidad: number;
            precioUnitario: number;
            subtotal: number;
            transaccionId: string;
            productoId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        codigoVenta: string;
        total: number;
        fecha: Date;
    }>;
    decrementStock(productoId: string, cantidad: number): Promise<{
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
