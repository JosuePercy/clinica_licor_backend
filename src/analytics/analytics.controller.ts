import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsFilterDto, TopProductsFilterDto } from './dto/analytics.dto';

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

  @Get('daily-sales')
  getDailySales(@Query() filters: AnalyticsFilterDto) {
    return this.analyticsService.getDailySales(filters.month, filters.year);
  }

  @Get('top-products')
  getTopProducts(@Query() filters: TopProductsFilterDto) {
    return this.analyticsService.getTopProducts(filters.limit, filters.month, filters.year);
  }

  @Get('expenses-by-category')
  getExpensesByCategory(@Query() filters: AnalyticsFilterDto) {
    return this.analyticsService.getExpensesByCategory(filters.month, filters.year);
  }
}