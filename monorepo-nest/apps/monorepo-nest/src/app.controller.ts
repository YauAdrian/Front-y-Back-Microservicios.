import { Body,Controller, Get, Post } from '@nestjs/common';
import { appService } from './app.service';


@Controller()
export class appController {
  constructor(private readonly appService: appService) {}

  @Post('agregar')
  async newUsuario(@Body() Body:any): Promise<string>{
    return await this.appService.newUsuario(Body);
  }
}

