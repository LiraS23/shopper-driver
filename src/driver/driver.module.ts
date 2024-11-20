import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './driver.entity';
import { DriverService } from './driver.service';
import { DriverRepository } from './driver.repository';
import { DriverController } from './driver.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriverService, DriverRepository],
  controllers: [DriverController],
})
export class DriverModule {}