import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/Orden';

@Component({
  selector: 'app-ordenes-listar',
  templateUrl: './ordenes-listar.component.html',
  styleUrls: ['./ordenes-listar.component.css']
})
export class OrdenesListarComponent implements OnInit {
  ordenesGuardadas: Orden[] = [];
  ordenSeleccionada: Orden | undefined;
  mostrarDetalles: boolean = false;

  ngOnInit(): void {
    this.cargarOrdenesGuardadas();
    this
  }

  cargarOrdenesGuardadas() {
    const ordenesGuardadasStr = localStorage.getItem('ordenes') || '[]';
    this.ordenesGuardadas = JSON.parse(ordenesGuardadasStr);
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
