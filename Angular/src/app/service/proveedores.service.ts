import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from '../models/Proveedor';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  proveedores: Proveedor[] = [];
  proveedorEditando: Proveedor | undefined;
  todosPaises: any[] = [];
  private apiUrl = 'http://localhost:8080/proveedor';

  constructor(private router: Router, private http: HttpClient) {}

  /** OBTENER UN PRODUCTO POR ID */
  public getProveedorById(id: number): Observable<Proveedor | undefined> {
    const proveedor = this.proveedores.find((p) => p.id == id);
    return of(proveedor);
  }

  /** OBTENER LOS DATOS PROVEEDORES  ver el tema cambio de tipado a los que corresponda*/
  public obtenerProveedores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  

  /** GUARDAR EN EL LOCALSTORAGE*/
  private guardarDatos(proveedores: Proveedor[]) {
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
  }
  public deleteProveedor(id: number) {
    const updatedProveedores = this.proveedores.filter(
      (proveedor) => proveedor.id !== id
    );
    this.guardarDatos(updatedProveedores);
    alert('borrada correctamente');
  }

  /** OBTENER LOS DATOS PARA EDITAR */
  public editProveedor(proveedor: Proveedor): void {
    this.proveedorEditando = { ...proveedor };
    
   
    
    this.router.navigate(['/proveedores/editar', proveedor.id]);
  }
  /** OBTENER LOS DATOS de PAISES */
  public paises(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  public getCountries(): Observable<any> {
    const url = `${this.apiUrl}/countryInfoJSON?username=gernnva`;
    return this.http.get(url);
  }

  public getProvinces(countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/childrenJSON?geonameId=${countryCode}&username=gernnva`;
    return this.http.get(url);
  }

  

}
