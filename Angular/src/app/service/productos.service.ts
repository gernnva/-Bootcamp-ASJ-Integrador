import { Injectable } from '@angular/core';
import { productosList } from '../data/productosData';
import { Router } from '@angular/router';
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})



export class ProductosService {

  productos: Producto [] = [];
  
  constructor(private router: Router) {}

  public getDatos() {

    return productosList;
  }

  public postData(producto: any){
    this.productos.push(producto);
    alert("cargado Correctamente");
    this.router.navigate(['/productos'])
  }
}
