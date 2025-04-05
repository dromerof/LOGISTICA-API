import { ApiProperty } from '@nestjs/swagger';
import { CamionAsignadoDto } from './camion-asignado.dto';

export class AsignacionDto {
  @ApiProperty({ example: 'Pedidos asignados correctamente' })
  mensaje: string;

  @ApiProperty({ example: 1, description: 'Cantidad total de camiones usados' })
  totalCamionesUsados: number;

  @ApiProperty({ type: [CamionAsignadoDto], description: 'Camiones utilizados en la asignación' })
  asignaciones: CamionAsignadoDto[];
}
