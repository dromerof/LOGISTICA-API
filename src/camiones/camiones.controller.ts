import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CamionesService } from './camiones.service';
import { CreateCamionDto } from './dto/create-camione.dto';
import { Camion } from './entities/camion.entity';

@ApiTags('Camiones')
@Controller('camiones')
export class CamionesController {
  constructor(private readonly camionesService: CamionesService) {}

  @ApiOperation({ summary: 'Crear un nuevo Camiones' })
  @ApiResponse({
    status: 201,
    description: 'Camión creado correctamente.',
    type: Camion,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Post()
  create(@Body() createCamionDto: CreateCamionDto) {
    return this.camionesService.create(createCamionDto);
  }
}
