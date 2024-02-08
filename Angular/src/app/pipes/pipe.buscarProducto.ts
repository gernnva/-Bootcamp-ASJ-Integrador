import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarProducto',
})
export class BuscarProductoPipe implements PipeTransform {
  transform(value: any, arg: any, campos: string[]): any {
    const respuesta = [];
    for (const post of value) {
      if (campos.some(campo => post[campo]?.toLowerCase().includes(arg.toLowerCase()))) {
        respuesta.push(post);
      }
    }
    return respuesta;
  }
}