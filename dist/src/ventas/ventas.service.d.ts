import { PrismaService } from '../prisma/prisma.service';
export declare class VentasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getTransaccionesPorPeriodo(periodo?: string, desde?: string, hasta?: string): Promise<any>;
    registrarTransaccion(data: {
        items: {
            productoId: string;
            cantidad: number;
            precioUnitario: number;
        }[];
        fecha?: string | Date;
    }): Promise<any>;
}
