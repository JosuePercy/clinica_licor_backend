import { Module } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { PromotionsRepository } from './promotions.repository';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [PromotionsController],
  providers: [PromotionsService, PromotionsRepository],
  exports: [PromotionsRepository],
})
export class PromotionsModule {}
