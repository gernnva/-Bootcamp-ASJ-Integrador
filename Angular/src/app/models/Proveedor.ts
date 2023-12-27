export interface Proveedor {
    id: number;
    razonSocial: string;
    rubro: string;
    sitioWeb?: string;
    direccion: {
      calle: string;
      cp: string;
      localidad: string;
      provincia: string;
      pais: string;
    };
    contacto: {
      nombre: string;
      apellido: string;
      telefono: string;
      email: string;
      rol: string;
    };
    datosFiscales: {
      cuit: string;
      condicionIva: string;
    };
  }