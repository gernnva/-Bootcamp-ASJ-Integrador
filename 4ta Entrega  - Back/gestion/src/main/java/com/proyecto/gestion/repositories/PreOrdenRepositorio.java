package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.PreOrden;

@Repository
public interface PreOrdenRepositorio extends JpaRepository<PreOrden, Integer>{

}
