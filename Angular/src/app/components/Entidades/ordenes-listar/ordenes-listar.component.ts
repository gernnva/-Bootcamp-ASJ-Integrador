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
  
  ngOnInit(): void {
    this.cargarOrdenesGuardadas();
  }

  cargarOrdenesGuardadas() {
    const ordenesGuardadasStr = localStorage.getItem('ordenes') || '[]';
    this.ordenesGuardadas = JSON.parse(ordenesGuardadasStr);
  }

  verDetalles(orden: Orden) {
    this.ordenSeleccionada = orden;
  }

  cerrarDetalles() {
    this.ordenSeleccionada = undefined;
  }
}
