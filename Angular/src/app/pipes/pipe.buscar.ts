import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar',
})
export class BuscarPipe implements PipeTransform {
  transform(value: any, arg: any, campo: string): any {
    const respuesta = [];
    for( const post of value){
      if(post[campo].toLowerCase().includes(arg.toLowerCase())){
        respuesta.push(post)
      }

    }
    return respuesta;
  }
}