import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Driver } from './driver.entity';

@Entity()
export class Avaliacao {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: [1, 2, 3, 4, 5] })
  score: number;

  @Column()
  comentario: string;

  @ManyToOne(() => Driver, (driver) => driver.avaliacoes, {onDelete: 'CASCADE'})
  driver: Driver;

}