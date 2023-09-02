import { extractIdFromUrl } from 'src/helpers/mapper.helper';
import { CharacterDTO } from '../dto/character.dto';

export class CharacterMapper {
  static mapToCharacterDTO(data: any): CharacterDTO {
    return {
      id: extractIdFromUrl(data.url),
      name: data.name,
      birth_year: data.birth_year,
      eye_color: data.eye_color,
      gender: data.gender,
      hair_color: data.hair_color,
      height: data.height,
      mass: data.mass,
      skin_color: data.skin_color,
    };
  }
}
