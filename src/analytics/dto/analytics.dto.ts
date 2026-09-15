import { IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AnalyticsFilterDto {
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

  @IsOptional()
  @IsString()
  month?: string;
}

export class TopProductsFilterDto extends AnalyticsFilterDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;
}
