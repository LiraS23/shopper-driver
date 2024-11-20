import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { AvaliacaoService } from "./avaliacao.service";

@Controller('/fimviagem')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService){}

  @Get()
  async mainhome(): Promise<string>{
    return 'Olá Mundo!';
  }
}