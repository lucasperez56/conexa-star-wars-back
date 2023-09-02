import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilmDTO {
  @ApiProperty()
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly episode_id: string;

  @ApiProperty()
  @IsString()
  readonly director: string;

  @ApiProperty()
  @IsString()
  readonly producer: string;
}
