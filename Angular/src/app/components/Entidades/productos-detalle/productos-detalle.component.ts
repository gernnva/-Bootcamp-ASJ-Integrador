import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent {
  producto: any;

  constructor(private route: ActivatedRoute, private servicioProducto: ProductosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    console.log(id)
    this.servicioProducto.getProductoById(id).subscribe((data => {
      this.producto = data;
    }));

  }

}
