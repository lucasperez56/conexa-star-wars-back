import { Controller } from '@nestjs/common';
import { ShipsService } from './ships.service';

@Controller('ships')
export class ShipsController {
  constructor(private readonly shipsService: ShipsService) {}
}
