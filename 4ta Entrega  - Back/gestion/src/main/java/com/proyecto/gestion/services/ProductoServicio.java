package com.proyecto.gestion.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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
	
	//LISTAR PRODUCTOS
	public List<Producto> listarProductos(){
		
		return productoRepositorio.findAll();
	}
	
	// LISTA UN PRODUCTO
	public Optional<Producto> productoById(Integer id) {

		return productoRepositorio.findById(id);
	}
	
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
        nuevoProducto.setSku(producto.getSku());
        nuevoProducto.setNombre(producto.getNombre());
        nuevoProducto.setDescripcion(producto.getDescripcion());
        nuevoProducto.setImagen(producto.getImagen());      
        nuevoProducto.setPrecio(producto.getPrecio());
        nuevoProducto.setReg_creado(LocalDateTime.now());
        nuevoProducto.setReg_modificado(LocalDateTime.now());
        nuevoProducto.setEliminado(false);

        // Guardar el nuevo producto en la base de datos
        return productoRepositorio.save(nuevoProducto);
    }
    
    //UPDATE UN PRODUCTO
    public Producto actualizarProducto(Integer id, Producto producto) {
        // Verificar si el producto con el ID proporcionado existe en la base de datos
        Producto productoExistente = productoRepositorio.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Producto no encontrado con ID: " + id));

        // Actualizar los campos del producto existente con los valores proporcionados
        
        productoExistente.setNombre(producto.getNombre());
        productoExistente.setSku(producto.getSku());
        productoExistente.setImagen(producto.getImagen());
        productoExistente.setDescripcion(producto.getDescripcion());
        productoExistente.setPrecio(producto.getPrecio());
        productoExistente.setReg_modificado(LocalDateTime.now());
        
        // Cambiar la Proveedor
        if (producto.getProveedor() != null && producto.getProveedor().getId_proveedor() != null) {
            Proveedor nuevoProveedor = proveedorRepositorio.findById(producto.getProveedor().getId_proveedor())
                    .orElseThrow(() -> new NoSuchElementException("Proveedor no encontrado con ID: " + producto.getProveedor().getId_proveedor()));
            productoExistente.setProveedor(nuevoProveedor);
        }

        // Cambiar la categoría
        if (producto.getCategoria() != null && producto.getCategoria().getId_categoria() != null) {
            Categoria nuevaCategoria = categoriaRepositorio.findById(producto.getCategoria().getId_categoria())
                    .orElseThrow(() -> new NoSuchElementException("Categoría no encontrada con ID: " + producto.getCategoria().getId_categoria()));
            productoExistente.setCategoria(nuevaCategoria);
        }
        // Guardar el producto actualizado en la base de datos
        return productoRepositorio.save(productoExistente);
    }
    
    // BORRADO LOGICO DE UN PRODUCTO
    public Producto cambiarEstadoEliminado(Integer idProducto) {
        Optional<Producto> respuesta = productoRepositorio.findById(idProducto);

        if (respuesta.isPresent()) {
            Producto producto = respuesta.get();
            producto.setEliminado(!producto.isEliminado()); // Cambia el estado eliminado al opuesto
            producto.setReg_modificado(LocalDateTime.now());
            return productoRepositorio.save(producto);
        } else {
            throw new NoSuchElementException("Producto no encontrado con ID: " + idProducto);
        }
    }
    
        
    

}
