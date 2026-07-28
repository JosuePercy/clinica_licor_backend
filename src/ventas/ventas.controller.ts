import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { VentasService } from './ventas.service';

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
  registrar(@Body() body: any) {
    return this.ventasService.registrarTransaccion(body);
  }
}
