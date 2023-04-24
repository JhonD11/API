import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getClase(): string {
    return 'Electiva de profundizacion I';
  }

  getTotalIntegrantes(): string {
    return 'Jhon Diaz, Lunellys Cortes y Alfonso Figueroa';
  }

  getIntegrante(num): string {
    if (num == 1){
      return 'Jhon Diaz';
    }
    else if (num == 2){
      return 'Lunellys Cortes';
    }      
    else if (num == 3){
      return 'Alfonso Figueroa';
    }
    else{
      return ' ';
    }
  }
  
  getTextoPrueba(dato_1:String, dato_2:String): String {
    return `Prueba en Transaccion SQL con los datos ${dato_1} y ${dato_2}`;
  }

}
