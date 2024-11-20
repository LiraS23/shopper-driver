import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { DriverService } from "./driver.service";

@Controller('/')
export class DriverController {
  constructor(private readonly driverService: DriverService){}

  @Get()
  async mainhome(): Promise<string>{
    return 'Olá Mundo!';
  }
}
