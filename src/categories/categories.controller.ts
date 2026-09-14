import { Controller, Get, Post, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/role.enum';

@Controller('categories')
@Roles(Role.ADMIN, Role.SELLER)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.create(body);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}