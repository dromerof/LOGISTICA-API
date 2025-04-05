import { ApiProperty } from '@nestjs/swagger';
import { PedidoDto } from './pedido.dto';

export class CamionAsignadoDto {
  @ApiProperty({ example: 'be06495b-b7fd-4d3d-9f5e-c6f52ec78782', description: 'ID único del camión' })
  camionId: string;

  @ApiProperty({ example: 'Volvo', description: 'Marca del camión' })
  camionMarca: string;

  @ApiProperty({ example: 'XYZ789', description: 'Placa del camión' })
  camionPlaca: string;

  @ApiProperty({ example: 'Carga Express Ltda.', description: 'Empresa del camión' })
  camionEmpresa: string;

  @ApiProperty({ example: 15000, description: 'Capacidad máxima del camión en kg' })
  capacidadMaxima: number;

  @ApiProperty({ example: 12000, description: 'Carga asignada al camión en kg' })
  cargaAsignada: number;

  @ApiProperty({ type: [PedidoDto], description: 'Pedidos asignados a este camión' })
  pedidos: PedidoDto[];
}
