import { Component } from '@angular/core';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Proveedor } from 'src/app/models/Proveedor';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/service/categorias.service';
import { rubrosProveedores } from 'src/app/data/rubrosProveedores';

@Component({
  selector: 'app-proveedores-agregar',
  templateUrl: './proveedores-agregar.component.html',
  styleUrls: ['./proveedores-agregar.component.css'],
})
export class ProveedoresAgregarComponent {
  nuevoProveedor: any = {
    
    logo: '', //
    codProveedor: '', //
    email: '', //
    razon_social: '', //
    rubro: {
      id_rubro: 0, //
    },
    paginaWeb: '', //
    direccion: {
      calle: '', //
      numCalle: 0, //
      ciudad: '', //
      codPostal: '', //
      provincia: {
        id_provincia: 0, //
      },
    },
    cuit: '',
    condIva: {
      id_condicionIva: 0,
    },
    contactoInfo: {
      nombre: '', //
      apellido: '', //
      telFijo: '', //
      telCelular: '', //
      email: '', //
      rol: '', //
    },
  };

  paises: any[] = [];
  provincias: any[] = [];
  paisElegido: number = -1;
  rubros: any[] = [];
  condicionesIva: any[] = [];
  todosLosProveedores: any[] = [];

  idProveedor = this.route.snapshot.params['id'];

  

  constructor(
    private servicioProveedor: ProveedoresService,
    private route: ActivatedRoute,
    private router: Router,
    private servicioCategoria: CategoriasService
  ) {}

  ngOnInit(): void {
    this.traerPaises();
    this.cargarRubros();
    this.traerCondicionesIva();
    this.traerProveedores()
    
    if (this.idProveedor != undefined) {
      this.cargarDatosProveedor(this.idProveedor);
      
    }
    
  }

  traerProveedores(){
    this.servicioProveedor.obtenerProveedores().subscribe((data) => {
      this.todosLosProveedores = data;
    });
  }

  public traerPaises() {
    this.servicioProveedor.obtenerPaises().subscribe((data) => {
      this.paises = data;
    });
  }

  public traerProvincias() {
    this.servicioProveedor
      .obtenerProvincias(this.paisElegido)
      .subscribe((data) => {
        this.provincias = data;
      });
  }

  public traerCondicionesIva() {
    this.servicioProveedor.obtenerCondicionesIva().subscribe((data) => {
      this.condicionesIva = data;
    });
  }
  // BORRO TODO MENOS EL ID
  public resetCampos(): void {// CORREGIR ESTO
    this.nuevoProveedor = {
      id_proveedor: 3,
      logo: '', //
      codProveedor: '', //
      emailEmpresa: '', //
      razonSocial: '', //
      rubro: {
        id_rubro: 0, //
      },
      paginaWeb: '', //
      direccion: {
        calle: '', //
        numCalle: 0, //
        ciudad: '', //
        codPostal: '', //
        pais: 'Seleccione un Pais',
        provincia: {
          id_provincia: 0, //
        },
      },
      cuit: '',
      cond_iva: {
        id_condicionIva: 0,
      },
      contactoInfo: {
        nombre: '', //
        apellido: '', //
        telFijo: '', //
        telCelular: '', //
        email: '', //
        rol: '', //
      },
    };
  }

  public cargarRubros() {
    this.rubros = [...rubrosProveedores];
  }
  // GUARDAR UN NUEVO PROVEEDOR O ACTUALIZAR UNO
  public guardarProveedor() {
    // Verificar si ya existe un proveedor con el mismo codProveedor en la lista local
    const existeProveedor = this.verificarExistenciaProveedorLocal();
  
    if (!existeProveedor) {
      // No existe un proveedor con el mismo codProveedor, proceder con el guardado
      if (this.idProveedor != undefined) {
        this.servicioProveedor.actualizarProveedor(this.idProveedor, this.nuevoProveedor)
          .subscribe(dato => {
            this.router.navigate(['/proveedores']);
          });
      } else {
        this.nuevoProveedor.logo = 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
        this.servicioProveedor.guardarProveedor(this.nuevoProveedor)
          .subscribe(dato => {
            this.router.navigate(['/proveedores']);

          });
      }
      
    } else {
      // Ya existe un proveedor con el mismo codProveedor, manejar la lógica correspondiente
      this.mostrarAlert();
      // Puedes mostrar un mensaje al usuario o tomar la acción que consideres apropiada
    }
  }
  // CARGAR LOS DATOS DE UN PROVEEDOR EN EL 'AGREGAR COMPONENT' 
  private cargarDatosProveedor(idProveedor: number): void {
     this.servicioProveedor.getProveedorById(idProveedor).subscribe(
      proveedor => {
        this.nuevoProveedor = proveedor;
        this.nuevoProveedor.direccion.provincia.id_provincia = proveedor.direccion.provincia.id_provincia;
        this.paisElegido = proveedor.direccion.provincia.country.id_pais;
        this.traerProvincias();
        
      },
      error => {
        console.error('Error al cargar datos del proveedor:', error);
      }
    );
  }
  
  private verificarExistenciaProveedorLocal(): boolean {
    // Verificar si ya existe un proveedor con el mismo codProveedor en la lista local
    return this.todosLosProveedores.some(
      
      (proveedor) => 
      proveedor.codProveedor == this.nuevoProveedor.codProveedor && proveedor.id_proveedor != this.idProveedor
    );
  }

  private mostrarAlert(): void {
    // Mostrar un alert indicando que el codProveedor ya existe
    const alerta = document.getElementById('alertaCodProveedorExistente');
    if (alerta) {
      alerta.style.display = 'block'; // Mostrar el alert
  
      // Ocultar el alert después de 5 segundos (5000 milisegundos)
      setTimeout(() => {
        alerta.style.display = 'none';
      }, 5000);
    }
  }

  onKeyPressNumerico(event: any) {
    // Verificar si la tecla presionada es un número
    if (event.which < 48 || event.which > 57) {
      event.preventDefault();
    }
  }
  




}
