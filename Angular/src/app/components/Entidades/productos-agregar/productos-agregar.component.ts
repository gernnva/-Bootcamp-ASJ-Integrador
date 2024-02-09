import { Component } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { Producto } from 'src/app/models/Producto';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Proveedor } from 'src/app/models/Proveedor';


@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css'],
})
export class ProductosAgregarComponent {
  static nextId: number = 1;
  nuevoProducto: any = {
    proveedor: {
      id_proveedor: -1,
    },
    categoria: {
      id_categoria: -1,
    },
    sku: '',
    nombre: '',
    descripcion: '',
    precio: null,
    imagen: '',
  };

  
  //usando
  banderaNuevo!: boolean;
  idProducto = this.route.snapshot.params['id'];
  proveedores: any[] = [];
  categorias: any[] = [];

  constructor(
    private productoServicio: ProductosService,
    private route: ActivatedRoute,
    private servicioProveedor: ProveedoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.traerCategorias();
    this.traerProveedores();

    if (this.idProducto != undefined) {
      this.cargarDatosProducto(this.idProducto);
      
    }

  }

  public traerCategorias() {
    this.productoServicio.obtenerCategorias().subscribe((data) => {
      this.categorias = data.filter((categoria) => !categoria.eliminado);
    });
  }

  public traerProveedores(){
    this.servicioProveedor.obtenerProveedores().subscribe((data) => {
      this.proveedores = data;
    });
  }

    // GUARDAR UN NUEVO PRODUCTO O ACTUALIZAR UNO
    public guardarProducto() {
      if (this.idProducto != undefined){
        this.productoServicio.actualizarProducto(this.idProducto, this.nuevoProducto).subscribe(dato => {
          console.log(dato)
          this.router.navigate(['/productos']);
        })
      } else {
        this.productoServicio.guardarProducto(this.nuevoProducto).subscribe(dato => {
          console.log(dato)
          this.router.navigate(['/productos']);
        });
          
      }    
    }

  // CARGAR LOS DATOS DE UN PRODUCTO EN EL 'AGREGAR COMPONENT' 
  private cargarDatosProducto(idProducto: number): void {
    this.productoServicio.getProductoById(idProducto).subscribe(
     producto => {
        this.nuevoProducto = producto;
     },
     error => {
       console.error('Error al cargar datos del producto:', error);
     }
   );
 }

}
