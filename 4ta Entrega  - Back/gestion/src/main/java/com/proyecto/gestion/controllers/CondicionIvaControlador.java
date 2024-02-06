package com.proyecto.gestion.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gestion.entities.CondicionIva;
import com.proyecto.gestion.services.CondicionIvaServicio;

@RestController
@RequestMapping("/condicionIva")
@CrossOrigin(origins = "http://localhost:4200")
public class CondicionIvaControlador {
	
	@Autowired
	private CondicionIvaServicio condicionIvaServicio;
	
	@GetMapping()
	public ResponseEntity<List<CondicionIva>> listarProvincia() {
		return ResponseEntity.ok(condicionIvaServicio.listarCondiciones());
	}

}
