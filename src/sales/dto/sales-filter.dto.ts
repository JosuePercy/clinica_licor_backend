import { IsOptional, IsString } from 'class-validator';

export class SalesFilterDto {
  @IsOptional()
  @IsString()
  period?: 'day' | 'week' | 'month' | 'year' | 'specific-date' | 'range';

  @IsOptional()
  @IsString()
  from?: string;

  @IsOptional()
  @IsString()
  to?: string;

  @IsOptional()
  @IsString()
  year?: string;
}
