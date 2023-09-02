import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { CharacterMapper } from './mappers/character.mapper';
import { CharacterDTO } from './dto/character.dto';

@Injectable()
export class CharactersService {
  async findAll(page = 1, search?: string): Promise<CharacterDTO[]> {
    let url = 'https://swapi.dev/api/people/';
    if (search) {
      url += `?search=${search}`;
    } else if (page) {
      url += `?page=${page}`;
    }
    try {
      const response = await axios.get(url);
      return response.data.results.map(CharacterMapper.mapToCharacterDTO);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching all characters');
    }
  }

  async findOne(id: number): Promise<CharacterDTO> {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
      return CharacterMapper.mapToCharacterDTO(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(`Character with ID ${id} not found`);
      }
      throw new InternalServerErrorException(
        `Error fetching character: ${error}`,
      );
    }
  }
}
