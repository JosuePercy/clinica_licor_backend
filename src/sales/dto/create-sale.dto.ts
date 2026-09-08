import { IsArray, ValidateNested, IsOptional, IsString, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { SaleItemDto } from './sale-item.dto';
import { PaymentMethod } from '@prisma/client';

export class CreateSaleDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items!: SaleItemDto[];

  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}