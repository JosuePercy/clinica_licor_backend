import { ResumenRepository } from './resumen.repository';
export declare class ResumenService {
    private readonly repository;
    constructor(repository: ResumenRepository);
    getResumenMensual(mes?: number, anio?: number): Promise<{
        totalVentas: number;
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
