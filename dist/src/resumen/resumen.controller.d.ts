import { ResumenService } from './resumen.service';
import { FiltroResumenDto } from './dto/resumen.dto';
export declare class ResumenController {
    private readonly resumenService;
    constructor(resumenService: ResumenService);
    getResumen(filtros: FiltroResumenDto): Promise<{
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
