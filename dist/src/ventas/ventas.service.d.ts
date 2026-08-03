import { PrismaService } from '../prisma/prisma.service';
export declare class VentasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getTransaccionesPorPeriodo(periodo?: string, desde?: string, hasta?: string): Promise<({
        items: ({
            producto: {
                tamano: string;
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
            };
        } & {
            id: string;
            cantidad: number;
            precioUnitario: number;
            subtotal: number;
            productoId: string;
            transaccionId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        codigoVenta: string;
        total: number;
        fecha: Date;
    })[]>;
    registrarTransaccion(data: {
        items: {
            productoId: string;
            cantidad: number;
            precioUnitario: number;
        }[];
        fecha?: string | Date;
    }): Promise<{
        items: ({
            producto: {
                tamano: string;
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
            };
        } & {
            id: string;
            cantidad: number;
            precioUnitario: number;
            subtotal: number;
            productoId: string;
            transaccionId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        codigoVenta: string;
        total: number;
        fecha: Date;
    }>;
}
