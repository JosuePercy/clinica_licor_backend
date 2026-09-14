import { IsString, IsInt, Min } from 'class-validator';

export class SaleComboDto {
  @IsString()
  promotionId!: string;

  @IsInt()
  @Min(1)
  quantity!: number;
}
