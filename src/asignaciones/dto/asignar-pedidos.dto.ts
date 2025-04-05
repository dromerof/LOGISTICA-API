import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested, ArrayNotEmpty } from 'class-validator';
import { PedidoDto } from './pedido.dto';

export class AsignarPedidosDto {
  @ApiProperty({ type: [PedidoDto], description: 'Lista de pedidos a asignar' })
  @ArrayNotEmpty({ message: 'Debe enviar al menos un pedido' })
  @ValidateNested({ each: true })
  @Type(() => PedidoDto)
  pedidos: PedidoDto[];
}
