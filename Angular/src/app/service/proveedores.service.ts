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
  private apiUrl = 'http://api.geonames.org';

  constructor(private router: Router, private http: HttpClient) {}

  /** OBTENER UN PRODUCTO POR ID */
  public getProveedorById(id: number): Observable<Proveedor | undefined> {
    const proveedor = this.proveedores.find((p) => p.id == id);
    return of(proveedor);
  }
  /** OBTENER ULTIMO ID */
  public obtenerUltimoId(): number {
    if (this.proveedores.length > 0) {
      return this.proveedores[this.proveedores.length - 1].id;
    } else {
      return 0; //
    }
  }
  /** OBTENER LOS DATOS */
  public getDatos(): Observable<Proveedor[]> {
    const storedProductos = localStorage.getItem('proveedores');
    this.proveedores = storedProductos ? JSON.parse(storedProductos) : [];
    return of(this.proveedores);
  }

  /** GUARDAR */
  public postData(proveedor: Proveedor, banderaNuevo: boolean) {

    if (banderaNuevo) {

      const nuevoId = this.obtenerUltimoId() + 1;
      proveedor.id = nuevoId;

      this.getDatos().subscribe((data) => {
        const updatedProveedores = [...data, proveedor];
        this.guardarDatos(updatedProveedores);
        alert('Cargado correctamente');
        this.router.navigate(['/proveedores']); // configurar la path
      });
    } else {
      this.getDatos().subscribe((data) => {
        const index = data.findIndex((p) => p.id === proveedor.id);

        if (index !== -1) {
          // Reemplaza el producto existente con el nuevo
          data[index] = proveedor;
          this.guardarDatos(data);
          alert('Actualizado correctamente');
          this.router.navigate(['/proveedores']);
        } else {
          // Manejar el caso en que no se encuentra el producto
          console.error('Producto no encontrado para actualizar');
        }
      });
    }
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
