package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.Provincia;

@Repository
public interface ProvinciaRepositorio extends JpaRepository<Provincia, Integer>{

}
