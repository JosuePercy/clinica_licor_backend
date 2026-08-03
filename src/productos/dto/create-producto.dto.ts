import { IsString, IsNumber, IsInt, IsBoolean, IsOptional, Min } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre!: string;

  @IsNumber()
  @Min(0)
  precio!: number;

  @IsInt()
  @Min(0)
  stock!: number;

  @IsString()
  categoria!: string;

  @IsString()
  unidad!: string;

  @IsOptional()
  @IsString()
  tamano?: string;

  @IsOptional()
  @IsString()
  tamaño?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  codigo?: string;
}
