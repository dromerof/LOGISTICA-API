import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class PedidoDto {
  @ApiProperty({ example: 12000, description: 'Peso del pedido en Kilogramos' })
  @Type(() => Number)
  @IsNumber({}, { message: 'El peso debe ser un número válido' })
  @IsPositive({ message: 'El peso debe ser un número positivo' })
  pesoKg: number;

  @ApiProperty({ example: 'LogiTrans', description: 'Nombre de la empresa' })
  @IsString({ message: 'La empresa debe ser una cadena de texto' })
  empresa: string;
}
