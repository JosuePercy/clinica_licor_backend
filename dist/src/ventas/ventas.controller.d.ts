import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/ventas.dto';
export declare class VentasController {
    private readonly ventasService;
    constructor(ventasService: VentasService);
    findAll(periodo?: string, desde?: string, hasta?: string): Promise<({
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
    registrar(body: CreateVentaDto): Promise<{
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
