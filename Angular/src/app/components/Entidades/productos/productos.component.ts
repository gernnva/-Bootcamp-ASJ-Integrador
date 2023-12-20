import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit{
  
  productos: Producto [] = [];

  constructor(public serv: ProductosService){}
  
ngOnInit(): void {
  this.productos = this.serv.getDatos()   
}

  

}
