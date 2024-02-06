import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './components/Entidades/proveedores/proveedores.component';
import { ProductosComponent } from './components/Entidades/productos/productos.component';
import { OrdenesComponent } from './components/Entidades/ordenes/ordenes.component';
import { NavbarComponent } from './components/Templates/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/Templates/sidebar/sidebar.component';
import { FooterComponent } from './components/Templates/footer/footer.component';
import { MainComponent } from './components/Templates/main/main.component';
import { ProductosAgregarComponent } from './components/Entidades/productos-agregar/productos-agregar.component';
import { InicioComponent } from './components/Templates/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { ProveedoresAgregarComponent } from './components/Entidades/proveedores-agregar/proveedores-agregar.component';
import { OrdenesListarComponent } from './components/Entidades/ordenes-listar/ordenes-listar.component';

import { BuscarPipe } from './pipes/pipe.buscar';
import { ProveedoresDetalleComponent } from './components/Entidades/proveedores-detalle/proveedores-detalle.component';




@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    ProductosComponent,
    OrdenesComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    ProductosAgregarComponent,
    InicioComponent,
    ProveedoresAgregarComponent,
    OrdenesListarComponent,
    BuscarPipe,
    ProveedoresDetalleComponent,   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
