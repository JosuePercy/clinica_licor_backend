import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { SalesRepository } from './sales.repository';
import { ProductsModule } from '../products/products.module';  

@Module({
  imports: [ProductsModule],
  controllers: [SalesController],
  providers: [SalesService, SalesRepository],
})
export class SalesModule {}
