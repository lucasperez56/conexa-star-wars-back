import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CharacterDTO {
  @ApiProperty()
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly birth_year?: string;

  @ApiProperty()
  @IsString()
  readonly eye_color: string;

  @ApiProperty()
  @IsString()
  readonly gender: string;

  @ApiProperty()
  @IsString()
  readonly hair_color: string;

  @ApiProperty()
  @IsString()
  readonly height: string;

  @ApiProperty()
  @IsString()
  readonly mass: string;

  @ApiProperty()
  @IsString()
  readonly skin_color: string;
}
