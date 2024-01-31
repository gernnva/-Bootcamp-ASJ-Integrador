package com.proyecto.gestion.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gestion.entities.Producto;
import com.proyecto.gestion.services.ProductoServicio;

@RestController
@RequestMapping("/producto")
public class ProductoContolador {
	
	@Autowired
	private ProductoServicio productoServicio;
	
	
	
	
	
	//CREAR UN PRODUCTO
	@PostMapping()
    public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto) {
        Producto nuevoProducto = productoServicio.agregarProducto(producto);
        return ResponseEntity.ok(nuevoProducto);
    }

}
