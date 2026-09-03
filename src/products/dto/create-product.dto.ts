import { IsString, IsNumber, IsInt, IsBoolean, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsNumber()
  @Min(0)
  costPrice!: number;

  @IsInt()
  @Min(0)
  stock!: number;

  @IsString()
  category!: string;

  @IsString()
  unit!: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsString()
  code?: string;
}