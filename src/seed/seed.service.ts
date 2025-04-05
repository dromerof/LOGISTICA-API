import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Camion } from 'src/camiones/entities/camion.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Camion)
    private readonly camionRepository: Repository<Camion>,
  ) {}

  async executeSeed() {
    try {
      await this.camionRepository.clear();

      const camiones = [
        {
          marca: 'Mercedes-Benz',
          placa: 'ABC123',
          empresa: 'TransLogística S.A.',
          capacidadKilogramos: 10000,
        },
        {
          marca: 'Volvo',
          placa: 'XYZ789',
          empresa: 'Carga Express Ltda.',
          capacidadKilogramos: 15000,
        },
        {
          marca: 'Scania',
          placa: 'JKL456',
          empresa: 'Transportes Nacionales',
          capacidadKilogramos: 8000,
        },
        {
          marca: 'Kenworth',
          placa: 'MNO789',
          empresa: 'Rutas Seguras',
          capacidadKilogramos: 12000,
        },
        {
          marca: 'Freightliner',
          placa: 'QRS345',
          empresa: 'Cargas Pesadas S.A.',
          capacidadKilogramos: 14000,
        },
        {
          marca: 'MAN',
          placa: 'TUV678',
          empresa: 'Logística Avanzada',
          capacidadKilogramos: 13000,
        },
        {
          marca: 'DAF',
          placa: 'WXY901',
          empresa: 'Transportes del Norte',
          capacidadKilogramos: 11000,
        },
        {
          marca: 'Iveco',
          placa: 'BCD234',
          empresa: 'Carga Express Ltda.',
          capacidadKilogramos: 9000,
        },
        {
          marca: 'Peterbilt',
          placa: 'EFG567',
          empresa: 'MoviCarga S.A.',
          capacidadKilogramos: 12500,
        },
        {
          marca: 'Mack',
          placa: 'HIJ890',
          empresa: 'Transporte Seguro',
          capacidadKilogramos: 13500,
        },
      ];

      await this.camionRepository.save(camiones);

      return { mensaje: 'Camiones agregados correctamente.' };
    } catch (error) {
      return { error: 'Error al ejecutar el seed', detalle: error.message };
    }
  }
}
