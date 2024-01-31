package com.proyecto.gestion.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ContactoInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_contactoInfo;
	private String nombre;
	private String apellido;
	private String telFijo;
	private String telCelular;
	private String email;
	private String rol;
	
	private LocalDateTime reg_creado;
    private LocalDateTime reg_modificado;
	
	
	public ContactoInfo() {
	}


	public ContactoInfo(String nombre, String apellido, String telFijo, String telCelular,
			String email, String rol) {

		this.nombre = nombre;
		this.apellido = apellido;
		this.telFijo = telFijo;
		this.telCelular = telCelular;
		this.email = email;
		this.rol = rol;
		this.reg_creado = LocalDateTime.now();
		this.reg_modificado = LocalDateTime.now();
	}


	public Integer getId_contactoInfo() {
		return id_contactoInfo;
	}


	public void setId_contactoInfo(Integer id_contactoInfo) {
		this.id_contactoInfo = id_contactoInfo;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	public String getTelFijo() {
		return telFijo;
	}


	public void setTelFijo(String telFijo) {
		this.telFijo = telFijo;
	}


	public String getTelCelular() {
		return telCelular;
	}


	public void setTelCelular(String telCelular) {
		this.telCelular = telCelular;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getRol() {
		return rol;
	}


	public void setRol(String rol) {
		this.rol = rol;
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
