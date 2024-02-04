import { Component } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { Producto } from 'src/app/models/Producto';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Proveedor } from 'src/app/models/Proveedor';
import { categoriaProductos } from 'src/app/data/categoriaProductos';

@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css'],
})
export class ProductosAgregarComponent {
  static nextId: number = 1;
  nuevoProducto: Producto = {
    id: this.productoServicio.obtenerUltimoId() + 1,
    sku: '',
    proveedor: '',
    categoria: '',
    nombreProducto: '',
    descripcion: '',
    precio: 0,
  };
   banderaNuevo!: boolean;
   proveedores: Proveedor [] = [];
   categorias: string [] = [];

  constructor(
    private productoServicio: ProductosService,
    private route: ActivatedRoute,
    public servProve: ProveedoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.servProve.obtenerProveedores().subscribe((data: Proveedor[]) => {
      this.proveedores = data;
    });
    this.categoriaProductos();
    // Obtener el ID del producto de la ruta
    const id = this.route.snapshot.params['id'];
    this.banderaNuevo = id ? false : true;
    // Si hay un ID, obtener el producto del servicio
    if (id) {
      this.productoServicio.getProductoById(id).subscribe((producto) => {
        if (producto) {
          this.nuevoProducto = { ...producto };
          this.nuevoProducto.proveedor = producto.proveedor;
        }
      });
    }
  }

  public saveProduct(): void {
    this.productoServicio.postData(this.nuevoProducto, this.banderaNuevo);
    this.router.navigate(['/productos']);

  }
  public categoriaProductos(){
    this.categorias = [...categoriaProductos];
  }
}
