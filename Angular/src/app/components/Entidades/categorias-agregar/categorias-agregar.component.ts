import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/service/categorias.service';
import { rubrosProveedores } from 'src/app/data/rubrosProveedores';

@Component({
  selector: 'app-categorias-agregar',
  templateUrl: './categorias-agregar.component.html',
  styleUrls: ['./categorias-agregar.component.css'],
})
export class CategoriasAgregarComponent implements OnInit {
  rubros: any[] = [];
  categoria: any = {
    nombrecategoria: '',
    rubro: {
      id_rubro: -1,
    },
  };
  categorias: any[] =[];
  idCategoria = this.route.snapshot.params['id'];

  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarRubros();

    if (this.idCategoria != undefined) {
      this.cargarDatosCategoria(this.idCategoria);
    }
  }

  public guardarCategoria() {
    // Verificar si ya existe una categoría con el mismo nombre en la lista local
    this.categoriasService.nombreDuplicado(this.categoria.nombrecategoria).subscribe((existeCategoria) => {
      if (!existeCategoria) {
        // No existe una categoría con el mismo nombre, proceder con el guardado
        if (this.idCategoria != undefined) {
          this.categoriasService
            .actualizarCategoria(this.idCategoria, this.categoria)
            .subscribe((dato) => {
              console.log(dato);
              this.router.navigate(['/categorias']);
            });
        } else {
          this.categoriasService
            .guardarCategoria(this.categoria)
            .subscribe((dato) => {
              console.log(dato);  
            this.router.navigate(['/categorias']);
            });

        }
      } else {
        // Ya existe una categoría con el mismo nombre, manejar la lógica correspondiente
        this.mostrarAlert();
        // Puedes mostrar un mensaje al usuario o tomar la acción que consideres apropiada
      }
    });
    

    
  }

  public cargarRubros() {
    this.rubros = [...rubrosProveedores];
  }

  // CARGAR LOS DATOS DE UNA CATEGORIA EN EL 'AGREGAR COMPONENT'
  private cargarDatosCategoria(id: number): void {
    this.categoriasService.getCategoriaById(id).subscribe(
      (dato) => {
        this.categoria = dato;
      },
      (error) => {
        console.error('Error al cargar datos del producto:', error);
      }
    );
  }


  private mostrarAlert(): void {
    // Mostrar un alert indicando que la categoría ya existe
    const alerta = document.getElementById('alertaCategoriaExistente');
    if (alerta) {
      alerta.style.display = 'block'; // Mostrar el alert

      // Ocultar después de 5 segundos
      setTimeout(() => {
        alerta.style.display = 'none';
      }, 5000);
    }
  }
}
