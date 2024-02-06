import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from 'src/app/service/proveedores.service';


@Component({
  selector: 'app-proveedores-detalle',
  templateUrl: './proveedores-detalle.component.html',
  styleUrls: ['./proveedores-detalle.component.css']
})
export class ProveedoresDetalleComponent implements OnInit{
  proveedor: any;
  

  constructor(private route: ActivatedRoute, private servicioProveedor: ProveedoresService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    console.log(id)
    this.servicioProveedor.getProveedorById(id).subscribe((data => {
      this.proveedor = data;
    }));

  }
  
  
}
