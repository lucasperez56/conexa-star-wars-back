import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { CharacterDTO } from './dto/character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiOkResponse({ type: [CharacterDTO] })
  findAll(
    @Query('search') search: string,
    @Query('page') page?: number,
  ): Promise<CharacterDTO[]> {
    return this.charactersService.findAll(page, search);
  }

  @Get(':id')
  @ApiOkResponse({ type: CharacterDTO })
  findOne(@Param('id') id: number): Promise<CharacterDTO> {
    return this.charactersService.findOne(id);
  }
}
