import { extractIdFromUrl } from 'src/helpers/mapper.helper';
import { StarshipDTO } from '../dto/starship.dto';

export class StarshipMapper {
  static mapToStarshipDTO(data: any): StarshipDTO {
    return {
      id: extractIdFromUrl(data.url),
      name: data.name,
      model: data.model,
      manufacturer: data.manufacturer,
      starship_class: data.starship_class,
      cost_in_credits: data.cost_in_credits,
    };
  }
}
