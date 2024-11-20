import { Injectable } from '@nestjs/common';
import axios from 'axios';
  
@Injectable()
export class GoogleMapsService {
  private readonly apiKey: string;

  constructor(private readonly apikey: string) {
    this.apiKey = process.env.GOOGLE_API_KEY;
  }

  async getRoute(origin: string, destination: string): Promise<any> {
    const url = 'https://routes.googleapis.com/directions/v2:computeRoutes';
    console.log(this.apiKey);
    try {
      const response = await axios.post(
        url,
        {
          "origin":{
            "address": origin
          },
          "destination":{
            "address": destination
          },
          "travelMode": "DRIVE",
          "regionCode": "es"
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': this.apiKey,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar rota:', error.response?.data || error.message);
      throw error;
    }
  }
}