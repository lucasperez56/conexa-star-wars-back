import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { FilmsModule } from './films/films.module';
import { StarShipsModule } from './starships/starships.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [CharactersModule, FilmsModule, StarShipsModule, PlanetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
