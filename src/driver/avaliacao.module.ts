import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao } from "./avaliacao.entity";
import { AvaliacaoController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoRepository } from './avaliacao.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao])],
  providers: [AvaliacaoService, AvaliacaoRepository],
  controllers: [AvaliacaoController],
})
export class AvaliacaoModule {}