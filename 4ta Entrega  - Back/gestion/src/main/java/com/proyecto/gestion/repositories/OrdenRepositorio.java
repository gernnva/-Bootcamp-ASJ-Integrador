package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.Orden;

@Repository
public interface OrdenRepositorio extends JpaRepository<Orden, Integer> {

}
