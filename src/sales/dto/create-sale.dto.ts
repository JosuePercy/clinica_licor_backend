import {
  IsArray,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SaleItemDto } from './sale-item.dto';
import { SaleComboDto } from './sale-combo.dto';
import { PaymentMethod } from '@prisma/client';

export class CreateSaleDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items?: SaleItemDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleComboDto)
  combos?: SaleComboDto[];

  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}
