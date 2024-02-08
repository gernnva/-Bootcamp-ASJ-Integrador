import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/Producto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/producto';

  constructor(private router: Router, private http: HttpClient) {}

  /** OBTENER LOS PRODUCTOS */
  public obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /** OBTENER UN PRODUCTO POR ID */
  public getProductoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /** OBTENER LOS DATOS CATEGORIAS*/
  public obtenerCategorias(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/categoria');
  }

  /** GUARDAR UN NUEVO PRODUCTO */
  public guardarProducto(producto: any): Observable<any> {
    console.log(producto);
    return this.http.post(this.apiUrl, producto);
  }

  /** ACTUALIZAR UN PRODUCTO */
  public actualizarProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  /** SETEAR ELIMINADO */
  public SetearEliminado(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, null);
  }
}
