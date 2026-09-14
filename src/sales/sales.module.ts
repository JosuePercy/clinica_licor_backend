import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { SalesRepository } from './sales.repository';
import { ProductsModule } from '../products/products.module';
import { PromotionsModule } from '../promotions/promotions.module';

@Module({
  imports: [ProductsModule, PromotionsModule],
  controllers: [SalesController],
  providers: [SalesService, SalesRepository],
})
export class SalesModule {}
