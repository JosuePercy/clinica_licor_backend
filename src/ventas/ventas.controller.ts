import { Controller, Get, Post, Body, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/ventas.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Get()
  findAll(
    @Query('periodo') periodo?: string,
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
  ) {
    return this.ventasService.getTransaccionesPorPeriodo(periodo, desde, hasta);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  registrar(@Body() body: CreateVentaDto) {
    return this.ventasService.registrarTransaccion(body);
  }
}
