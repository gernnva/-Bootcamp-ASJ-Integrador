import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosAgregarComponent } from './components/Entidades/productos-agregar/productos-agregar.component';
import { InicioComponent } from './components/Templates/inicio/inicio.component';
import { ProductosComponent } from './components/Entidades/productos/productos.component';
import { ProveedoresComponent } from './components/Entidades/proveedores/proveedores.component';
import { ProveedoresAgregarComponent } from './components/Entidades/proveedores-agregar/proveedores-agregar.component';
import { OrdenesComponent } from './components/Entidades/ordenes/ordenes.component';
import { OrdenesListarComponent } from './components/Entidades/ordenes-listar/ordenes-listar.component';
import { ProveedoresDetalleComponent } from './components/Entidades/proveedores-detalle/proveedores-detalle.component';
import { ProductosDetalleComponent } from './components/Entidades/productos-detalle/productos-detalle.component';

const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'productos', component: ProductosComponent },
  { path: 'productos/agregar', component: ProductosAgregarComponent },
  { path: 'productos/editar/:id', component: ProductosAgregarComponent }, 
  { path: 'productos/:id', component: ProductosDetalleComponent }, // VER UN PRODUCTO


  { path: 'proveedores', component: ProveedoresComponent }, // LISTAR LOS PROVEEDORES
  { path: 'proveedores/agregar', component: ProveedoresAgregarComponent }, // AGREGAR UN PROVEEDOR
  { path: 'proveedores/editar/:id', component: ProveedoresAgregarComponent }, // ac me tengo que fijar para ver un proveedor
  { path: 'proveedores/:id', component: ProveedoresDetalleComponent }, // VER UN PROVEEDOR

  { path: 'ordenCompra', component: OrdenesComponent },
  { path: 'ordenCompra/lista', component: OrdenesListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
