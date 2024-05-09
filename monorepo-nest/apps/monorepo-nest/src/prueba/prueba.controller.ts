import { Controller, Get, Render } from '@nestjs/common';

@Controller('index')
export class PruebaController {
    @Get()
    @Render('index')
    root(){
        return[]
    }
}
