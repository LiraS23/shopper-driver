import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Driver } from "./driver.entity";
import { Repository } from 'typeorm';

export interface IDriverRepository {
  findAll(): Promise<Driver[]>;

  findOneById(id: number): Promise<Driver>;

  create(driver: Driver): Promise<Driver>;

  update(id: number, driver: Partial<Driver>): Promise<Driver>;

  delete(id: number): Promise<void>;
}

@Injectable()
export class DriverRepository implements IDriverRepository {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>
  ){}

  async findAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  async findOneById(id: number): Promise<Driver> {
    return this.driverRepository.findOneBy({ id });
  }

  async create(driver: Driver): Promise<Driver> {
    return this.driverRepository.save(driver);
  }
  
  async update(id: number, driver: Partial<Driver>): Promise<Driver> {
    const driverToEdit = await this.driverRepository.findOne({
      where: { id },
    });
    driverToEdit.nome = driver.nome;
    driverToEdit.descricao = driver.descricao;
    driverToEdit.carro = driver.carro;
    driverToEdit.avaliacoes = driver.avaliacoes;
    driverToEdit.taxa = driver.taxa;
    driverToEdit.quilometragemMinima = driver.quilometragemMinima;
    return await this.driverRepository.save(driverToEdit);
  }

  async delete(id: number): Promise<void> {
    await this.driverRepository.delete(id);
  }
}