import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/Producto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: Producto[] = [];
  productoEditando: Producto | undefined;

  constructor(private router: Router) { }

  /** OBTENER UN PRODUCTO POR ID */
  public getProductoById(id: number): Observable<Producto | undefined> {
    const producto = this.productos.find((p) => p.id == id);
    return of(producto);
  }
  /** OBTENER ULTIMO ID */
  public obtenerUltimoId(): number {
    const ultimoId = this.productos.reduce((maxId, producto) => {
      return producto.id > maxId ? producto.id : maxId;
    }, 0);

    return ultimoId;
  }
  /** OBTENER LOS DATOS */
  public getDatos(): Observable<Producto[]> {
    const storedProductos = localStorage.getItem('productos');
    this.productos = storedProductos ? JSON.parse(storedProductos) : [];
    return of(this.productos);
  }
  /** GUARDAR */
  public postData(producto: Producto, banderaNuevo: boolean) {
    if (banderaNuevo) {
      const nuevoId = this.obtenerUltimoId() + 1;
      producto.id = nuevoId;

      this.getDatos().subscribe((data) => {
        const updatedProductos = [...data, producto];
        this.guardarDatos(updatedProductos);
      });
    } else {
      this.getDatos().subscribe((data) => {
        const index = data.findIndex((p) => p.id === producto.id);
        // Reemplaza el producto existente con el nuevo
        data[index] = producto;
        this.guardarDatos(data);
        alert('Actualizado correctamente');

      });



    }
  }
  /** GUARDAR EN EL LOCALSTORAGE*/
  private guardarDatos(productos: Producto[]) {
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  /** BORRAR */
  public deleteProducto(id: number) {
    const updatedProductos = this.productos.filter(
      (producto) => producto.id !== id
    );
    this.guardarDatos(updatedProductos);
    alert('borrada correctamente');
  }
  /** OBTENER LOS DATOS PARA EDITAR */
  public editProducto(producto: Producto): void {
    this.productoEditando = { ...producto };

    this.router.navigate(['/productos/editar', producto.id]);
  }
}
