import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilmDTO {
  @ApiProperty()
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  readonly episode_id?: number;
}
