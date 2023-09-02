import { Controller, Get, Param, Query } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { StarshipDTO } from './dto/starship.dto';

@Controller('ships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiOkResponse({ type: [StarshipDTO] })
  findAll(@Query('page') page?: number): Promise<StarshipDTO[]> {
    return this.starshipsService.findAll(page);
  }

  @Get(':id')
  @ApiOkResponse({ type: StarshipDTO })
  findOne(@Param('id') id: number): Promise<StarshipDTO> {
    return this.starshipsService.findOne(id);
  }
}
