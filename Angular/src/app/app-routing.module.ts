import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosAgregarComponent } from './components/Entidades/productos-agregar/productos-agregar.component';
import { InicioComponent } from './components/Templates/inicio/inicio.component';
import { ProductosComponent } from './components/Entidades/productos/productos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/agregar', component:ProductosAgregarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
