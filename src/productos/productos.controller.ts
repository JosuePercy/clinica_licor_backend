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
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll(
    @Query('codigo') codigo?: string,
    @Query('stockBajo') stockBajo?: string,
    @Query('categoria') categoria?: string,
  ) {
    return this.productosService.findAll({ codigo, stockBajo, categoria });
  }

  @Get('scan/:codigo')
  scanBarcode(@Param('codigo') codigo: string) {
    return this.productosService.findByCodigo(codigo);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateProductoDto) {
    return this.productosService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateProductoDto) {
    return this.productosService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.productosService.remove(id);
  }
}
