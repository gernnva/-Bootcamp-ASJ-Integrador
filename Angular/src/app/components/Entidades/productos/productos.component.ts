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
  ordenAscendente: boolean = true;

  constructor(public serv: ProductosService) {}

  ngOnInit(): void {
    this.actualizarListaProductos();
    this.serv.getDatos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }
  public deleteProduct(id: number) {
    // Preguntar al usuario si está seguro de eliminar el producto
    const confirmDelete = window.confirm(
      '¿Estás seguro de que quieres eliminar este producto?'
    );

    if (confirmDelete) {
      // Si el usuario confirma, proceder con la eliminación
      this.serv.deleteProducto(id);

      // Actualizar la lista de productos después de la eliminación
      this.serv.getDatos().subscribe((data: Producto[]) => {
        this.productos = data;
      });
    }
  }
  public editProduct(id: number): void {
    this.serv.getProductoById(id).subscribe((producto) => {
      if (producto) {
        this.serv.editProducto(producto); // Enviar el producto para editar
        console.log('B');
      }
    });
  }

  public ordenarPorNombre(): void {
    this.productos.sort((a, b) =>
      this.ordenAscendente
        ? a.nombreProducto.localeCompare(b.nombreProducto)
        : b.nombreProducto.localeCompare(a.nombreProducto)
    );
    this.ordenAscendente = !this.ordenAscendente;
  }

  private actualizarListaProductos() {
    this.serv.getDatos().subscribe((data: Producto[]) => {
      // Ordenar los productos alfabéticamente por el nombre del producto
      this.productos = data.sort((a, b) =>
        a.nombreProducto.localeCompare(b.nombreProducto)
      );
    });
  }

  ordenarPorId(): void {
    this.productos.sort((a, b) => a.id - b.id);
  }
}
