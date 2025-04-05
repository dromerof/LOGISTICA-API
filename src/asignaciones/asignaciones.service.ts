import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Camion } from 'src/camiones/entities/camion.entity';

@Injectable()
export class AsignacionesService {
  constructor(
    @InjectRepository(Camion)
    private readonly camionRepository: Repository<Camion>,
  ) {}

  async asignarPedidosACamiones(
    pedidosPeso: { pesoKg: number; empresa: string }[],
  ): Promise<any> {
    const camiones = await this.camionRepository.find();

    if (camiones.length === 0) {
      throw new HttpException(
        {
          status: 404,
          mensaje: 'No hay camiones registrados en la base de datos.',
        },
        HttpStatus.NOT_FOUND
      );
    }

    camiones.sort(
      (a, b) => b.capacidadKilogramos - a.capacidadKilogramos,
    );
    pedidosPeso.sort((a, b) => b.pesoKg - a.pesoKg);

    const camionesUsados: {
      camion: Camion;
      carga: number;
      pedidos: { pesoKg: number; empresa: string }[];
    }[] = [];

    for (const pedido of pedidosPeso) {
      let pesoRestante = pedido.pesoKg;
      let asignado = false;

      for (const usado of camionesUsados) {
        const espacioDisponible =
          usado.camion.capacidadKilogramos - usado.carga;

        if (espacioDisponible >= pesoRestante) {
          usado.pedidos.push({
            pesoKg: pesoRestante,
            empresa: pedido.empresa,
          });
          usado.carga += pesoRestante;
          asignado = true;
          break;
        }
      }

      if (!asignado) {
        const camionDisponible = camiones.find(
          (c) =>
            !camionesUsados.some((cu) => cu.camion.id === c.id) &&
            c.capacidadKilogramos >= pesoRestante,
        );

        if (camionDisponible) {
          camionesUsados.push({
            camion: camionDisponible,
            carga: pesoRestante,
            pedidos: [
              {
                pesoKg: pesoRestante,
                empresa: pedido.empresa,
              },
            ],
          });
          asignado = true;
        }
      }

      if (!asignado) {
        while (pesoRestante > 0) {
          const camionNuevo = camiones.find(
            (c) => !camionesUsados.some((cu) => cu.camion.id === c.id),
          );

          if (!camionNuevo) {
            throw new HttpException(
              {
                status: 422,
                mensaje: `No hay camiones suficientes para cubrir el pedido de ${pedido.pesoKg} kg.`,
                faltante: pesoRestante,
              },
              HttpStatus.UNPROCESSABLE_ENTITY
            );
          }

          const cargaAsignar = Math.min(
            camionNuevo.capacidadKilogramos,
            pesoRestante,
          );

          camionesUsados.push({
            camion: camionNuevo,
            carga: cargaAsignar,
            pedidos: [
              {
                pesoKg: cargaAsignar,
                empresa: pedido.empresa,
              },
            ],
          });

          pesoRestante -= cargaAsignar;
        }
      }
    }

    return {
      status: 201,
      mensaje: 'Pedido asignado correctamente',
      totalCamionesUsados: camionesUsados.length,
      asignaciones: camionesUsados.map((c) => ({
        camionId: c.camion.id,
        camionMarca: c.camion.marca,
        camionPlaca: c.camion.placa,
        camionEmpresa: c.camion.empresa,
        capacidadMaxima: c.camion.capacidadKilogramos,
        cargaAsignada: c.carga,
        pedidos: c.pedidos,
      })),
    };
  }
}
