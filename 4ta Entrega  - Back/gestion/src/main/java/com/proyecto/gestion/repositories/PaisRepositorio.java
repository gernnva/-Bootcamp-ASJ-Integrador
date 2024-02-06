package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.Pais;


@Repository
public interface PaisRepositorio extends JpaRepository<Pais, Integer>{
	
	

}
