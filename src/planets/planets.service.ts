import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PlanetsService {
  async findAll(page = 1): Promise<any> {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/planets/?page=${page}`,
      );
      return response.data.results;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching all planets');
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(`Planet with ID ${id} not found`);
      }
      throw new InternalServerErrorException(`Error fetching planet: ${error}`);
    }
  }
}
