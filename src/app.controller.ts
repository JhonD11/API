import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getClase();
  }

  @Get("TodosIntegrantes")
  getInfoIntegrantes(): String {
    return this.appService.getTotalIntegrantes();
  }

  @Get('Integrante/:numIntegrante')
  getInfoIntegrante(@Param('numIntegrante') numIntegrante:String ): String {
    return this.appService.getIntegrante(numIntegrante);
  }


  @Get('Prueba')
  getPrueba(@Query('dato_1') dato_1=' ', @Query('dato_2') dato_2=' '): String {
    return this.appService.getTextoPrueba(dato_1, dato_2);
  }
}
