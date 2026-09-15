import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsFilterDto, TopProductsFilterDto } from './dto/analytics.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/role.enum';

@Controller('analytics')
@Roles(Role.ADMIN)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('summary')
  getSummary(@Query() filters: AnalyticsFilterDto) {
    return this.analyticsService.getMonthlySummary(
      filters.period,
      filters.from,
      filters.to,
      filters.year,
      filters.month,
    );
  }

  @Get('top-product')
  getTopProduct() {
    return this.analyticsService.getTopProduct();
  }

  @Get('daily-sales')
  getDailySales(@Query() filters: AnalyticsFilterDto) {
    return this.analyticsService.getDailySales(
      filters.period,
      filters.from,
      filters.to,
      filters.year,
      filters.month,
    );
  }

  @Get('top-products')
  getTopProducts(@Query() filters: TopProductsFilterDto) {
    return this.analyticsService.getTopProducts(
      filters.limit,
      filters.period,
      filters.from,
      filters.to,
      filters.year,
      filters.month,
    );
  }

  @Get('expenses-by-category')
  getExpensesByCategory(@Query() filters: AnalyticsFilterDto) {
    return this.analyticsService.getExpensesByCategory(
      filters.period,
      filters.from,
      filters.to,
      filters.year,
      filters.month,
    );
  }
}
