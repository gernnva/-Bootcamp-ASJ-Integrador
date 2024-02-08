import { Injectable } from '@angular/core';
import { Router, UrlHandlingStrategy } from '@angular/router';
import { Proveedor } from '../models/Proveedor';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private apiUrl = 'http://localhost:8080/proveedor';

  constructor(private router: Router, private http: HttpClient) {}

  /** OBTENER UN PROVEEDOR POR ID */
  public getProveedorById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any[]>(url);
  }

  /** OBTENER LOS DATOS PROVEEDORES */
  public obtenerProveedores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /** OBTENER LOS DATOS PROVINCIAS */
  public obtenerProvincias(id: number): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:8080/provincia/'+ id);
  }

  /** OBTENER LOS DATOS PAISES */
  public obtenerPaises(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/pais');
  }
  /** OBTENER LOS DATOS CONDIONES IVA */
  public obtenerCondicionesIva(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/condicionIva');
  }
  /** GUARDAR UN NUEVO PROVEEDOR */
  public guardarProveedor(proveedor: any): Observable<any>{
    return this.http.post(this.apiUrl, proveedor);
  }

  /** ACTUALIZAR UN PROVEEDOR */
  public actualizarProveedor(id: number, proveedor: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, proveedor);
  }
  /** SETEAR ELIMINADO */
  public SetearEliminado(id: number): Observable<any>{
    return this.http.patch(`${this.apiUrl}/${id}`, null);

  }

  
}
