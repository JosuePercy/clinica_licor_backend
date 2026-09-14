import {
  IsString,
  IsNumber,
  Min,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PromotionItemDto } from './promotion-item.dto';

export class UpdatePromotionDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(2)
  @ValidateNested({ each: true })
  @Type(() => PromotionItemDto)
  items?: PromotionItemDto[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
