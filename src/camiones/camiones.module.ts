import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CamionesService } from './camiones.service';
import { CamionesController } from './camiones.controller';
import { Camion } from './entities/camion.entity';

@Module({
  controllers: [CamionesController],
  providers: [CamionesService],
  imports: [TypeOrmModule.forFeature([Camion])],
})
export class CamionesModule {}
