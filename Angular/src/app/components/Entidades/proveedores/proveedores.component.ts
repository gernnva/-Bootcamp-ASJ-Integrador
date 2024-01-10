import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  proveedores: Proveedor[] = [];

  constructor(public serv: ProveedoresService) {}

  ngOnInit(): void {
    this.serv.getDatos().subscribe((data: Proveedor[]) => {
      this.proveedores = data;
    });
  }

  public deleteProveedor(id: number) {
    const confirmDelete = window.confirm(
      '¿Estás seguro de que quieres eliminar este proveedor?'
    );

    if (confirmDelete) {
      // Si el usuario confirma, proceder con la eliminación
      this.serv.deleteProveedor(id);

      // Actualizar la lista de proveedores después de la eliminación
      this.serv.getDatos().subscribe((data: Proveedor[]) => {
        this.proveedores = data;
      });
    }
  }
  public editProveedor(id: number): void {
    this.serv.getProveedorById(id).subscribe((proveedor) => {
      if (proveedor) {
        this.serv.editProveedor(proveedor); // Enviar el producto para editar
      }
    });
  }
}
