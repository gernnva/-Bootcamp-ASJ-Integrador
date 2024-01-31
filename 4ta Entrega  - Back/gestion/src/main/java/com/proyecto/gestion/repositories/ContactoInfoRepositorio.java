package com.proyecto.gestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.gestion.entities.ContactoInfo;

@Repository
public interface ContactoInfoRepositorio extends JpaRepository<ContactoInfo, Integer>{

}
