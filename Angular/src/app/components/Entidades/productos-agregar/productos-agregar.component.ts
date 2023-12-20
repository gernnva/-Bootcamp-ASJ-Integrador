import { Component } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { Producto } from 'src/app/models/Producto';


@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css']
})
export class ProductosAgregarComponent {
  
  nuevoProducto: Producto = {
    id: 0,
    proveedor: '',
    categoria: '',
    nombreProducto: '',
    descripcion: '',
    precio: 0,
  };

  constructor(private productoServicio: ProductosService) {}

  guardarDatos(){
    this.productoServicio.postData(this.nuevoProducto)
    form
    };
    
  }

}
