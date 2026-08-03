import { Controller, Get, Query } from '@nestjs/common';
import { ResumenService } from './resumen.service';

@Controller('resumen')
export class ResumenController {
  constructor(private readonly resumenService: ResumenService) {}

  @Get()
  getResumen(
    @Query('mes') mes?: string,
    @Query('anio') anio?: string,
  ) {
    return this.resumenService.getResumenMensual(
      mes ? parseInt(mes) : undefined,
      anio ? parseInt(anio) : undefined,
    );
  }

  @Get('top-producto')
  getProductoMasVendido() {
    return this.resumenService.getProductoMasVendido();
  }
}
