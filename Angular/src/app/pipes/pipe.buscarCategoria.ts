import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPorCategoria',
})
export class FiltrarPorCategoriaPipe implements PipeTransform {
  transform(productos: any[], categoriaSeleccionada: string): any[] {
    if (!categoriaSeleccionada || categoriaSeleccionada === '-1') {
      // Si no se ha seleccionado una categoría o se ha seleccionado la opción por defecto, devuelve todos los productos.
      return productos;
    }

    // Filtra los productos que pertenecen a la categoría seleccionada.
    return productos.filter(producto => producto.categoria.nombrecategoria === categoriaSeleccionada);
  }
}