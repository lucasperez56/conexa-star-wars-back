import { extractIdFromUrl } from 'src/helpers/mapper.helper';
import { CharacterDTO } from '../dto/character.dto';

export class CharacterMapper {
  static mapToCharacterDTO(data: any): CharacterDTO {
    return {
      id: extractIdFromUrl(data.url),
      name: data.name,
      birth_year: data.birth_year,
    };
  }
}
