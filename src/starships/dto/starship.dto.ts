import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StarshipDTO {
  @ApiProperty()
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly model: string;

  @ApiProperty()
  @IsString()
  readonly starship_class: string;

  @ApiProperty()
  @IsString()
  readonly manufacturer: string;

  @ApiProperty()
  @IsString()
  readonly cost_in_credits: string;
}
