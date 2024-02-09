import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orden, ProductoOrden } from 'src/app/models/Orden';
import { Producto } from 'src/app/models/Producto';
import { OrdenesService } from 'src/app/service/ordenes.service';
import { ProductosService } from 'src/app/service/productos.service';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css'],
})
export class OrdenesComponent implements OnInit {
  
  // VARIABLES
  proveedores: any[] = [];
  productos: any[] = [];
  productosFiltrados: any[] = [];
  precioProducto: number | undefined; // en la seleccion para agregar un producto de un proveedor
  proveedorSeleccionado = -1;
  productoSeleccionado: any | undefined;
  productosPreOrden: any[] = [];
  cantidad: undefined;
  hoy: Date = new Date();
  minFechaEntrega: string = '';
  
  //-------------------------------------------------------------
  nuevaOrden: any = {    
    fechaEntrega: '',
    descripcion: '',
    preordenes: [],
  };

  productoAgregar: any = {
    productos: undefined,
    cantidad: 1 
  }

  constructor(
    private productosService: ProductosService,
    private router: Router,
    private proveedoresServicio: ProveedoresService,
    private ordenesService: OrdenesService,
  ) {}

  ngOnInit(): void {
    this.obtenerProveedores();
    this.obtenerProductos();
    this.actualizarMinFechaEntrega();
  }

  obtenerProveedores(): void {
    this.proveedoresServicio.obtenerProveedores().subscribe((data) => {
      // Filtra los proveedores que no están eliminados
      this.proveedores = data.filter((proveedor) => !proveedor.eliminado);
    });
  }

  obtenerProductos(): void {
    this.productosService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    })
  }

  onProveedorChange(): void { // cambiar este nombre al castellano
    // Filtra los productos según el proveedor seleccionado y que no estén eliminados
    if (this.proveedorSeleccionado !== -1) {
      this.productosFiltrados = this.productos.filter((producto) => {
        const proveedorId = producto.proveedor.id_proveedor;
        const proveedorSeleccionadoId = this.proveedorSeleccionado;
        return proveedorId == proveedorSeleccionadoId && !producto.eliminado;
      });
    } else {
      // Si no se ha seleccionado un proveedor, muestra todos los productos no eliminados
      this.productosFiltrados = this.productos.filter((producto) => !producto.eliminado);
    }
  
  }
  actualizarPrecio(): void {
    if (this.productoSeleccionado) {
      this.productoAgregar.productos = this.productoSeleccionado;
      this.precioProducto = this.productoSeleccionado.precio; // Actualizar el precio según el producto seleccionado
    } else {
      this.productoAgregar.productos = undefined;
      this.precioProducto = undefined;
    }
  }
  agregarProducto(): void {
    if (this.productoAgregar && this.productoAgregar.productos) {
      // Verificar si ya existe un producto con el mismo id
      const productoExistente = this.productosPreOrden.find(
        (producto) => producto.productos.id_producto === this.productoAgregar.productos.id_producto
      );
  
      if (productoExistente) {
        // Si ya existe, actualiza la cantidad
        productoExistente.cantidad += this.productoAgregar.cantidad;
      } else {
        // Si no existe, agrega el nuevo producto
        this.productosPreOrden.push(this.productoAgregar);
      }
  
      // Limpiar cantidad y producto seleccionado
      this.productoAgregar = {
        productos: undefined,
        cantidad: undefined
      };
      this.productoSeleccionado = undefined;
    }
  }
  obtenerNombreProducto(idProducto: number): string {
    const producto = this.productos.find((p) => p.id_producto === idProducto);
    return producto ? producto.nombre : 'Producto no encontrado';
  }
  obtenerPrecioTotal(idProducto: number, cantidad: number): number {
    const producto = this.productos.find((p) => p.id_producto === idProducto);
    return producto ? producto.precio * cantidad : 0;
  }
  calcularTotal(): number {
    return this.productosPreOrden.reduce((total, producto) => {
      return total + producto.productos.precio * producto.cantidad;
    }, 0);
  }
  borrarProductos(): void {
    this.productosPreOrden = [];
    this.nuevaOrden.descripcion = ''; 
    this.nuevaOrden.fechaEntrega = '';

  }
  crearPreorden() {
    // Mapear las preórdenes y guardarlas
    const llamadasGuardarPreOrden = this.productosPreOrden.map(preOrden => {
      const cantidad = preOrden.cantidad || 0;
  
      return this.ordenesService.guardarPreOrden({
        productos: { id_producto: preOrden.productos.id_producto },
        cantidad: cantidad
      });
    });
  
    // Usar forkJoin para esperar a que todas las llamadas se completen
    forkJoin(llamadasGuardarPreOrden).subscribe(preOrdenesGuardadas => {
      // Asignar las preórdenes guardadas a la orden
      this.nuevaOrden.preordenes = preOrdenesGuardadas.map(preOrden => ({ id_preOrden: preOrden.id_preOrden, cantidad: preOrden.cantidad }));
  
      // Calcular el total y asignarlo a la orden
      this.nuevaOrden.total = this.calcularTotal();
  
      // Llamar a guardarOrden después de procesar todas las preórdenes
      this.ordenesService.guardarOrden(this.nuevaOrden).subscribe(() => {
        // Limpiar productosPreOrden después de guardar la orden
        this.borrarProductos();
        this.router.navigate(['/ordenCompra/lista']);
      });
    });
  }
  actualizarMinFechaEntrega(): void {
    // Calcular la fecha mínima permitida (dos días posteriores a la fecha actual)
    const today = new Date();
    today.setDate(today.getDate() + 2);
    this.minFechaEntrega = today.toISOString().split('T')[0];
  }

}
