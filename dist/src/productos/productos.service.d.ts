import { PrismaService } from '../prisma/prisma.service';
export declare class ProductosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toDto;
    findAll(filters: {
        codigo?: string;
        stockBajo?: string;
        categoria?: string;
    }): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(data: {
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamaño?: string;
        tamano?: string;
        unidad: string;
        activo?: boolean;
        codigo?: string;
    }): Promise<any>;
    update(id: string, data: Partial<{
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamaño: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        codigo: string;
    }>): Promise<any>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
