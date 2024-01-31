package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.CondicionIva;

@Repository
public interface CondicionIvaRepositorio extends JpaRepository<CondicionIva, Integer>{
	

}
