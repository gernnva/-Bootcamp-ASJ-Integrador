package com.proyecto.gestion.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Categoria {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_categoria;
	private String nombrecategoria;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Rubro rubro;
	
	private boolean eliminado;
	
	private LocalDateTime reg_creado;
    private LocalDateTime reg_modificado;
	
	public Categoria() {
	}

	public Categoria(Integer id_categoria, String nombrecategoria, Rubro rubro, boolean eliminado,
			LocalDateTime reg_creado, LocalDateTime reg_modificado) {
		this.id_categoria = id_categoria;
		this.nombrecategoria = nombrecategoria;
		this.rubro = rubro;
		this.eliminado = eliminado;
		this.reg_creado = reg_creado;
		this.reg_modificado = reg_modificado;
	}

	public Integer getId_categoria() {
		return id_categoria;
	}

	public void setId_categoria(Integer id_categoria) {
		this.id_categoria = id_categoria;
	}

	public String getNombrecategoria() {
		return nombrecategoria;
	}

	public void setNombrecategoria(String nombrecategoria) {
		this.nombrecategoria = nombrecategoria;
	}

	public Rubro getRubro() {
		return rubro;
	}

	public void setRubro(Rubro rubro) {
		this.rubro = rubro;
	}

	public boolean isEliminado() {
		return eliminado;
	}

	public void setEliminado(boolean eliminado) {
		this.eliminado = eliminado;
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
