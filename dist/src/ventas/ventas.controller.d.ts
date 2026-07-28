import { VentasService } from './ventas.service';
export declare class VentasController {
    private readonly ventasService;
    constructor(ventasService: VentasService);
    findAll(periodo?: string, desde?: string, hasta?: string): Promise<({
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
    registrar(body: any): Promise<{
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
