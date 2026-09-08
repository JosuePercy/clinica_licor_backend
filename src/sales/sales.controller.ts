import { Controller, Get, Post, Body, Query, HttpCode, HttpStatus, Patch, Param } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { SalesFilterDto } from './dto/sales-filter.dto';
import { CancelSaleDto } from './dto/cancel-sale.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser, type CurrentUserPayload } from '../auth/decorators/current-user.decorator';
import { Role } from '../auth/role.enum';

@Controller('sales')
@Roles(Role.ADMIN, Role.SELLER)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  findAll(@Query() filters: SalesFilterDto) {
    return this.salesService.getSalesByPeriod(filters.period, filters.from, filters.to);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  register(@Body() body: CreateSaleDto, @CurrentUser() currentUser: CurrentUserPayload) {
    return this.salesService.registerSale(body, currentUser.id);
  }

  @Patch(':id/cancel')
  @Roles(Role.ADMIN)
  cancel(@Param('id') id: string, @Body() body: CancelSaleDto){
    return this.salesService.cancelSale(id, body.reason)
  }

}