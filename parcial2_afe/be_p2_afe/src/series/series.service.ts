import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from './entities/serie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private seriesRepository: Repository<Serie>,
  ) {}

  async create(createSerieDto: CreateSerieDto): Promise<Serie> {
    const existe = await this.seriesRepository.findOneBy({
      titulo: createSerieDto.titulo.trim(),
      sinopsis: createSerieDto.sinopsis.trim(),
      director: createSerieDto.director.trim(),
      temporadas: createSerieDto.temporadas,
    });

    if (existe) throw new ConflictException('La serie ya existe');

    const serie = new Serie();
    serie.titulo = createSerieDto.titulo.trim();
    serie.sinopsis = createSerieDto.sinopsis.trim();
    serie.director = createSerieDto.director.trim();
    serie.temporadas = createSerieDto.temporadas;
    serie.tipo_genero = createSerieDto.tipo_genero.trim(); 
    serie.fechaEstreno = createSerieDto.fechaEstreno;
    return this.seriesRepository.save(serie);
  }

  async findAll(): Promise<Serie[]> {
    return this.seriesRepository.find();
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.seriesRepository.findOneBy({ id });
    if (!serie) throw new NotFoundException('La serie no existe');
    return serie;
  }

  async update(
    id: number,
    updateSerieDto: UpdateSerieDto,
  ): Promise<Serie> {
    const serie = await this.findOne(id);
    serie.titulo=updateSerieDto.titulo.trim();
    serie.sinopsis=updateSerieDto.sinopsis.trim();
    serie.director=updateSerieDto.director.trim();
    serie.temporadas=updateSerieDto.temporadas;
    serie.fechaEstreno=updateSerieDto.fechaEstreno;
    serie.tipo_genero=updateSerieDto.tipo_genero.trim();
    const serieUpdate = Object.assign(serie, updateSerieDto);
    return this.seriesRepository.save(serieUpdate);
  }

  async remove(id: number) {
    const serie = await this.findOne(id);
    return this.seriesRepository.softRemove(serie);
  }
}
