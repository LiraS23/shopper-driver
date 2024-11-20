import { Injectable } from "@nestjs/common";
import { DriverRepository } from "./driver.repository";

@Injectable()
export class DriverService {
  constructor(private readonly driverRepository: DriverRepository){}
}