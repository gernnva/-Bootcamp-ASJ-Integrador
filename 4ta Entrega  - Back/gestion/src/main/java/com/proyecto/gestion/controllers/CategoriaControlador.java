package com.proyecto.gestion.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gestion.entities.Categoria;
import com.proyecto.gestion.services.CategoriaServicio;

@RestController
@RequestMapping("/categoria")
public class CategoriaControlador {
	
	@Autowired
	private CategoriaServicio categoriaServicio;
	
	@GetMapping()
	
	public ResponseEntity<List<Categoria>> listarCategoria() {
		return ResponseEntity.ok(categoriaServicio.listarCategorias());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Categoria>> categoriaById(@PathVariable Integer id) {
		Optional<Categoria> categoria = categoriaServicio.categoriaById(id);
		if (categoria.isPresent()) {
			return ResponseEntity.ok(categoria);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	@PostMapping()
    public ResponseEntity<Categoria> crearCategoria(@RequestBody Categoria categoria) {
        Categoria nuevaCategoria = categoriaServicio.crearCategoria(categoria);
        return ResponseEntity.ok(nuevaCategoria);
    }
	
	@PutMapping("/{id}")
	public ResponseEntity<Categoria> actualizarCategoria(@PathVariable Integer id, @RequestBody Categoria categoriaAActualizada) {
	    try {
	        Categoria categoriaActualizadaResultado = categoriaServicio.actualizarCategoria(id, categoriaAActualizada);
	        return new ResponseEntity<>(categoriaActualizadaResultado, HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        // Manejar la lógica si la categoría no existe
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	
	}
}
