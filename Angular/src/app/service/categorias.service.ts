import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl = 'http://localhost:8080/categoria';

  constructor(private router: Router, private http: HttpClient) {}

  /** OBTENER LOS DATOS CATEGORIAS */
  public obtenerCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  /** SETEAR ELIMINADO */
  public setearEliminado(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, null);
  }

    /** GUARDAR UNA NUEVA CATEGORIA */
    public guardarCategoria(categoria: any): Observable<any> {
      console.log(categoria);
      return this.http.post(this.apiUrl, categoria);
    }
  
    /** ACTUALIZAR UNA CATEGORIA*/
    public actualizarCategoria(id: number, categoria: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, categoria);
    }
      /** OBTENER UNA CATEGORIA POR ID */
    public getCategoriaById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
     /** saber si ya existe en la base de datos */
     public nombreDuplicado(nombre: string): Observable<boolean> {
      return this.http.patch<boolean>(`${this.apiUrl}/existe/${nombre}`, null);
    }

}
