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
  proveedor: any;

  constructor(public servicioProveedor: ProveedoresService ) {}

  ngOnInit(): void {
    this.servicioProveedor.obtenerProveedores().subscribe((data) => {
      this.proveedores = data;
    });
  }

  borrarFiltros() {
    this.buscarRazonSocial = '';
    this.buscarCodigo = '';
  }

  deleteProveedor(id: number){

  }

  editProveedor(id: number){
    
  }
}
