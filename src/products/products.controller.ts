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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser, type CurrentUserPayload } from '../auth/decorators/current-user.decorator';
import { Role } from '../auth/role.enum';

@Controller('productos')
@Roles(Role.ADMIN, Role.SELLER)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @CurrentUser() currentUser: CurrentUserPayload,
    @Query('codigo') codigo?: string,
    @Query('stockBajo') stockBajo?: string,
    @Query('categoria') categoria?: string,
  ) {
    return this.productsService.findAll(
      { code: codigo, lowStock: stockBajo, category: categoria },
      currentUser.role,
    );
  }

  @Get('scan/:codigo')
  scanBarcode(@Param('codigo') codigo: string, @CurrentUser() currentUser: CurrentUserPayload) {
    return this.productsService.findByCode(codigo, currentUser.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() currentUser: CurrentUserPayload) {
    return this.productsService.findOne(id, currentUser.role);
  }

  @Post()
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
