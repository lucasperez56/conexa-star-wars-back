import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { FilmsModule } from './films/films.module';
import { ShipsModule } from './ships/ships.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [CharactersModule, FilmsModule, ShipsModule, PlanetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
