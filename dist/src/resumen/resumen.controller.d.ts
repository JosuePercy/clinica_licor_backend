import { ResumenService } from './resumen.service';
export declare class ResumenController {
    private readonly resumenService;
    constructor(resumenService: ResumenService);
    getResumen(mes?: string, anio?: string): Promise<{
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
