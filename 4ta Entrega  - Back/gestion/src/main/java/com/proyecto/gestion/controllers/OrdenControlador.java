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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.gestion.entities.Orden;
import com.proyecto.gestion.entities.Proveedor;
import com.proyecto.gestion.services.OrdenServicio;

@RestController
@RequestMapping("/orden")
@CrossOrigin(origins = "http://localhost:4200")
public class OrdenControlador {

	@Autowired
	private OrdenServicio ordenServicio;

	// LISTAR ORDENES
	@GetMapping()
	public ResponseEntity<List<Orden>> listarOrdenes() {
		return ResponseEntity.ok(ordenServicio.listarOrdenes());
	}

	// LISTAR UNA ORDEN
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Orden>> ordenById(@PathVariable Integer id) {
		Optional<Orden> orden = ordenServicio.ordenById(id);
		if (orden.isPresent()) {
			return ResponseEntity.ok(orden);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
    @PostMapping()
    public ResponseEntity<Orden> crearOrden(@RequestBody Orden nuevaOrden) {
        try {
            // Realiza cualquier validación necesaria antes de crear la orden

            // Llama al servicio para crear la orden
            Orden ordenCreada = ordenServicio.crearOrden(nuevaOrden);

            // Devuelve la orden creada con el código de estado 201 (CREATED)
            return new ResponseEntity<>(ordenCreada, HttpStatus.CREATED);
        } catch (Exception e) {
            // En caso de error, puedes devolver un código de estado 400 (BAD REQUEST)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    // ELIMINADO LOGICO DE UNA ORDEN
 	@PatchMapping("/{id}")
 	public ResponseEntity<Orden> cambiarEstadoCancelado(@PathVariable Integer id) {
 		Orden ordenActualizar = ordenServicio.cambiarEstadoCancelado(id);
 		return ResponseEntity.ok(ordenActualizar);
 		
 	}

}
