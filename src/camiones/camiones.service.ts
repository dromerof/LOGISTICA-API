import {Injectable, InternalServerErrorException, Logger,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCamionDto } from './dto/create-camione.dto';
import { Camion } from './entities/camion.entity';

@Injectable()
export class CamionesService {
  private readonly logger = new Logger('CamionesService');

  constructor(
    @InjectRepository(Camion)
    private readonly camionRepository: Repository<Camion>,
  ) {}

  async create(createCamionDto: CreateCamionDto) {
    try {
      const camionData = this.camionRepository.create(createCamionDto);
      const camion = await this.camionRepository.save(camionData);

      return {
        status: 201,
        mensaje: 'Camión creado correctamente.',
        data: {
          ...camion,
        },
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error: any): never {
    this.logger.error(error);
    throw new InternalServerErrorException('Error al crear el camión.');
  }
}
