import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ExpensesModule } from './expenses/expenses.module';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [PrismaModule, ProductsModule, SalesModule, AnalyticsModule, ExpensesModule, CategoriesModule, CategoriesModule],
})
export class AppModule {}
