package com.proyecto.gestion.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Provincia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_provincia;
	private String nombreProvincia;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Pais country;

	public Provincia() {
	}

	public Provincia(Integer id_provincia, String nombreProvincia, Pais country) {
		this.id_provincia = id_provincia;
		this.nombreProvincia = nombreProvincia;
		this.country = country;
	}

	public Integer getId_provincia() {
		return id_provincia;
	}

	public void setId_provincia(Integer id_provincia) {
		this.id_provincia = id_provincia;
	}

	public String getNombreProvincia() {
		return nombreProvincia;
	}

	public void setNombreProvincia(String nombreProvincia) {
		this.nombreProvincia = nombreProvincia;
	}

	public Pais getCountry() {
		return country;
	}

	public void setCountry(Pais country) {
		this.country = country;
	}

	
}
