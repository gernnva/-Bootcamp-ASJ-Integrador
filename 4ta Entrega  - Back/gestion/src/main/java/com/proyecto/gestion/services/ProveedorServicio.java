package com.proyecto.gestion.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.gestion.entities.CondicionIva;
import com.proyecto.gestion.entities.ContactoInfo;
import com.proyecto.gestion.entities.Direccion;
import com.proyecto.gestion.entities.Proveedor;
import com.proyecto.gestion.entities.Rubro;
import com.proyecto.gestion.repositories.CondicionIvaRepositorio;
import com.proyecto.gestion.repositories.ContactoInfoRepositorio;
import com.proyecto.gestion.repositories.DireccionRepositorio;
import com.proyecto.gestion.repositories.ProveedorRepositorio;
import com.proyecto.gestion.repositories.RubroRepositorio;



@Service
public class ProveedorServicio {

	@Autowired
	private ProveedorRepositorio proveedorRepositorio;
	
	@Autowired
    private RubroRepositorio rubroRepositorio;
	
	@Autowired
    private CondicionIvaRepositorio condicionIvaRepositorio;

    @Autowired
    private DireccionRepositorio direccionRepositorio;

    @Autowired
    private ContactoInfoRepositorio contactoInfoRepositorio;

    
    //---------------------------------------------------------------------------------------------------------------------------
	// LISTAR para todos los proveedores
	public List<Proveedor> listarProveedores() {

		return proveedorRepositorio.findAll();
	}

	
    //---------------------------------------------------------------------------------------------------------------------------
	// LISTA UN proveedor por id
	public Optional<Proveedor> proveedorById(Integer id) {

		return proveedorRepositorio.findById(id);
	}
	
	
	
    //---------------------------------------------------------------------------------------------------------------------------
	// CREAR un proveedor
    public Proveedor crearProveedor(Proveedor proveedor) {
        // Obtener el Rubro por ID
        Rubro rubro = obtenerRubro(proveedor.getRubro().getId_rubro());

        // Obtener la Condición IVA por ID
        CondicionIva condicionIva = obtenerCondicionIva(proveedor.getCondIva().getId_condicionIva());

        // Crear y guardar la Dirección
        Direccion direccion = new Direccion(proveedor.getDireccion().getCalle(), proveedor.getDireccion().getNumCalle(),
                proveedor.getDireccion().getCiudad(), proveedor.getDireccion().getCodPostal(), proveedor.getDireccion().getProvincia());
        Direccion direccionGuardada = direccionRepositorio.save(direccion);

        // Crear y guardar la Información de Contacto
        ContactoInfo contactoInfo = new ContactoInfo(proveedor.getContactoInfo().getNombre(), proveedor.getContactoInfo().getApellido(),
                proveedor.getContactoInfo().getTelFijo(), proveedor.getContactoInfo().getTelCelular(),
                proveedor.getContactoInfo().getEmail(), proveedor.getContactoInfo().getRol());
        ContactoInfo contactoInfoGuardado = contactoInfoRepositorio.save(contactoInfo);

        // Crear y guardar el Proveedor
        Proveedor nuevoProveedor = new Proveedor();
        nuevoProveedor.setLogo(proveedor.getLogo());
        nuevoProveedor.setCodProveedor(proveedor.getCodProveedor());
        nuevoProveedor.setEmail(proveedor.getEmail());
        nuevoProveedor.setRazon_social(proveedor.getRazon_social());
        nuevoProveedor.setRubro(rubro);
        nuevoProveedor.setPaginaWeb(proveedor.getPaginaWeb());
        nuevoProveedor.setDireccion(direccionGuardada);
        nuevoProveedor.setCuit(proveedor.getCuit());
        nuevoProveedor.setCondIva(condicionIva);
        nuevoProveedor.setContactoInfo(contactoInfoGuardado);
        nuevoProveedor.setEliminado(false);
        nuevoProveedor.setReg_creado(LocalDateTime.now());
        nuevoProveedor.setReg_modificado(LocalDateTime.now());

        return proveedorRepositorio.save(nuevoProveedor);
    }
    
    //condiciones que necesito para guardar un proveedor (mas que todo para saber que inserte datos)
    private Rubro obtenerRubro(Integer idRubro) {
        Optional<Rubro> respuesta = rubroRepositorio.findById(idRubro);
        return respuesta.orElseThrow(() -> new NoSuchElementException("Rubro no encontrado con el ID proporcionado"));
    }

