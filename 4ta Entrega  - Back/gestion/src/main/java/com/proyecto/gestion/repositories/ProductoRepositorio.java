package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.Producto;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Integer> {

}
