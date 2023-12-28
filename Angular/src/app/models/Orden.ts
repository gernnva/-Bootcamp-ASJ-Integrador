export interface ProductoOrden {
    nombre: string;
    cantidad: number;
    precioUnitario: number;
  }
  
  export interface Orden {
    id: number;
    fechaEmision: Date;
    fechaEntrega: string;
    info: string;
    productos: ProductoOrden[];
    precio: number;
  }