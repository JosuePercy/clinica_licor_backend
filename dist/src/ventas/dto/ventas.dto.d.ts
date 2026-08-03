export declare class ItemVentaDto {
    productoId: string;
    cantidad: number;
    precioUnitario: number;
}
export declare class CreateVentaDto {
    items: ItemVentaDto[];
    fecha?: string;
}
export declare class FiltroVentasDto {
    periodo?: 'dia' | 'semana' | 'mes' | 'fecha-especifica' | 'rango';
    desde?: string;
    hasta?: string;
}
