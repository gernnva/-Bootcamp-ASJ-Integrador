package com.proyecto.gestion.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gestion.entities.Proveedor;
import com.proyecto.gestion.services.ProveedorServicio;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/proveedor")
public class ProveedorControlador {

	@Autowired
	private ProveedorServicio proveedorServicio;

	// LISTAR PROVEEDORES
	@GetMapping()
	public ResponseEntity<List<Proveedor>> listarProveedores() {
		return ResponseEntity.ok(proveedorServicio.listarProveedores());
	}
	// LISTAR UN PROVEEDOR
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Proveedor>> proveedorById(@PathVariable Integer id) {
		Optional<Proveedor> proveedor = proveedorServicio.proveedorById(id);
		if (proveedor.isPresent()) {
			return ResponseEntity.ok(proveedor);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	// CREAR UN PROVEEDOR
	@PostMapping()
	public ResponseEntity<Proveedor> crearProveedor(@RequestBody Proveedor proveedor) {
		Proveedor nuevoProveedor = proveedorServicio.crearProveedor(proveedor);
		return ResponseEntity.ok(nuevoProveedor);
	}
	// UPDATE PROVEEDOR
	@PutMapping("/{id}")
	public ResponseEntity<Proveedor> actualizarProveedor(@PathVariable Integer id, @RequestBody Proveedor proveedorActualizado) {

		Proveedor respuesta = proveedorServicio.actualizarProveedor(id, proveedorActualizado);
		return new ResponseEntity<>(respuesta, HttpStatus.OK);
	}
	
	// ELIMINADO LOGICO DE UN PROVEEDOR
	@PatchMapping("/{id}")
	public ResponseEntity<Proveedor> cambiarEstadoEliminado(@PathVariable Integer id) {
		Proveedor proveedorActualizado = proveedorServicio.cambiarEstadoEliminado(id);
		return ResponseEntity.ok(proveedorActualizado);
		
	}

}
