package com.proyecto.gestion.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.OneToOne;

@Entity
public class PreOrden {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_preOrden;
	
	@ManyToOne(fetch = FetchType.EAGER)
    private Producto productos;
	
	private Integer cantidad; 
	private Double Subtotal;
//	
//	@ManyToOne
//    @JoinColumn(name = "idOrden")  // Nombre de la columna que representa la relación en la tabla PreOrden
//    private Orden orden;
//	
	
	
	private Date reg_creado = new Date();
	private Date reg_modificado = new Date();
	
	public PreOrden() {
	}

	public PreOrden(Integer id_preOrden, Producto productos, Integer cantidad, Double subtotal,
			Integer idOrden, Date reg_creado, Date reg_modificado) {
		this.id_preOrden = id_preOrden;
		this.productos = productos;
		this.cantidad = cantidad;
		Subtotal = subtotal;

		this.reg_creado = reg_creado;
		this.reg_modificado = reg_modificado;
	}

	public Integer getId_preOrden() {
		return id_preOrden;
	}

	public void setId_preOrden(Integer id_preOrden) {
		this.id_preOrden = id_preOrden;
	}

	public Producto getProductos() {
		return productos;
	}

	public void setProductos(Producto productos) {
		this.productos = productos;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public Double getSubtotal() {
		return Subtotal;
	}

	public void setSubtotal(Double subtotal) {
		Subtotal = subtotal;
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