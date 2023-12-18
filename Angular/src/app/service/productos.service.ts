import { Injectable } from '@angular/core';
import { producto } from '../data/productosData';

@Injectable({
  providedIn: 'root',
})



export class ProductosService {

  listaProductos: any  = producto;
  constructor() {}

  public getDatos() {
    return this.listaProductos;
  }

  public postData(producto: any){
    this.listaProductos.push(producto);
    console.log(this.listaProductos);
  }
}
