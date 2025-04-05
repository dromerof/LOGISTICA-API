import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AsignacionesService } from './asignaciones.service';
import { AsignacionesController } from './asignaciones.controller';
import { Camion } from '../camiones/entities/camion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Camion])],
  controllers: [AsignacionesController],
  providers: [AsignacionesService],
})
export class AsignacionesModule {}
