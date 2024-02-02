package com.proyecto.gestion.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	// LISTAR LOS PRODUCTOS
	@GetMapping()
	public ResponseEntity<List<Producto>> listarProductos() {
		return ResponseEntity.ok(productoServicio.listarProductos());
	}
	
	// LISTA UN SOLO PRODUCTO
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Producto>> productoById(@PathVariable Integer id) {
		Optional<Producto> respuesta = productoServicio.productoById(id);
		if (respuesta.isPresent()) {
			return ResponseEntity.ok(respuesta);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	//CREAR UN PRODUCTO
	@PostMapping()
    public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto) {
        Producto nuevoProducto = productoServicio.agregarProducto(producto);
        return ResponseEntity.ok(nuevoProducto);
    }
	
	// EDITAR UN PRODUCTO
	@PutMapping("/{id}")
	public ResponseEntity<Producto> actualizarProducto(@PathVariable Integer id, @RequestBody Producto producto) {
	    Producto productoActualizado = productoServicio.actualizarProducto(id, producto);
	    return ResponseEntity.ok(productoActualizado);
	}
	
	// ELIMINADO LOGICO DE UN PRODUCTO
	@PatchMapping("/{id}")
	public ResponseEntity<Producto> cambiarEstadoEliminado(@PathVariable Integer id) {
	    Producto productoActualizado = productoServicio.cambiarEstadoEliminado(id);
	    return ResponseEntity.ok(productoActualizado);
	}

}
