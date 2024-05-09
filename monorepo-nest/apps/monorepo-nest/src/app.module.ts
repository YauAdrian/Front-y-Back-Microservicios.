import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity'; //importa la entidad del usuario
import { appController } from './app.controller';
import { appService } from './app.service';
import {ClientsModule, Transport } from '@nestjs/microservices';
import { PruebaController } from './prueba/prueba.controller';



@Module({
  imports: [ 
    //Vivan la chivas
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: './db/db.db', 
          entities: [Usuario], 
          synchronize: true, 
        }),
        TypeOrmModule.forFeature([Usuario]), 
        ClientsModule.register([
          {
            name: 'USUARIO_SERVICE',
            transport: Transport.REDIS,
            options:{
              host: 'localhost',
              port:6379
            }
          }
       ])
    ],
  controllers: [appController, PruebaController],
  providers: [appService],
})
export class appModule {}