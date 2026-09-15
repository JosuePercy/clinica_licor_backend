import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpensesFilterDto } from './dto/expenses-filter.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  CurrentUser,
  type CurrentUserPayload,
} from '../auth/decorators/current-user.decorator';
import { Role } from '../auth/role.enum';

@Controller('expenses')
@Roles(Role.ADMIN)
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  findAll(@Query() filters: ExpensesFilterDto) {
    return this.expensesService.getByPeriod(
      filters.period,
      filters.from,
      filters.to,
    );
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() body: CreateExpenseDto,
    @CurrentUser() currentUser: CurrentUserPayload,
  ) {
    return this.expensesService.create(body, currentUser.id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.expensesService.remove(id);
  }
}
