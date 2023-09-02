import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { FilmDTO } from './dto/film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmService: FilmsService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiOkResponse({ type: [FilmDTO] })
  findAll(@Query('search') search: string): Promise<FilmDTO[]> {
    return this.filmService.findAll(search);
  }

  @Get(':id')
  @ApiOkResponse({ type: FilmDTO })
  findOne(@Param('id') id: number): Promise<FilmDTO> {
    return this.filmService.findOne(id);
  }
}
