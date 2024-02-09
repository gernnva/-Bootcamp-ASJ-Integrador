import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{

  categorias: any [] = [];

  constructor(public categoriasService: CategoriasService, public router: Router) {}
  
  ngOnInit(): void {
    this.mostrarCategorias();
   
  }

  mostrarCategorias(){
    this.categoriasService.obtenerCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  estadoEliminado(id: number){
    this.categoriasService.setearEliminado(id).subscribe((data) => {
      this.mostrarCategorias()
  })
  }

}
