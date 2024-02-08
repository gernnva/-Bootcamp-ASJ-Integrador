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
    
    if (this.idProveedor != undefined) {
      this.cargarDatosProveedor(this.idProveedor);
      
    }
    
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
    if (this.idProveedor != undefined){
      this.servicioProveedor.actualizarProveedor(this.idProveedor, this.nuevoProveedor).subscribe(dato => {
        console.log(dato)})
    } else {
      this.servicioProveedor.guardarProveedor(this.nuevoProveedor).subscribe(dato => {
        console.log(dato)});
    }
    this.router.navigate(['/proveedores']);
    
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






}
