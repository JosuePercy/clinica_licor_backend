import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/role.enum';

@Controller('promotions')
@Roles(Role.ADMIN, Role.SELLER)
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @Get()
  findAll(@Query('active') active?: string) {
    const activeFilter = active === undefined ? undefined : active === 'true';
    return this.promotionsService.findAll(activeFilter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionsService.findOne(id);
  }

  @Post()
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreatePromotionDto) {
    return this.promotionsService.create(body);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() body: UpdatePromotionDto) {
    return this.promotionsService.update(id, body);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.promotionsService.remove(id);
  }
}
