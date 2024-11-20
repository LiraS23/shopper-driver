import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Avaliacao } from "./avaliacao.entity";
import { Repository } from 'typeorm';

export interface IAvaliacaoRepository {
  findAll(): Promise<Avaliacao[]>;

  findOneById(id: number): Promise<Avaliacao>;

  create(avaliacao: Avaliacao): Promise<Avaliacao>;

  update(id: number, avaliacao: Partial<Avaliacao>): Promise<Avaliacao>;

  delete(id: number): Promise<void>;
}

@Injectable()
export class AvaliacaoRepository implements IAvaliacaoRepository {
  constructor(
    @InjectRepository(Avaliacao)
    private readonly avaliacaoRepository: Repository<Avaliacao>
  ){}

  async findAll(): Promise<Avaliacao[]> {
    return this.avaliacaoRepository.find();
  }

  async findOneById(id: number): Promise<Avaliacao> {
    return this.avaliacaoRepository.findOneBy({ id });
  }

  async create(avaliacao: Avaliacao): Promise<Avaliacao> {
    return this.avaliacaoRepository.save(avaliacao);
  }
  
  async update(id: number, avaliacao: Partial<Avaliacao>): Promise<Avaliacao> {
    const avaliacaoToEdit = await this.avaliacaoRepository.findOne({
      where: { id },
    });
    avaliacaoToEdit.score = avaliacao.score;
    avaliacaoToEdit.comentario = avaliacao.comentario;
    avaliacaoToEdit.driver = avaliacao.driver;
    return await this.avaliacaoRepository.save(avaliacaoToEdit);
  }

  async delete(id: number): Promise<void> {
    await this.avaliacaoRepository.delete(id);
  }
}