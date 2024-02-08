import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  private apiUrlPreOrden = 'http://localhost:8080/pre-orden';
  private apiUrlOrden = 'http://localhost:8080/orden';

  constructor(private router: Router, private http: HttpClient) {}

    /** GUARDAR UNA NUEVA PREORDEN */
    public guardarPreOrden(preOrden: any): Observable<any>{
      console.log(preOrden)
      return this.http.post(this.apiUrlPreOrden, preOrden);

    }

    /** GUARDAR UNA NUEVA ORDEN */
    public guardarOrden(orden: any): Observable<any>{
      console.log(orden)
      return this.http.post(this.apiUrlOrden, orden);
    }

    /** CARGAR TODAS LAS ORDENES */
    public obtenerOrdenes(): Observable<any> {
      return this.http.get<any[]>(this.apiUrlOrden)
    }






  

}
