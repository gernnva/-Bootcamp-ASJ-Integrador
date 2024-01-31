package com.proyecto.gestion.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Orden {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_Orden;
	
	private Date fechaEmision = new Date();
	private Date fechaEntrega;
	private String descripcion;
	
	@OneToMany(mappedBy = "orden", cascade = CascadeType.ALL)
    private List<PreOrden> preordenes = new ArrayList<>();

	private Double Total;
	private boolean cancelada = false;
	@ManyToOne(fetch = FetchType.EAGER)
	private Proveedor proveedor;
	
	private Date reg_modificado = new Date();

	public Orden() {
	}

	public Orden(Integer id_Orden, Date fechaEmision, Date fechaEntrega, String descripcion, List<PreOrden> preordenes,
			Double total, boolean cancelada, Date reg_modificado) {
		this.id_Orden = id_Orden;
		this.fechaEmision = fechaEmision;
		this.fechaEntrega = fechaEntrega;
		this.descripcion = descripcion;
		this.preordenes = preordenes;
		Total = total;
		this.cancelada = cancelada;
		this.reg_modificado = reg_modificado;
	}

	public Integer getId_Orden() {
		return id_Orden;
	}

	public void setId_Orden(Integer id_Orden) {
		this.id_Orden = id_Orden;
	}

	public Date getFechaEmision() {
		return fechaEmision;
	}

	public void setFechaEmision(Date fechaEmision) {
		this.fechaEmision = fechaEmision;
	}

	public Date getFechaEntrega() {
		return fechaEntrega;
	}

	public void setFechaEntrega(Date fechaEntrega) {
		this.fechaEntrega = fechaEntrega;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public List<PreOrden> getPreordenes() {
		return preordenes;
	}

	public void setPreordenes(List<PreOrden> preordenes) {
		this.preordenes = preordenes;
	}

	public Double getTotal() {
		return Total;
	}

	public void setTotal(Double total) {
		Total = total;
	}

	public boolean isCancelada() {
		return cancelada;
	}

	public void setCancelada(boolean cancelada) {
		this.cancelada = cancelada;
	}

	public Date getReg_modificado() {
		return reg_modificado;
	}

	public void setReg_modificado(Date reg_modificado) {
		this.reg_modificado = reg_modificado;
	}
	
	
	
}
