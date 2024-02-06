import { Component } from '@angular/core';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Proveedor } from 'src/app/models/Proveedor';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { tiposContribuyentes } from 'src/app/data/condicionIva';
import { CategoriasService } from 'src/app/service/categorias.service';
import { rubrosProveedores } from 'src/app/data/rubrosProveedores';

@Component({
  selector: 'app-proveedores-agregar',
  templateUrl: './proveedores-agregar.component.html',
  styleUrls: ['./proveedores-agregar.component.css'],
})
export class ProveedoresAgregarComponent {
  nuevoProveedor: any = {
    id_proveedor: 0,
    logo: '',
    codPoveedor: '',
    email: '',
    razonSocial: '',
    rubro: {
      id_rubro: 0,
    },
    paginaWeb: '',
    direccion: {
      calle: '',
      numCalle: 0,
      ciudad: '',
      codPostal: '',
      provincia: {
        id_provincia: 0,
      },
    },
    cuit: '',
    cond_iva: {
      id_condicionIva: 0,
    },
    contactoInfo: {
      nombre: '',
      apellido: '',
      telFijo: '',
      telCelular: '',
      email: '',
      rol: '',
    },
  };

  paises: any[] = [];
  provincias: any[] = [];
  paisElegido: any;
  rubros: string[] = [];
  condicionesIva: any[] = [];

  contribuyentesCateg: string[] = []; // buscar en la api los tipos

  constructor(
    private servicioProveedor: ProveedoresService,
    private route: ActivatedRoute,
    private servicioCategoria: CategoriasService
  ) {}

  ngOnInit(): void {
    this.traerPaises();
    this.cargarRubros();
    this.traerCondicionesIva()
  }

  public traerPaises() {
    this.servicioProveedor.obtenerPaises().subscribe((data) => {
      this.paises = data;
      console.log(this.paises);
    });
  }

  public traerProvincias() {
    this.servicioProveedor
      .obtenerProvincias(this.paisElegido.id_pais)
      .subscribe((data) => {
        this.provincias = data;
      });
  }

  public traerCondicionesIva(){
    this.servicioProveedor.obtenerCondicionesIva().subscribe((data => {
      this.condicionesIva = data;
    }))

  }
  // BORRO TODO MENOS EL ID
  public resetCampos(): void {
    this.nuevoProveedor = {
      id: 0,
      sku: '',
      razonSocial: '',
      rubro: '',
      sitioWeb: '',
      direccion: {
        calle: '',
        cp: '',
        localidad: '',
        provincia: this.nuevoProveedor.direccion.provincia,
        pais: this.nuevoProveedor.direccion.pais,
      },
      contacto: {
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        rol: '',
      },
      datosFiscales: {
        cuit: '',
        condicionIva: '',
      },
    };
  }

  public cargarRubros() {
    this.rubros = [...rubrosProveedores];
  }
}
