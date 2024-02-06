package com.proyecto.gestion.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.CondicionIva;
import com.proyecto.gestion.repositories.CondicionIvaRepositorio;

@Service
public class CondicionIvaServicio {
	
	@Autowired
	private CondicionIvaRepositorio condicionIvaRepositorio;
	
	public List<CondicionIva> listarCondiciones() {

		return condicionIvaRepositorio.findAll();
	}

}
