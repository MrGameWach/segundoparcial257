import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength,IsNumber,IsDate, IsDateString,IsDefined} from 'class-validator';

export class CreateSerieDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo es obligatorio' })
  @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
  @MaxLength(250, {
    message: 'El campo nombre no debe ser mayor a 250 caracteres',
  })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis es obligatorio' })
  @IsString({ message: 'El campo sinopsis debe ser tipo cadena' })
  @MaxLength(5000, {
    message: 'El campo sinopsis no de ser mayor a 30 caracteres',
  })
  readonly sinopsis : string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director es obligatorio' })
  @IsString({ message: 'El campo director debe ser tipo cadena' })
  @MaxLength(100, {
    message: 'El campo director no de ser mayor a 30 caracteres',
  })
  readonly director : string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo teporadas es obligatorio' })
  @IsNumber({},{ message: 'El campo temporadas debe ser tipo cadena' })
  readonly temporadas : number;

  @ApiProperty()
  @IsString({ message: 'El campo tipo_genero debe ser tipo cadena' })
  @MaxLength(20, {
    message: 'El campo tipo_genero no de ser mayor a 30 caracteres',
  })
  readonly tipo_genero : string;
  
  @ApiProperty()
  @IsDefined({message: 'El campo fechaEstreno debe estar definido'})
  @IsDateString({},{message:'El campo fechaEstreno debe ser de tipo fecha'},)
  readonly fechaEstreno:Date;
}
