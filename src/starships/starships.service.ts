import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { StarshipMapper } from './mappers/starship.mapper';
import { StarshipDTO } from './dto/starship.dto';

@Injectable()
export class StarshipsService {
  async findAll(page = 1, search?: string): Promise<StarshipDTO[]> {
    let url = 'https://swapi.dev/api/starships/';
    if (search) {
      url += `?search=${search}`;
    } else if (page) {
      url += `?page=${page}`;
    }
    try {
      const response = await axios.get(url);
      return response.data.results.map(StarshipMapper.mapToStarshipDTO);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching all starships');
    }
  }

  async findOne(id: number): Promise<StarshipDTO> {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/starships/${id}/`,
      );
      return StarshipMapper.mapToStarshipDTO(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(`Starship with ID ${id} not found`);
      }
      throw new InternalServerErrorException(
        `Error fetching starship: ${error}`,
      );
    }
  }
}
