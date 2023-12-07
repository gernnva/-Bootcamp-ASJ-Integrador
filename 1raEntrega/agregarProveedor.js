document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("nuevoProveedorForm");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos del formulario
    let codigo = document.getElementById("codigo").value;
    let razonSocial = document.getElementById("razonSocial").value;
    let rubro = document.getElementById("rubro").value;
    var sitioWeb = document.getElementById("sitioWeb").value;
    var calle = document.getElementById("calle").value;
    var cp = document.getElementById("cp").value;
    var localidad = document.getElementById("localidad").value;
    var provincia = document.getElementById("provincia").value;
    var pais = document.getElementById("pais").value;
    var cuit = document.getElementById("cuit").value;
    var condicionIva = document.getElementById("condicionIva").value;
    var nombreContacto = document.getElementById("nombreContacto").value;
    var apellidoContacto = document.getElementById("apellidoContacto").value;
    var telefonoContacto = document.getElementById("telefonoContacto").value;
    var emailContacto = document.getElementById("emailContacto").value;
    var rolContacto = document.getElementById("rolContacto").value;

    // Crear un objeto con los datos del proveedor
    let nuevoProveedor = {
      codigo: codigo,
      razonSocial: razonSocial,
      rubro: rubro,
      sitioWeb: sitioWeb,
      calle: calle,
      cp: cp,
      localidad: localidad,
      provincia: provincia,
      pais: pais,
      cuit: cuit,
      condicionIva: condicionIva,
      nombreContacto: nombreContacto,
      apellidoContacto: apellidoContacto,
      telefonoContacto: telefonoContacto,
      emailContacto: emailContacto,
      rolContacto: rolContacto
    };

    // Obtener los proveedores existentes del localStorage o inicializar un array vacío
    let proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];

    // Agregar el nuevo proveedor al array
    proveedores.push(nuevoProveedor);

    // Convertir el array a JSON y almacenarlo en el localStorage
    localStorage.setItem("proveedores", JSON.stringify(proveedores));

    // Puedes redirigir a otra página o hacer cualquier otra acción después de agregar el proveedor
    alert("Proveedor agregado exitosamente");

    window.location.href = 'proveedores.html';

  });
});


