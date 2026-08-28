import { IsString, IsNumber, IsArray, ValidateNested, IsOptional, Min, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class ItemVentaDto {
  @IsString()
  productoId!: string;

  @IsInt()
  @Min(1)
  cantidad!: number;

  @IsNumber()
  @Min(0)
  precioUnitario!: number;
}

export class CreateVentaDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemVentaDto)
  items!: ItemVentaDto[];

  @IsOptional()
  @IsString()
  fecha?: string;
}

export class FiltroVentasDto {
  @IsOptional()
  @IsString()
  periodo?: 'dia' | 'semana' | 'mes' | 'fecha-especifica' | 'rango';

  @IsOptional()
  @IsString()
  desde?: string;

  @IsOptional()
  @IsString()
  hasta?: string;
}