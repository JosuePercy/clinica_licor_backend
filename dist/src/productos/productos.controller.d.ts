import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    findAll(codigo?: string, stockBajo?: string, categoria?: string): Promise<{
        tamaño: string;
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
    }[]>;
    scanBarcode(codigo: string): Promise<{
        tamaño: string;
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
    }>;
    findOne(id: string): Promise<{
        tamaño: string;
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
    }>;
    create(body: CreateProductoDto): Promise<{
        tamaño: string;
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
    }>;
    update(id: string, body: UpdateProductoDto): Promise<{
        tamaño: string;
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
    }>;
    remove(id: string): Promise<void>;
}
