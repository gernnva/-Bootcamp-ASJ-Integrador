package com.proyecto.gestion.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Direccion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_direccion;
	
	private String calle;
	private Integer numCalle;
	private String ciudad;
	private Integer codPostal;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Provincia provincia;
	
	private LocalDateTime reg_creado;
    private LocalDateTime reg_modificado;
	
	public Direccion() {
	}

	public Direccion(String calle, Integer numCalle, String ciudad, Integer codPostal,
			Provincia provincia) {

		this.calle = calle;
		this.numCalle = numCalle;
		this.ciudad = ciudad;
		this.codPostal = codPostal;
		this.provincia = provincia;
		this.reg_creado = LocalDateTime.now();
	    this.reg_modificado = LocalDateTime.now();
	}

	public Integer getId_direccion() {
		return id_direccion;
	}

	public void setId_direccion(Integer id_direccion) {
		this.id_direccion = id_direccion;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public Integer getNumCalle() {
		return numCalle;
	}

	public void setNumCalle(Integer numCalle) {
		this.numCalle = numCalle;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public Integer getCodPostal() {
		return codPostal;
	}

	public void setCodPostal(Integer codPostal) {
		this.codPostal = codPostal;
	}

	public Provincia getProvincia() {
		return provincia;
	}

	public void setProvincia(Provincia provincia) {
		this.provincia = provincia;
	}

	public LocalDateTime getReg_creado() {
		return reg_creado;
	}

	public void setReg_creado(LocalDateTime reg_creado) {
		this.reg_creado = reg_creado;
	}

	public LocalDateTime getReg_modificado() {
		return reg_modificado;
	}

	public void setReg_modificado(LocalDateTime reg_modificado) {
		this.reg_modificado = reg_modificado;
	}

	

}

