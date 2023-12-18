import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productos: any = [];

  constructor(public serv: ProductosService){}
  
ngOnInit(): void {
  this.productos = this.serv.getDatos()   
}

  

}
