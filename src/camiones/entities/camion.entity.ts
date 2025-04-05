import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Camion {
  @ApiProperty({
    example: 'fc34a4e0-652a-4c86-97e8-a3d2fd37f659',
    description: 'ID único del camion',
  })
  @PrimaryGeneratedColumn('uuid', { name: 'camion_id' })
  id: number;

  @ApiProperty({
    example: 'Isuzu',
    description: 'Marca del vehiculo',
  })
  @Column('text')
  marca: string;

  @ApiProperty({
    example: 'BCD951',
    description: 'Placa del vehiculo',
  })
  @Column('text')
  placa: string;

  @ApiProperty({
    example: 'LogiTrans',
    description: 'Empresa del vehiculo',
  })
  @Column('text')
  empresa: string;

  @ApiProperty({
    example: '9000',
    description: 'Capacidad de carga del vehiculo',
  })
  @Column({ name: 'capacidad_en_kilogramos', type: 'int' })
  capacidadKilogramos: number;
}
