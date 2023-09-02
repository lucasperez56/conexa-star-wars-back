import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { MoviesModule } from './movies/movies.module';
import { ShipsModule } from './ships/ships.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [CharactersModule, MoviesModule, ShipsModule, PlanetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
