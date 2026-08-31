import { Controller, Get, Post, Body, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { SalesFilterDto } from './dto/sales-filter.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  findAll(@Query() filters: SalesFilterDto) {
    return this.salesService.getSalesByPeriod(filters.period, filters.from, filters.to);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  register(@Body() body: CreateSaleDto) {
    return this.salesService.registerSale(body);
  }
}