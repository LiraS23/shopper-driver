import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  carro: string;

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.driver, {cascade: true} )
  avaliacoes: Avaliacao[];

  @Column({ type: 'decimal' })
  taxa: number;

  @Column()
  quilometragemMinima: number;
}
