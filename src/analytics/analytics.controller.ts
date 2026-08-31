import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsFilterDto } from './dto/analytics.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('summary')
  getSummary(@Query() filters: AnalyticsFilterDto) {
    return this.analyticsService.getMonthlySummary(filters.month, filters.year);
  }

  @Get('top-product')
  getTopProduct() {
    return this.analyticsService.getTopProduct();
  }
}