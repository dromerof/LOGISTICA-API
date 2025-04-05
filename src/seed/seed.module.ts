import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Camion } from 'src/camiones/entities/camion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Camion])],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
