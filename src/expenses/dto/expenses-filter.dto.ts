import { IsOptional, IsString } from 'class-validator';

export class ExpensesFilterDto {
  @IsOptional()
  @IsString()
  period?: 'day' | 'week' | 'month' | 'specific-date' | 'range';

  @IsOptional()
  @IsString()
  from?: string;

  @IsOptional()
  @IsString()
  to?: string;
}