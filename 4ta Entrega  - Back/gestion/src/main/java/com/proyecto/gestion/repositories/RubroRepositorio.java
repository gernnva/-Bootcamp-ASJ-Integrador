package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.Rubro;

@Repository
public interface RubroRepositorio extends JpaRepository<Rubro, Integer> {
	

}
