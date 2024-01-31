package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.Proveedor;

@Repository
public interface ProveedorRepositorio extends JpaRepository<Proveedor, Integer>{
	
	
}
