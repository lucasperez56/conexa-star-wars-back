import { extractIdFromUrl } from 'src/helpers/mapper.helper';
import { PlanetDTO } from '../dto/planet.dto';

export class PlanetMapper {
  static mapToPlanetDTO(data: any): PlanetDTO {
    return {
      id: extractIdFromUrl(data.url),
      name: data.name,
      population: data.population,
    };
  }
}
