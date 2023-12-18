import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosAgregarComponent } from './components/Entidades/productos-agregar/productos-agregar.component';
import { InicioComponent } from './components/Templates/inicio/inicio.component';
import { ProductosComponent } from './components/Entidades/productos/productos.component';
import { ProveedoresComponent } from './components/Entidades/proveedores/proveedores.component';
import { ProveedoresAgregarComponent } from './components/Entidades/proveedores-agregar/proveedores-agregar.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/agregar', component:ProductosAgregarComponent },

  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'proveedores/agregar', component: ProveedoresAgregarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
