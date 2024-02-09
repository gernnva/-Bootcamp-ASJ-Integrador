import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/service/ordenes.service';
import { ProductosService } from 'src/app/service/productos.service';
import { ProveedoresService } from 'src/app/service/proveedores.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  proveedoresCantidad: number = 0;
  productosCantidad: number = 0;
  ordenesCantidad: number = 0;

  constructor(
    private productosService: ProductosService,
    private proveedoresServicio: ProveedoresService,
    private ordenesService: OrdenesService,
  ) {}

  ngOnInit(): void{
    this.obtenerProveedores()
    this.obtenerProductos()
    this.obtenerOrdenes()
  }

  obtenerProveedores(): void {
    this.proveedoresServicio.obtenerProveedores().subscribe((data) => {
      // Filtra los proveedores que no están eliminados
      this.proveedoresCantidad = data.length;
      console.log(this.proveedoresCantidad)
    });
  }

  obtenerProductos(): void {
    this.productosService.obtenerProductos().subscribe((data) => {
      this.productosCantidad = data.length;
      console.log(this.productosCantidad)
    })
  }

  obtenerOrdenes(): void {
    this.ordenesService.obtenerOrdenes().subscribe((data) => {
      this.ordenesCantidad = data.length;
      console.log(this.ordenesCantidad)
    })
  }


}
