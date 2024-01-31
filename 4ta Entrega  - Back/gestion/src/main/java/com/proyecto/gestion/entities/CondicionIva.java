package com.proyecto.gestion.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CondicionIva {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_condicionIva;

	private String Condicion;

	public CondicionIva() {
	}

	public CondicionIva(String condicion) {
		Condicion = condicion;
	}

	public Integer getId_condicionIva() {
		return id_condicionIva;
	}

	public void setId_condicionIva(Integer id_condicionIva) {
		this.id_condicionIva = id_condicionIva;
	}

	public String getCondicion() {
		return Condicion;
	}

	public void setCondicion(String condicion) {
		Condicion = condicion;
	}
	
	
	
}
