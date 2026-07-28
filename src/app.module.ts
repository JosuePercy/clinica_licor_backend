import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { ResumenModule } from './resumen/resumen.module';

@Module({
  imports: [PrismaModule, ProductosModule, VentasModule, ResumenModule],
})
export class AppModule {}
