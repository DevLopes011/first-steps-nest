import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({example: "Tom", description: "Nome do gato"})
  @IsString()
  name: string;

  @ApiProperty({example: 2, description: "Idade do gato"})
  @IsInt()
  @Min(0)
  age: number;

  @ApiProperty({example: "Siamês", description: "Raça do gato"})
  @IsString()
  breed: string;
}