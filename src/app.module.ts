import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { MoviesModule } from './movies/movies.module';
import { ShipsModule } from './ships/ships.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [CharactersModule, MoviesModule, ShipsModule, PlanetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
