import { IsString, IsNumber, IsInt, Min } from 'class-validator';

export class SaleItemDto {
  @IsString()
  productId!: string;

  @IsInt()
  @Min(1)
  quantity!: number;

  @IsNumber()
  @Min(0)
  unitPrice!: number;
}