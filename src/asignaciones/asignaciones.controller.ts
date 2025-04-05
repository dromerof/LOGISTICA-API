import { Controller, Post, Body } from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AsignarPedidosDto } from './dto/asignar-pedidos.dto';
import { AsignacionDto } from './dto/asignacion.dto';

@ApiTags('Asignaciones')
@Controller('asignaciones')
export class AsignacionesController {
  constructor(private readonly asignacionesService: AsignacionesService) {}

  @ApiOperation({ summary: 'Asignar pedidos a camiones' })
  @ApiResponse({ status: 201, description: 'Asignación exitosa', type: AsignacionDto })
  @ApiResponse({ status: 400, description: 'Error en los datos enviados' })
  @Post()
  async asignarPedidos(@Body() data: AsignarPedidosDto): Promise<AsignacionDto> {
    return this.asignacionesService.asignarPedidosACamiones(data.pedidos);
  }
}
