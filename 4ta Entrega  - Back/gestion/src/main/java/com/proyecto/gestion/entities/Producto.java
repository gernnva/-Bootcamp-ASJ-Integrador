package com.proyecto.gestion.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_producto;
	@ManyToOne(fetch = FetchType.EAGER)
	private Proveedor proveedor;
	@ManyToOne(fetch = FetchType.EAGER)
	private Categoria categoria;
	private String nombre;
	private String Descripcion;
	private Double precio;
	
	private LocalDateTime reg_creado;
    private LocalDateTime reg_modificado;
	
	public Producto() {
	}

	public Producto(Integer id_producto, Proveedor proveedor, Categoria categoria, String nombre, String descripcion,
			Double precio, LocalDateTime reg_creado, LocalDateTime reg_modificado) {
		this.id_producto = id_producto;
		this.proveedor = proveedor;
		this.categoria = categoria;
		this.nombre = nombre;
		Descripcion = descripcion;
		this.precio = precio;
		this.reg_creado = reg_creado;
		this.reg_modificado = reg_modificado;
	}

	public Integer getId_producto() {
		return id_producto;
	}

	public void setId_producto(Integer id_producto) {
		this.id_producto = id_producto;
	}

	public Proveedor getProveedor() {
		return proveedor;
	}

	public void setProveedor(Proveedor proveedor) {
		this.proveedor = proveedor;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return Descripcion;
	}

	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
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
