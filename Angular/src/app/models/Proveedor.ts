export interface Proveedor {
  id_proveedor: number;
  logo: string;
  codPoveedor: string;
  email: string;
  razonSocial: string;

  rubro: {
    id_rubro: number;
  };

  paginaWeb: string;
  direccion: {
    calle: string;
    numCalle: number;
    ciudad: string;
    codPostal: string;
    provincia: {
      id_provincia: number;
    };
  };
  cuit: string;
  cond_iva: {
    id_condicionIva: number
  }
  contactoInfo: {
    nombre: string;
    apellido: string;
    telFijo: string;
    telCelular: string;
    email: string;
    rol: string;
  };
  
}