    private CondicionIva obtenerCondicionIva(Integer idCondicionIva) {
        Optional<CondicionIva> respuesta = condicionIvaRepositorio.findById(idCondicionIva);
        return respuesta.orElseThrow(() -> new NoSuchElementException("Condición IVA no encontrada con el ID proporcionado"));
    }
    
    
    //---------------------------------------------------------------------------------------------------------------------------
    // ACTUALIZAR UN PROVEEDOR
    public Proveedor actualizarProveedor(Integer id, Proveedor proveedorActualizado) {
        // Buscar el proveedor existente por ID
        Optional<Proveedor> proveedorExistente = proveedorRepositorio.findById(id);

        if (proveedorExistente.isPresent()) {
            Proveedor proveedor = proveedorExistente.get();

            // Actualizar propiedades del proveedor con los valores proporcionados
            proveedor.setLogo(proveedorActualizado.getLogo());
            proveedor.setCodProveedor(proveedorActualizado.getCodProveedor());
            proveedor.setEmail(proveedorActualizado.getEmail());
            proveedor.setRazon_social(proveedorActualizado.getRazon_social());

            // Actualizar Rubro si se proporciona un nuevo Rubro
            if (proveedorActualizado.getRubro() != null) {
                Optional<Rubro> rubroExistente = rubroRepositorio.findById(proveedorActualizado.getRubro().getId_rubro());
                rubroExistente.ifPresent(proveedor::setRubro);
            }

            // Actualizar Direccion si se proporciona una nueva Direccion
            if (proveedorActualizado.getDireccion() != null) {
                Direccion direccionActualizada = proveedorActualizado.getDireccion();
                Direccion direccionExistente = proveedor.getDireccion();

                // Actualizar campos de la dirección
                direccionExistente.setCalle(direccionActualizada.getCalle());
                direccionExistente.setNumCalle(direccionActualizada.getNumCalle());
                direccionExistente.setCiudad(direccionActualizada.getCiudad());
                direccionExistente.setCodPostal(direccionActualizada.getCodPostal());
                direccionExistente.setProvincia(direccionActualizada.getProvincia());
                direccionExistente.setReg_modificado(LocalDateTime.now());

                // Guardar la dirección actualizada en la base de datos
                direccionRepositorio.save(direccionExistente);
            }

            // Actualizar CondIva si se proporciona una nueva CondIva
            if (proveedorActualizado.getCondIva() != null) {
                Optional<CondicionIva> condIvaExistente = condicionIvaRepositorio.findById(proveedorActualizado.getCondIva().getId_condicionIva());
                condIvaExistente.ifPresent(proveedor::setCondIva);
            }

            // Actualizar ContactoInfo si se proporciona una nueva ContactoInfo
            if (proveedorActualizado.getContactoInfo() != null) {
                ContactoInfo contactoInfoActualizado = proveedorActualizado.getContactoInfo();
                ContactoInfo contactoInfoExistente = proveedor.getContactoInfo();

                // Actualizar campos de la ContactoInfo
                contactoInfoExistente.setNombre(contactoInfoActualizado.getNombre());
                contactoInfoExistente.setApellido(contactoInfoActualizado.getApellido());
                contactoInfoExistente.setTelFijo(contactoInfoActualizado.getTelFijo());
                contactoInfoExistente.setTelCelular(contactoInfoActualizado.getTelCelular());
                contactoInfoExistente.setEmail(contactoInfoActualizado.getEmail());
                contactoInfoExistente.setRol(contactoInfoActualizado.getRol());
                contactoInfoExistente.setReg_modificado(LocalDateTime.now());

                // Guardar la ContactoInfo actualizada en la base de datos
                contactoInfoRepositorio.save(contactoInfoExistente);
            }

            // Actualizar eliminado
            proveedor.setEliminado(proveedorActualizado.isEliminado());

            // Guardar el proveedor actualizado en la base de datos
            return proveedorRepositorio.save(proveedor);
        } else {
            // Manejar la lógica si el proveedor no existe
            throw new NoSuchElementException("Proveedor no encontrado con ID: " + id);
        }
    }
    
    
    //---------------------------------------------------------------------------------------------------------------------------
    // BORRADO LOGICO DE UN PROVEEDOR
    
    public Proveedor cambiarEstadoEliminado(Integer idProveedor) {
        Optional<Proveedor> respuesta = proveedorRepositorio.findById(idProveedor);
        
        if (respuesta.isPresent()) {
            Proveedor proveedor = respuesta.get();
            proveedor.setEliminado(!proveedor.isEliminado()); // Cambia el estado eliminado al opuesto
            proveedor.setReg_modificado(LocalDateTime.now());
            return proveedorRepositorio.save(proveedor);
        } else {
            throw new NoSuchElementException("Proveedor no encontrado con ID: " + idProveedor);
        }
    
    }

}
