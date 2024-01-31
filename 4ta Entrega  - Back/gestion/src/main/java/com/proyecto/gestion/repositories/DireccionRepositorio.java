package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.Direccion;

@Repository
public interface DireccionRepositorio extends JpaRepository<Direccion, Integer>{

}
