import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ExpensesModule } from './expenses/expenses.module';
import { CategoriesModule } from './categories/categories.module';
import { ExpenseCategoriesModule } from './expense-categories/expense-categories.module';
import { PromotionsModule } from './promotions/promotions.module';
import { ClerkAuthGuard } from './auth/guards/clerk-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    SalesModule,
    AnalyticsModule,
    ExpensesModule,
    CategoriesModule,
    ExpenseCategoriesModule,
    PromotionsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: ClerkAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
