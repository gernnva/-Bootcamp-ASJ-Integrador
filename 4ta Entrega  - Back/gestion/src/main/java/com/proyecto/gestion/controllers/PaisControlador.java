package com.proyecto.gestion.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gestion.entities.Pais;
import com.proyecto.gestion.services.PaisServicio;


@RestController
@RequestMapping("/pais")
@CrossOrigin(origins = "http://localhost:4200")
public class PaisControlador {
	
	@Autowired
	private PaisServicio paisServicio;
	
	// LISTAR PAISES
	@GetMapping()
	public ResponseEntity<List<Pais>> listarPais() {
		return ResponseEntity.ok(paisServicio.listarPais());
	}

}
