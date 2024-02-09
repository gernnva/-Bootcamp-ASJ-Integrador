package com.proyecto.gestion.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.Orden;
import com.proyecto.gestion.entities.PreOrden;
import com.proyecto.gestion.entities.Producto;
import com.proyecto.gestion.entities.Proveedor;
import com.proyecto.gestion.repositories.OrdenRepositorio;
import com.proyecto.gestion.repositories.PreOrdenRepositorio;

import jakarta.persistence.EntityNotFoundException;

@Service
public class OrdenServicio {
	
	@Autowired
	private OrdenRepositorio ordenRepositorio;
	
	@Autowired
	private ProductoServicio productoServicio;
	
	@Autowired
	private PreOrdenRepositorio preOrdenRepositorio;
	
	
    //LISTAR LAS ORDENES
    public List<Orden> listarOrdenes() {
        return ordenRepositorio.findAll();
    }
    // UNA ORDEN POR ID
    public Optional<Orden> ordenById(Integer id) {
        return ordenRepositorio.findById(id);
    }
    
    //CREAR UNA ORDEN
    public Orden crearOrden(Orden nuevaOrden) {
        Orden orden = new Orden();
        
        orden.setFechaEmision(new Date());
        orden.setFechaEntrega(nuevaOrden.getFechaEntrega());
        orden.setDescripcion(nuevaOrden.getDescripcion());
        
        List<PreOrden> preordenes = nuevaOrden.getPreordenes().stream()
                .map(preOrden -> {
                    // Aquí cargarías las PreOrden existentes basándote en el id_preOrden
                    Optional<PreOrden> preOrdenExistente = preOrdenRepositorio.findById(preOrden.getId_preOrden());
                    
                    // Si la PreOrden existe, la añades a la lista de preordenes
                    if (preOrdenExistente.isPresent()) {
                        PreOrden preOrdenCargada = preOrdenExistente.get();
                        preOrdenCargada.setCantidad(preOrden.getCantidad()); // Actualizar la cantidad si es necesario
                        return preOrdenCargada;
                    } else {
                        // Puedes manejar el caso en que la PreOrden no exista como desees
                        throw new EntityNotFoundException("La PreOrden con ID " + preOrden.getId_preOrden() + " no fue encontrada.");
                    }
                })
                .collect(Collectors.toList());

        orden.setPreordenes(preordenes);

        // Calculas el total basándote en las preórdenes existentes
        double total = preordenes.stream()
                .mapToDouble(PreOrden::getSubtotal)
                .sum();

        orden.setTotal(total);

        // Persiste la orden en la base de datos
        return ordenRepositorio.save(orden);
    }
    
    // BORRADO LOGICO DE UN PROVEEDOR
    public Orden cambiarEstadoCancelado(Integer idOrden) {
        Optional<Orden> respuesta = ordenRepositorio.findById(idOrden);
        
        if (respuesta.isPresent()) {
            Orden orden = respuesta.get();
            orden.setCancelada(true);
            orden.setReg_modificado(new Date());
            return ordenRepositorio.save(orden);
        } else {
            throw new NoSuchElementException("Orden no encontrado con ID: " + idOrden);
        }
    
    }
    
}
