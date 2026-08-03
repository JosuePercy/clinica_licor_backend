import { Controller, Get, Query } from '@nestjs/common';
import { ResumenService } from './resumen.service';
import { FiltroResumenDto } from './dto/resumen.dto';

@Controller('resumen')
export class ResumenController {
  constructor(private readonly resumenService: ResumenService) {}

  @Get()
  getResumen(@Query() filtros: FiltroResumenDto) {
    return this.resumenService.getResumenMensual(filtros.mes, filtros.anio);
  }

  @Get('top-producto')
  getProductoMasVendido() {
    return this.resumenService.getProductoMasVendido();
  }
}
