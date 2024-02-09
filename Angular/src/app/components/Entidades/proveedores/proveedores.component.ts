import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/service/proveedores.service';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  proveedores: any[] = [];
  buscarRazonSocial = '';
  buscarCodigo = '';
  proveedorElegido: any;
 // proveedor: any;

  mostrarEliminados: boolean = false; // 

  constructor(public servicioProveedor: ProveedoresService ) {}

  ngOnInit(): void {
    this.mostrarProveedores()
  }
  
  toggleMostrarEliminados() {
    this.mostrarEliminados = !this.mostrarEliminados;
  }

  mostrarProveedores(){
    this.servicioProveedor.obtenerProveedores().subscribe((data) => {
      this.proveedores = data;
    });
  }


  borrarFiltros() {
    this.buscarRazonSocial = '';
    this.buscarCodigo = '';
  }

  estadoEliminado(id: number){
    this.servicioProveedor.SetearEliminado(id).subscribe((data) => {
      this.mostrarProveedores();
    })
  }

  abrirModal(proveedor: any): void {
    this.proveedorElegido = proveedor;
  }

}
