package com.proyecto.gestion.entities;

import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Proveedor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_proveedor;
	
	private String logo;
	private String codProveedor;
	private String email;
	
	private String razon_social;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Rubro rubro;
	
	private String paginaWeb;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_direccion", referencedColumnName = "id_direccion")
	private Direccion direccion;
	
	private String cuit;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_condicionIva")
	private CondicionIva condIva;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_contactoInfo", referencedColumnName = "id_contactoInfo")
	private ContactoInfo contactoInfo;
	
	private boolean eliminado;
	
	private LocalDateTime reg_creado;
    private LocalDateTime reg_modificado;
	
	
	public Proveedor() {
	}


	public Proveedor(Integer id_proveedor, String logo, String codProveedor, String email, String razon_social,
			Rubro rubro, String paginaWeb, Direccion direccion, String cuit, CondicionIva condIva,
			ContactoInfo contactoInfo, boolean eliminado, LocalDateTime reg_creado, LocalDateTime reg_modificado) {
		this.id_proveedor = id_proveedor;
		this.logo = logo;
		this.codProveedor = codProveedor;
		this.email = email;
		this.razon_social = razon_social;
		this.rubro = rubro;
		this.paginaWeb = paginaWeb;
		this.direccion = direccion;
		this.cuit = cuit;
		this.condIva = condIva;
		this.contactoInfo = contactoInfo;
		this.eliminado = eliminado;
		this.reg_creado = reg_creado;
		this.reg_modificado = reg_modificado;
	}


	public Integer getId_proveedor() {
		return id_proveedor;
	}


	public void setId_proveedor(Integer id_proveedor) {
		this.id_proveedor = id_proveedor;
	}


	public String getLogo() {
		return logo;
	}


	public void setLogo(String logo) {
		this.logo = logo;
	}


	public String getCodProveedor() {
		return codProveedor;
	}


	public void setCodProveedor(String codProveedor) {
		this.codProveedor = codProveedor;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getRazon_social() {
		return razon_social;
	}


	public void setRazon_social(String razon_social) {
		this.razon_social = razon_social;
	}


	public Rubro getRubro() {
		return rubro;
	}


	public void setRubro(Rubro rubro) {
		this.rubro = rubro;
	}


	public String getPaginaWeb() {
		return paginaWeb;
	}


	public void setPaginaWeb(String paginaWeb) {
		this.paginaWeb = paginaWeb;
	}


	public Direccion getDireccion() {
		return direccion;
	}


	public void setDireccion(Direccion direccion) {
		this.direccion = direccion;
	}


	public String getCuit() {
		return cuit;
	}


	public void setCuit(String cuit) {
		this.cuit = cuit;
	}


	public CondicionIva getCondIva() {
		return condIva;
	}


	public void setCondIva(CondicionIva condIva) {
		this.condIva = condIva;
	}


	public ContactoInfo getContactoInfo() {
		return contactoInfo;
	}


	public void setContactoInfo(ContactoInfo contactoInfo) {
		this.contactoInfo = contactoInfo;
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
