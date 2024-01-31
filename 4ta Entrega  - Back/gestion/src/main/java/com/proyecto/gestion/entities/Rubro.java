package com.proyecto.gestion.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Rubro {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_rubro;
	private String nombreRubro;
	
	private Date reg_creado;
	private Date reg_modificado;
	
	public Rubro() {
	}

	public Rubro(String nombreRubro) {
		
		this.nombreRubro = nombreRubro;
		this.reg_creado = new Date();
		this.reg_modificado = new Date();
	}

	public Integer getId_rubro() {
		return id_rubro;
	}

	public void setId_rubro(Integer id_rubro) {
		this.id_rubro = id_rubro;
	}

	public String getNombreRubro() {
		return nombreRubro;
	}

	public void setNombreRubro(String nombreRubro) {
		this.nombreRubro = nombreRubro;
	}

	public Date getReg_creado() {
		return reg_creado;
	}

	public void setReg_creado(Date reg_creado) {
		this.reg_creado = reg_creado;
	}

	public Date getReg_modificado() {
		return reg_modificado;
	}

	public void setReg_modificado(Date reg_modificado) {
		this.reg_modificado = reg_modificado;
	}

	
}
