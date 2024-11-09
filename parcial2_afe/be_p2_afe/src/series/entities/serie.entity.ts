
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('series')
export class Serie {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 250 })
  titulo: string;

  @Column('varchar', { length: 5000 })
  sinopsis: string;

  @Column('varchar', { length: 100 })
  director: string;

  @Column('integer',{name:'temporadas'})
  temporadas: number;

  @Column('varchar', { length: 20 })
  tipo_genero: string;

  @Column('date', {name:'fecha_Estreno' })
  fechaEstreno: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;
}
