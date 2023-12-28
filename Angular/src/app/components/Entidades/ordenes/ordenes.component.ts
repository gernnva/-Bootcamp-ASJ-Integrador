import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orden, ProductoOrden } from 'src/app/models/Orden';
import { Producto } from 'src/app/models/Producto';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css'],
})
export class OrdenesComponent implements OnInit {
  productos: Producto[] = [];
  proveedores: string[] = [];
  productoSeleccionado: Producto | undefined;
  precioProducto: number | undefined;
  proveedorSeleccionado: string | undefined;
  productosFiltrados: any[] = [];
  cantProducto: number = 0;
  hoy: Date = new Date();


  nuevoProductoOrden: ProductoOrden = {
    nombre: '',
    cantidad: 0,
    precioUnitario: 0,
  };

  nuevaOrden: Orden = {
    id: this.obtenerProximoId(),
    fechaEmision: this.hoy,
    fechaEntrega: '',
    info: '',
    productos: [],
    precio: 0,
  };
  // Obtener la fecha actual
  
  constructor(private servProductos: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.servProductos.getDatos().subscribe((data: Producto[]) => {
      this.productos = data;
      const proveedoresUnicos = [
        ...new Set(this.productos.map((proveedor) => proveedor.proveedor)),
      ];
      this.proveedores = proveedoresUnicos;
    });

  }

  actualizarPrecio() {
    // Verifica si hay un producto seleccionado
    if (this.productoSeleccionado) {
      // Asigna el precio del producto seleccionado al campo precioProducto
      this.precioProducto = this.productoSeleccionado.precio;
      this.cantProducto = 1;
    } else {
      // Si no hay un producto seleccionado, deja el precio en undefined o asigna un valor predeterminado según sea necesario
      this.precioProducto = undefined;
    }
  }

  filtrarProductosPorProveedor() {
    // Filtrar los productos según el proveedor seleccionado
    if (this.proveedorSeleccionado) {
      this.productosFiltrados = this.productos.filter(
        (producto) => producto.proveedor === this.proveedorSeleccionado
      );
    } else {
      this.productosFiltrados = [];
    }
  }
  agregarProducto() {
    // Verifica si hay un producto seleccionado
    if (this.productoSeleccionado && this.cantProducto > 0) {
      // Busca si el producto ya está en la lista
      const productoExistente = this.nuevaOrden.productos.find(
        (producto) =>
          producto.nombre === this.productoSeleccionado!.nombreProducto
      );

      // Si el producto ya está en la lista, actualiza la cantidad y el precio
      if (productoExistente) {
        productoExistente.cantidad += this.cantProducto;
        productoExistente.precioUnitario = this.productoSeleccionado.precio;
      } else {
        // Si no está en la lista, agrega un nuevo producto
        const nuevoProducto: ProductoOrden = {
          nombre: this.productoSeleccionado.nombreProducto,
          cantidad: this.cantProducto,
          precioUnitario: this.productoSeleccionado.precio,
          
        };

        this.nuevaOrden.productos.push(nuevoProducto);
        
      }

      // Actualiza el precio total de la orden
      this.actualizarPrecioTotal();

      // Limpia los campos después de agregar el producto
      this.productoSeleccionado = undefined;
      this.precioProducto = undefined;
      this.cantProducto = 0;
    }
  }

  actualizarPrecioTotal() {
    // Recalcula el precio total sumando los precios de cada producto
    this.nuevaOrden.precio = this.nuevaOrden.productos.reduce(
      (total, producto) => total + producto.cantidad * producto.precioUnitario,
      0
    );
  }
  borrarProductos() {
    // Limpia la lista de productos y reinicia el total de la orden
    this.nuevaOrden.productos = [];
    this.nuevaOrden.precio = 0;
  }
  guardarOrden() {
    // Obtener el último ID almacenado en localStorage
    const ultimoId = this.obtenerUltimoId();
  
    // Asignar el próximo ID para la nueva orden
    this.nuevaOrden.id = ultimoId + 1;
  
    // Agregar la nueva orden a la lista de órdenes guardadas
    const ordenesGuardadas = JSON.parse(localStorage.getItem('ordenes') || '[]');
    ordenesGuardadas.push(this.nuevaOrden);
    localStorage.setItem('ordenes', JSON.stringify(ordenesGuardadas));
  
    alert("Orden guardada correctamente");
    this.router.navigate(['ordenCompra/lista']);
    // Limpiar el formulario después de guardar la orden
    this.nuevaOrden = {
      id: 0,
      fechaEmision: this.hoy,
      fechaEntrega: '',
      info: '',
      productos: [],
      precio: 0,
    };
  }

  public obtenerUltimoId(): number {
    // Obtener las órdenes almacenadas en el localStorage
    const ordenesGuardadas = JSON.parse(localStorage.getItem('ordenes') || '[]');
  
    // Obtener el último ID si hay órdenes guardadas, de lo contrario, devolver 0
    const ultimoId = ordenesGuardadas.length > 0
      ? ordenesGuardadas[ordenesGuardadas.length - 1].id
      : 0;
  
    return ultimoId;
  }
  obtenerProximoId(): number {
    // Obtener el último ID almacenado en localStorage
    const ultimoId = this.obtenerUltimoId();
  
    // Devolver el próximo ID
    return ultimoId + 1;
  }

  
}
