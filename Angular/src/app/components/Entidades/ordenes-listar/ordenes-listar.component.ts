import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/Orden';
import { OrdenesService } from 'src/app/service/ordenes.service';

@Component({
  selector: 'app-ordenes-listar',
  templateUrl: './ordenes-listar.component.html',
  styleUrls: ['./ordenes-listar.component.css']
})
export class OrdenesListarComponent implements OnInit {
  ordenesGuardadas: any[] = [];
  ordenSeleccionada: Orden | undefined;
  mostrarDetalles: boolean = false;

  constructor(public ordenesService: OrdenesService ) {}

  ngOnInit(): void {
    this.mostrarOrdenes();
    
  }

  mostrarOrdenes() {
    this.ordenesService.obtenerOrdenes().subscribe((data) => {
      this.ordenesGuardadas = data;
    })
    
  }

  verDetalles(orden: Orden) {
    this.ordenSeleccionada = orden;
    this.mostrarDetalles = true;
  }

  cerrarDetalles() {
    this.ordenSeleccionada = undefined;
    this.mostrarDetalles = false;
  }
}
