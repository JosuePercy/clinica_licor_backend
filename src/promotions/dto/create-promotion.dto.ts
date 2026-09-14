import {
  IsString,
  IsNumber,
  Min,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PromotionItemDto } from './promotion-item.dto';

export class CreatePromotionDto {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsArray()
  @ArrayMinSize(2)
  @ValidateNested({ each: true })
  @Type(() => PromotionItemDto)
  items!: PromotionItemDto[];
}
