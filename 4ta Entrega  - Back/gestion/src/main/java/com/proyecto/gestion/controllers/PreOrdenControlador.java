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

import com.proyecto.gestion.entities.PreOrden;
import com.proyecto.gestion.entities.Proveedor;
import com.proyecto.gestion.services.PreOrdenServicio;
import com.proyecto.gestion.services.ProveedorServicio;

@RestController
@RequestMapping("/pre-orden")
@CrossOrigin(origins = "http://localhost:4200")
public class PreOrdenControlador {

	@Autowired
	private PreOrdenServicio preOrdenServicio;
	
	// LISTAR PREORDENES
	@GetMapping()
	public ResponseEntity<List<PreOrden>> listarPreOrdenes() {
		return ResponseEntity.ok(preOrdenServicio.listarPreOrdenes());
	}

	// LISTAR UNA PREORDEN
	@GetMapping("/{id}")
	public ResponseEntity<Optional<PreOrden>> preOrdenById(@PathVariable Integer id) {
		Optional<PreOrden> preOrden = preOrdenServicio.preOrdenById(id);
		if (preOrden.isPresent()) {
			return ResponseEntity.ok(preOrden);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// CREAR UNA PREORDEN
	@PostMapping()
	public ResponseEntity<PreOrden> crearPreOrden(@RequestBody PreOrden preOrden) {
		PreOrden nuevaPreOrden = preOrdenServicio.crearPreOrden(preOrden);
		return ResponseEntity.ok(nuevaPreOrden);
	}
//
//	// ACTUALIZAR PREORDEN
//	@PutMapping("/{id}")
//	public ResponseEntity<PreOrden> actualizarPreOrden(@PathVariable Integer id,
//			@RequestBody PreOrden preOrdenActualizada) {
//
//		PreOrden respuesta = preOrdenServicio.actualizarPreOrden(id, preOrdenActualizada);
//		return new ResponseEntity<>(respuesta, HttpStatus.OK);
//	}
//
//	// ELIMINADO LOGICO DE UNA PREORDEN
//	@PatchMapping("/{id}")
//	public ResponseEntity<PreOrden> cambiarEstadoEliminado(@PathVariable Integer id) {
//		PreOrden preOrdenActualizada = preOrdenServicio.cambiarEstadoEliminado(id);
//		return ResponseEntity.ok(preOrdenActualizada);
//
//	}

	
}
