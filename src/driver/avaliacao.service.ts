import { Injectable } from "@nestjs/common";
import { AvaliacaoRepository } from "./avaliacao.repository";

@Injectable()
export class AvaliacaoService {
  constructor(private readonly avaliacaoRepository: AvaliacaoRepository){}
}