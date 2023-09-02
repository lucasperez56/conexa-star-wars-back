import { Controller } from '@nestjs/common';
import { StarshipsService } from './starships.service';

@Controller('ships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}
}
