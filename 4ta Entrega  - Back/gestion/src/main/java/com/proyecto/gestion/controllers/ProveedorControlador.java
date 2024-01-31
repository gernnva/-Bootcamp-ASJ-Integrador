package com.proyecto.gestion.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/proveedor")
public class ProveedorControlador {
	
	@Autowired
	ProveedorServicio proveedorServicio;
	
	@GetMapping()
	public ResponseEntity<List<Proveedor>> listarProveedores() {
		return ResponseEntity.ok(proveedorServicio.listarProveedores());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Proveedor>> proveedorById(@PathVariable Integer id) {
		Optional<Proveedor> proveedor = proveedorServicio.proveedorById(id);
		if (proveedor.isPresent()) {
			return ResponseEntity.ok(proveedor);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	// PRIMERO ME TENGO QUE ASEGURAR QUE TENGA DATOS EN LA TABLAS QUE TIENEN RELACION
	@PostMapping()
    public ResponseEntity<Proveedor> crearProveedor(@RequestBody Proveedor proveedor) {
        Proveedor nuevoProveedor = proveedorServicio.crearProveedor(proveedor);
        return ResponseEntity.ok(nuevoProveedor);
    }
	
	@PutMapping("/{id}")
    public ResponseEntity<Proveedor> actualizarProveedor(@PathVariable Integer id, @RequestBody Proveedor proveedorActualizado) {
        try {
            Proveedor respuesta = proveedorServicio.actualizarProveedor(id, proveedorActualizado);
            return new ResponseEntity<>(respuesta, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            // Manejar la lógica si el proveedor no existe
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
	
	@PatchMapping("/{id}")
    public ResponseEntity<Proveedor> cambiarEstadoEliminado(@PathVariable Integer id) {
        try {
            Proveedor proveedorActualizado = proveedorServicio.cambiarEstadoEliminado(id);
            return ResponseEntity.ok(proveedorActualizado);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	
	

}
