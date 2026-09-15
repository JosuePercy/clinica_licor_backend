import { Module } from '@nestjs/common';
import { ExpenseCategoriesService } from './expense-categories.service';
import { ExpenseCategoriesController } from './expense-categories.controller';
import { ExpenseCategoriesRepository } from './expense-categories.repository';

@Module({
  controllers: [ExpenseCategoriesController],
  providers: [ExpenseCategoriesService, ExpenseCategoriesRepository],
  exports: [ExpenseCategoriesRepository],
})
export class ExpenseCategoriesModule {}
