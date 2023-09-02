import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { PlanetMapper } from './mappers/planet.mapper';
import { PlanetDTO } from './dto/planet.dto';

@Injectable()
export class PlanetsService {
  async findAll(page = 1, search?: string): Promise<PlanetDTO[]> {
    let url = 'https://swapi.dev/api/planets/';
    if (search) {
      url += `?search=${search}`;
    } else if (page) {
      url += `?page=${page}`;
    }
    try {
      const response = await axios.get(url);
      return response.data.results.map(PlanetMapper.mapToPlanetDTO);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching all planets');
    }
  }

  async findOne(id: number): Promise<PlanetDTO> {
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      return PlanetMapper.mapToPlanetDTO(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(`Planet with ID ${id} not found`);
      }
      throw new InternalServerErrorException(`Error fetching planet: ${error}`);
    }
  }
}
