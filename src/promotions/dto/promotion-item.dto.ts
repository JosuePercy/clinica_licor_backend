import { IsString, IsInt, Min } from 'class-validator';

export class PromotionItemDto {
  @IsString()
  productId!: string;

  @IsInt()
  @Min(1)
  quantity!: number;
}
