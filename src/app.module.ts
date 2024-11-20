import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModule } from './driver/driver.module';
import { AvaliacaoModule } from './driver/avaliacao.module';
import { GoogleMapsModule } from './routesAPI/google-maps.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '7988', 
      database: 'shopper_driver', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    DriverModule,
    AvaliacaoModule,
    GoogleMapsModule,
  ],
})
export class AppModule {}