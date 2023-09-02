import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { PlanetDTO } from './dto/planet.dto';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiOkResponse({ type: [PlanetDTO] })
  findAll(
    @Query('search') search: string,
    @Query('page') page?: number,
  ): Promise<PlanetDTO[]> {
    return this.planetsService.findAll(page, search);
  }

  @Get(':id')
  @ApiOkResponse({ type: PlanetDTO })
  findOne(@Param('id') id: number): Promise<PlanetDTO> {
    return this.planetsService.findOne(id);
  }
}
