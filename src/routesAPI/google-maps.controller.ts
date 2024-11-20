import { Controller, Post, Get, Query, Param } from '@nestjs/common';
import { GoogleMapsService } from './google-maps.service';

@Controller('/')
export class GoogleMapsController {
  constructor(private readonly googleMapsService: GoogleMapsService) {}

  @Post('route/:origem/:destino')
  async getRoute(
    @Param('origem') origem: string,
    @Param('destino') destino: string,
  ): Promise<any> {
    return this.googleMapsService.getRoute(origem, destino);
  }
}