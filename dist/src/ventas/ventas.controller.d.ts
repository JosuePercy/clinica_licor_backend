import { VentasService } from './ventas.service';
export declare class VentasController {
    private readonly ventasService;
    constructor(ventasService: VentasService);
    findAll(periodo?: string, desde?: string, hasta?: string): Promise<any>;
    registrar(body: any): Promise<any>;
}
