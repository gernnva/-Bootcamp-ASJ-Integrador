import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosAgregarComponent } from './components/Entidades/productos-agregar/productos-agregar.component';
import { InicioComponent } from './components/Templates/inicio/inicio.component';
import { ProductosComponent } from './components/Entidades/productos/productos.component';
import { ProveedoresComponent } from './components/Entidades/proveedores/proveedores.component';
import { ProveedoresAgregarComponent } from './components/Entidades/proveedores-agregar/proveedores-agregar.component';
import { OrdenesComponent } from './components/Entidades/ordenes/ordenes.component';
import { OrdenesListarComponent } from './components/Entidades/ordenes-listar/ordenes-listar.component';
import { CategoriasComponent } from './components/Entidades/categorias/categorias.component';
import { CategoriasAgregarComponent } from './components/Entidades/categorias-agregar/categorias-agregar.component';



const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'productos', component: ProductosComponent },
  { path: 'productos/agregar', component: ProductosAgregarComponent },
  { path: 'productos/editar/:id', component: ProductosAgregarComponent }, 

  { path: 'proveedores', component: ProveedoresComponent }, // LISTAR LOS PROVEEDORES
  { path: 'proveedores/agregar', component: ProveedoresAgregarComponent }, // AGREGAR UN PROVEEDOR
  { path: 'proveedores/editar/:id', component: ProveedoresAgregarComponent }, // ac me tengo que fijar para ver un proveedor

  { path: 'ordenCompra', component: OrdenesComponent },
  { path: 'ordenCompra/lista', component: OrdenesListarComponent },

  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/agregar', component: CategoriasAgregarComponent },
  { path: 'categorias/editar/:id', component: CategoriasAgregarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
