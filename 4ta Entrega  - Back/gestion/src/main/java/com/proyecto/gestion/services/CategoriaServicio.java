package com.proyecto.gestion.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.Categoria;
import com.proyecto.gestion.entities.Rubro;
import com.proyecto.gestion.repositories.CategoriaRepositorio;
import com.proyecto.gestion.repositories.RubroRepositorio;

@Service
public class CategoriaServicio {

	@Autowired
	private CategoriaRepositorio categoriaRepositorio;
	
	@Autowired
    private RubroRepositorio rubroRepositorio;

	// LISTAR TODAS LAS CATEGORIAS
	public List<Categoria> listarCategorias() {
		return categoriaRepositorio.findAll();
	}

	// BUSCAR UNA CATEGORIA
	public Optional<Categoria> categoriaById(Integer id) {
		return categoriaRepositorio.findById(id);
	}
	
	// CREAR UNA CATEGORIA
    public Categoria crearCategoria(Categoria categoria) {
        // Buscar el Rubro por su ID
        Optional<Rubro> rubro = rubroRepositorio.findById(categoria.getRubro().getId_rubro());
                

        // Crear una nueva instancia de Categoria
        Categoria nuevaCategoria = new Categoria();
        nuevaCategoria.setNombrecategoria(categoria.getNombrecategoria());
        nuevaCategoria.setRubro(rubro.get());
        nuevaCategoria.setEliminado(false);
        nuevaCategoria.setReg_creado(LocalDateTime.now());
        nuevaCategoria.setReg_modificado(LocalDateTime.now());

        // Guardar la nueva Categoria
        return categoriaRepositorio.save(nuevaCategoria);
    }
    
    // UPDATE DE UNA CATEGORIA
    public Categoria actualizarCategoria(Integer idCategoria, Categoria categoriaActualizada) {
        Optional<Categoria> categoriaExistente = categoriaRepositorio.findById(idCategoria);
        	
        if (categoriaExistente.isPresent()) {
            Categoria categoria = categoriaExistente.get();
            categoria.setNombrecategoria(categoriaActualizada.getNombrecategoria());
            categoria.setEliminado(categoriaActualizada.isEliminado());
            categoria.setRubro(rubroRepositorio.findById(categoriaActualizada.getRubro().getId_rubro())
                    .orElseThrow(() -> new NoSuchElementException("El rubro no existe con el ID proporcionado")));
            categoria.setReg_modificado(LocalDateTime.now());

            return categoriaRepositorio.save(categoria);
        } else {
            // Manejar la lógica si la categoría no existe
            throw new NoSuchElementException("La categoría no existe con el ID proporcionado.");
        }
    }
    
    // ELIMINADO LOGICO DE UNA CATEGORIA
    public Categoria cambiarEstadoEliminado(Integer idCategoria) {
        Optional<Categoria> respuesta = categoriaRepositorio.findById(idCategoria);

        if (respuesta.isPresent()) {
            Categoria categoria = respuesta.get();
            categoria.setEliminado(!categoria.isEliminado()); // Cambia el estado eliminado al opuesto
            categoria.setReg_modificado(LocalDateTime.now());
            return categoriaRepositorio.save(categoria);
        } else {
            throw new NoSuchElementException("Categoría no encontrada con ID: " + idCategoria);
        }
    }
    
    
	

}
