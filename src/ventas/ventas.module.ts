import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { VentasRepository } from './ventas.repository';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports: [ProductosModule],
  controllers: [VentasController],
  providers: [VentasService, VentasRepository],
})
export class VentasModule {}
