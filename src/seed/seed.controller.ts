import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SeedService } from './seed.service';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiResponse({
    status: 200,
    description: 'Camiones agregados correctamente a la base de datos.',
  })
  @ApiOperation({
    summary: 'Ejecutar para llenar la base de datos con algunos camiones',
  })
  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }
}
