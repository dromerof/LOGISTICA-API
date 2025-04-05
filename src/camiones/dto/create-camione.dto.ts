import { ApiProperty } from '@nestjs/swagger';

import { IsInt, IsString, Min, MinLength } from 'class-validator';
export class CreateCamionDto {
  @ApiProperty({
    example: 'Isuzu',
  })
  @IsString()
  @MinLength(1)
  marca: string;

  @ApiProperty({
    example: 'LogiTrans',
  })
  @IsString()
  @MinLength(1)
  empresa: string;

  @ApiProperty({
    example: 'BCD951',
  })
  @IsString()
  @MinLength(1)
  placa: string;

  @ApiProperty({
    example: '9000',
  })
  @IsInt()
  @Min(1)
  capacidad_en_kilogramos: number;
}
