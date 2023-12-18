import { Component } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css']
})
export class ProductosAgregarComponent {
  datos: any = {
    id: '',
    proveedor: '',
    categoria: '',
    nombreProducto: '',
    descripcion: '',
    precio: ''
  };

  constructor(private productoServicio: ProductosService) {}

  guardarDatos(){
    this.productoServicio.postData(this.datos)
    this.datos = { // blaqueo datos
      id: '',
      proveedor: '',
      categoria: '',
      nombreProducto: '',
      descripcion: '',
      precio: '',
    };
    
  }

}
