import { Module } from '@nestjs/common';
import { ResumenService } from './resumen.service';
import { ResumenController } from './resumen.controller';
import { ResumenRepository } from './resumen.repository';

@Module({
  controllers: [ResumenController],
  providers: [ResumenService, ResumenRepository],
})
export class ResumenModule {}
