import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { Producto } from 'src/app/models/Producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  

  constructor(public serv: ProductosService, ) {}

  ngOnInit(): void {
    // this.productos = this.serv.getDatos().subscribe;
    this.serv.getDatos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
    
  }
  public deleteProduct(id: number) {
    this.serv.deleteProducto(id);
    this.serv.getDatos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }
  public editProduct(id: number): void {
    this.serv.getProductoById(id).subscribe((producto) => {
      if (producto) {
        this.serv.editProducto(producto); // Enviar el producto para editar
        console.log("B");
        
      }
    });
  }

}
