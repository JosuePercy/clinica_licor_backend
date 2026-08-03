import { PrismaService } from '../prisma/prisma.service';
export declare class ResumenService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getResumenMensual(mes?: number, anio?: number): Promise<{
        totalVentas: any;
        ganancia: number;
        totalGastos: number;
        productosTopVendidos: {
            producto: any;
            cantidadVendida: number;
        }[];
    }>;
    getProductoMasVendido(): Promise<{
        producto: any;
        cantidadVendida: number;
    } | null>;
}
