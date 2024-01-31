package com.proyecto.gestion.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.Rubro;
import com.proyecto.gestion.repositories.RubroRepositorio;

@Service
public class RubroServicio {
	
	@Autowired
	RubroRepositorio rubroRepositorio;
	
	public Optional<Rubro> rubroById(Integer id) {

		return rubroRepositorio.findById(id);
	}

}
