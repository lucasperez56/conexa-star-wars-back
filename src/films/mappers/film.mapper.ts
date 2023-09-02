import { extractIdFromUrl } from 'src/helpers/mapper.helper';
import { FilmDTO } from '../dto/film.dto';

export class FilmMapper {
  static mapToFilmDTO(data: any): FilmDTO {
    return {
      id: extractIdFromUrl(data.url),
      title: data.title,
      episode_id: data.episode_id,
    };
  }
}
