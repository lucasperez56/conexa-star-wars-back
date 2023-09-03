import { extractIdFromUrl } from 'src/helpers/mapper.helper';
import { FilmDTO } from '../dto/film.dto';

export class FilmMapper {
  static mapToFilmDTO(data: any): FilmDTO {
    return {
      id: extractIdFromUrl(data.url),
      name: data.title,
      episode_id: data.episode_id,
      director: data.director,
      producer: data.producer,
    };
  }
}
