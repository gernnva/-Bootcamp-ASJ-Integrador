package com.proyecto.gestion.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gestion.entities.Provincia;
import com.proyecto.gestion.services.ProvinciaServicio;


@RestController
@RequestMapping("/provincia")
@CrossOrigin(origins = "http://localhost:4200")
public class ProvinciasControlador {

	@Autowired
	private ProvinciaServicio provinciaServicio;
	
	// LISTAR PROVINCIAS
	@GetMapping()
	public ResponseEntity<List<Provincia>> listarProvincia() {
		return ResponseEntity.ok(provinciaServicio.listarProvincia());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<List<Provincia>> listarProvinciaFiltrada(@PathVariable Integer id) {
		return ResponseEntity.ok(provinciaServicio.provinciaPorPais(id));
	}
	

}
