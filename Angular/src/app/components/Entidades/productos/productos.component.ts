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
  productos: any[] = [];
  ordenAscendente: boolean = true;
  mostrarEliminados: boolean = false;
  buscarNombreDescripcion = '';
  camposDeBusqueda: string[] = ['nombre', 'descripcion'];
  buscarCategoria = '';

  constructor(public servicioProducto: ProductosService) {}

  ngOnInit(): void {
    this.mostrarProductos()
  }

  mostrarProductos(){
    this.servicioProducto.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }
  
  public ordenarPorNombre(): void {
    const productosOrdenados = [...this.productos].sort((a, b) => {
      return this.ordenAscendente
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre);
    });
    this.productos = productosOrdenados;
    this.ordenAscendente = !this.ordenAscendente;
  }

  public ordenarPorPrecio(): void {
    const productosOrdenados = [...this.productos].sort((a, b) => {
      return this.ordenAscendente
        ? a.precio - b.precio
        : b.precio - a.precio
    });
    this.productos = productosOrdenados;
    this.ordenAscendente = !this.ordenAscendente;
  }

  estadoEliminado(id: number){
    this.servicioProducto.SetearEliminado(id).subscribe((data) => {
      console.log(id)
    })
  }

  ordenarPorId(): void {
    this.productos.sort((a, b) => a.id - b.id);
  }

  toggleMostrarEliminados() {
    this.mostrarEliminados = !this.mostrarEliminados;
  }



}
