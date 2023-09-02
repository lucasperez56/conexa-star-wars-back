import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { FilmMapper } from './mappers/film.mapper';

@Injectable()
export class FilmsService {
  async findAll(): Promise<any> {
    try {
      const response = await axios.get(`https://swapi.dev/api/films`);
      return response.data.results.map(FilmMapper.mapToFilmDTO);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching all films');
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
      return FilmMapper.mapToFilmDTO(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(`Film with ID ${id} not found`);
      }
      throw new InternalServerErrorException(`Error fetching film: ${error}`);
    }
  }
}
