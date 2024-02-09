import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/Orden';
import { OrdenesService } from 'src/app/service/ordenes.service';
import { PaginationControlsDirective } from 'ngx-pagination';

@Component({
  selector: 'app-ordenes-listar',
  templateUrl: './ordenes-listar.component.html',
  styleUrls: ['./ordenes-listar.component.css'],
  
})
export class OrdenesListarComponent implements OnInit {
  ordenesGuardadas: any[] = [];
  ordenSeleccionada: any | undefined; // ver para que usaba este YA ME DI CUENTA, ES PARA EL DETALLE, EL DE ABAJO PARA LO MISMO
  mostrarDetalles: boolean = false; // ver este para que mierda lo usaba antes
  currentPage = 1;
  itemsPerPage = 5;
  showNextButton: boolean = true;
  showPreviousButton: boolean = false;
  mostrarCancelados: boolean = false;

  constructor(public ordenesService: OrdenesService ) {}

  ngOnInit(): void {
    this.mostrarOrdenes();
    
  }

  mostrarOrdenes() {
    this.ordenesService.obtenerOrdenes().subscribe((data) => {
      this.ordenesGuardadas = data;
    })
    
  }

  verRegistrosAnteriores() {
    const previousPage = this.currentPage - 1;
  
    if (previousPage >= 1) {
      this.currentPage = previousPage;
      this.showNextButton = true;
      this.showPreviousButton = previousPage > 1;
    }
  }
  
  verSiguientesRegistros() {
    const nextPage = this.currentPage + 1;
    const totalPages = Math.ceil(this.ordenesGuardadas.length / this.itemsPerPage);
  
    if (nextPage <= totalPages) {
      this.currentPage = nextPage;
      this.showPreviousButton = true;
      this.showNextButton = nextPage < totalPages;
    }
  }

  verDetalles(orden: Orden) {
    this.ordenSeleccionada = orden;
    this.mostrarDetalles = true;
  }

  cerrarDetalles() {
    this.ordenSeleccionada = undefined;
    this.mostrarDetalles = false;
  }

  estadoEliminado(id: number){
    this.ordenesService.SetearEliminado(id).subscribe((data) => {
      this.mostrarOrdenes()
    }
      
    )
  }

  toggleMostrarCancelados(){
    this.mostrarCancelados = !this.mostrarCancelados;
        
  }

}
