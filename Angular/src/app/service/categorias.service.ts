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

  


}
