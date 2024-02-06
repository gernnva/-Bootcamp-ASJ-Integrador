package com.proyecto.gestion.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.Pais;
import com.proyecto.gestion.repositories.PaisRepositorio;


@Service
public class PaisServicio {
	
	@Autowired
	private PaisRepositorio paisRepositorio;
	
    //---------------------------------------------------------------------------------------------------------------------------
	// LISTAR para todos los paises
	public List<Pais> listarPais() {

		return paisRepositorio.findAll();
	}

}
