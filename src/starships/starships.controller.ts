import { Controller, Get, Param, Query } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { StarshipDTO } from './dto/starship.dto';

@Controller('starships')
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
  findAll(
    @Query('search') search: string,
    @Query('page') page?: number,
  ): Promise<StarshipDTO[]> {
    return this.starshipsService.findAll(page, search);
  }

  @Get(':id')
  @ApiOkResponse({ type: StarshipDTO })
  findOne(@Param('id') id: number): Promise<StarshipDTO> {
    return this.starshipsService.findOne(id);
  }
}
