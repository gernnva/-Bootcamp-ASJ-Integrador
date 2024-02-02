package com.proyecto.gestion.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.swing.plaf.synth.Region;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.PreOrden;
import com.proyecto.gestion.entities.Producto;
import com.proyecto.gestion.repositories.OrdenRepositorio;
import com.proyecto.gestion.repositories.PreOrdenRepositorio;
import com.proyecto.gestion.repositories.ProductoRepositorio;

@Service
public class PreOrdenServicio {
	
    @Autowired
    private PreOrdenRepositorio preOrdenRepositorio;
    
    @Autowired
    private ProductoRepositorio productoRepositorio;
	
    //LISTAR LAS PREORDENES
    public List<PreOrden> listarPreOrdenes() {
        return preOrdenRepositorio.findAll();
    }
    // UNA PREORDEN POR ID
    public Optional<PreOrden> preOrdenById(Integer id) {
        return preOrdenRepositorio.findById(id);
    }
    
    // CREAR UNA PREORDEN
    public PreOrden crearPreOrden(PreOrden preOrden) {

        Producto producto = productoRepositorio.findById(preOrden.getProductos().getId_producto()).orElse(null);
    
        // Crea la PreOrden y establece los valores
        
        int cantidad = preOrden.getCantidad();
        PreOrden nuevaPreOrden = new PreOrden();
        nuevaPreOrden.setProductos(producto);
        nuevaPreOrden.setCantidad(cantidad);
        System.out.println(preOrden.getCantidad());
        nuevaPreOrden.setSubtotal(producto.getPrecio() * preOrden.getCantidad());

        nuevaPreOrden.setReg_creado(new Date());
        nuevaPreOrden.setReg_modificado(new Date());

        // Guarda la nueva PreOrden en la base de datos
        return preOrdenRepositorio.save(nuevaPreOrden);
    }
    
    
    
}
