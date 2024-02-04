import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  proveedores: any[] = [];

  constructor(public servicioProveedor: ProveedoresService) {}

  ngOnInit(): void {
    this.servicioProveedor.obtenerProveedores().subscribe(data => {
      this.proveedores = data;
      console.log(this.proveedores)
    });
  }

  public deleteProveedor(id: number) {
    const confirmDelete = window.confirm(
      '¿Estás seguro de que quieres eliminar este proveedor?'
    );

    if (confirmDelete) {
      // Si el usuario confirma, proceder con la eliminación
      this.servicioProveedor.deleteProveedor(id);

      // Actualizar la lista de proveedores después de la eliminación
      this.servicioProveedor.obtenerProveedores().subscribe(data => {
        this.proveedores = data;
      });
    }
  }
  public editProveedor(id: number): void {
    this.servicioProveedor.getProveedorById(id).subscribe((proveedor) => {
      if (proveedor) {
        this.servicioProveedor.editProveedor(proveedor); // Enviar el producto para editar
      }
    });
  }
}
