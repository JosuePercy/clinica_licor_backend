import { VentasRepository } from './ventas.repository';
import { ProductosRepository } from '../productos/productos.repository';
import type { CreateVentaDto } from './dto/ventas.dto';
export declare class VentasService {
    private readonly repository;
    private readonly productosRepository;
    constructor(repository: VentasRepository, productosRepository: ProductosRepository);
    private parseLocalDate;
    getTransaccionesPorPeriodo(periodo?: string, desde?: string, hasta?: string): Promise<({
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
    registrarTransaccion(data: CreateVentaDto): Promise<{
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
}
