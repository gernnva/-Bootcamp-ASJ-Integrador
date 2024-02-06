package com.proyecto.gestion.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.Provincia;
import com.proyecto.gestion.repositories.ProvinciaRepositorio;


@Service
public class ProvinciaServicio {
	
	@Autowired
	private ProvinciaRepositorio provinciaRepositorio;
	
    //---------------------------------------------------------------------------------------------------------------------------
	// LISTAR para todos las provincias
	public List<Provincia> listarProvincia() {

		return provinciaRepositorio.findAll();
	}
	
	public List<Provincia> provinciaPorPais(Integer idPais){
		
		List <Provincia> listaCompleta = provinciaRepositorio.findAll();
		List <Provincia> listaFiltrada = new ArrayList<Provincia>();
		
		for (Provincia provincia : listaCompleta) {
			if (idPais == provincia.getCountry().getId_pais()) {
				listaFiltrada.add(provincia);
			}
			
		}
		return listaFiltrada;
	}
}
