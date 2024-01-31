package com.proyecto.gestion.services;

import java.time.LocalDateTime;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.Categoria;
import com.proyecto.gestion.entities.Producto;
import com.proyecto.gestion.entities.Proveedor;
import com.proyecto.gestion.repositories.CategoriaRepositorio;
import com.proyecto.gestion.repositories.ProductoRepositorio;
import com.proyecto.gestion.repositories.ProveedorRepositorio;

@Service
public class ProductoServicio {
	
	@Autowired
	private ProveedorRepositorio proveedorRepositorio;
	
	@Autowired
	private CategoriaRepositorio categoriaRepositorio;
	
	@Autowired
	private ProductoRepositorio productoRepositorio;
	
	//AGREGAR UN PRODUCTO
    public Producto agregarProducto(Producto producto) {
        // Asegurarse de que el proveedor y la categoría existan en la base de datos
        Proveedor proveedorExistente = proveedorRepositorio.findById(producto.getProveedor().getId_proveedor())
                .orElseThrow(() -> new NoSuchElementException("Proveedor no encontrado con ID: " + producto.getProveedor().getId_proveedor()));

        Categoria categoriaExistente = categoriaRepositorio.findById(producto.getCategoria().getId_categoria())
                .orElseThrow(() -> new NoSuchElementException("Categoría no encontrada con ID: " + producto.getCategoria().getId_categoria()));

        // Establecer las referencias a proveedor y categoría en el producto
        
        Producto nuevoProducto = new Producto();
        nuevoProducto.setProveedor(proveedorExistente);
        nuevoProducto.setCategoria(categoriaExistente);
        nuevoProducto.setNombre(producto.getNombre());
        nuevoProducto.setDescripcion(producto.getDescripcion());
        nuevoProducto.setPrecio(producto.getPrecio());
        nuevoProducto.setReg_creado(LocalDateTime.now());
        nuevoProducto.setReg_modificado(LocalDateTime.now());

        // Guardar el nuevo producto en la base de datos
        return productoRepositorio.save(nuevoProducto);
    }

}
