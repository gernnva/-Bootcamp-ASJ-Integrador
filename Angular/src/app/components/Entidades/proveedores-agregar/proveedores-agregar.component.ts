import { Component } from '@angular/core';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Proveedor } from 'src/app/models/Proveedor';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { tiposContribuyentes } from 'src/app/data/condicionIva';

@Component({
  selector: 'app-proveedores-agregar',
  templateUrl: './proveedores-agregar.component.html',
  styleUrls: ['./proveedores-agregar.component.css'],
})
export class ProveedoresAgregarComponent {

  static nextId: number = 1;
  nuevoProveedor: Proveedor = {
    id: this.proveedorServicio.obtenerUltimoId() + 1, // a completar
    razonSocial: '',
    rubro: '',
    sitioWeb: '',
    direccion: {
      calle: '',
      cp: '',
      localidad: '',
      provincia: '',
      pais: '',
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
  banderaNuevo!: boolean;
  paisesAll: any[] = [];
  countries: any[] = [];
  provinces: any[] = [];
  selectedCountry: string = '';
  selectedProvince: string = '';
  contribuyentesCateg: string [] = [];




  constructor(
    private proveedorServicio: ProveedoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.proveedorServicio.getCountries().subscribe((data: any) => {
      this.countries = data.geonames;
    });

    this.tiposIva();

    // Obtener el ID del proveedor de la ruta
    const id = this.route.snapshot.params['id'];
    this.banderaNuevo = id ? false : true;
    // Si hay un ID, obtener el proveedor del servicio
    if (id) {
      this.proveedorServicio.getProveedorById(id).subscribe((proveedor) => {
        if (proveedor) {
          this.nuevoProveedor = { ...proveedor };
        }
      });
    }
    this.proveedorServicio.paises().subscribe((data) => {
      data.map((auxPais: { name: { common: any } }) => {
        this.paisesAll.push(auxPais.name.common);
      });
      this.paisesAll.sort();

      
    });
  }

  onCountryChange(): void {
    if (this.selectedCountry) {
      this.proveedorServicio.getProvinces(this.selectedCountry).subscribe((data: any) => {
        this.provinces = data.geonames;
      });
    }
  }

  public saveProveedor(): void {
    this.proveedorServicio.postData(this.nuevoProveedor, this.banderaNuevo);
  }

  public paises(){
    this.proveedorServicio.paises()
  }

  public tiposIva(){
    this.contribuyentesCateg = [...tiposContribuyentes];
  }
  // BORRO TODO MENOS EL ID
  public resetCampos(): void {
    this.nuevoProveedor = {
      id: this.nuevoProveedor.id,
      razonSocial: '',
      rubro: '',
      sitioWeb: '',
      direccion: {
        calle: '',
        cp: '',
        localidad: '',
        provincia: '',
        pais: '',
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

}