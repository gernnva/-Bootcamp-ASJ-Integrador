var proveedoresEnLocalStorage = JSON.parse(localStorage.getItem("proveedores")) || [];

        // Obtener la referencia al cuerpo de la tabla
        var tableBody = document.getElementById("proveedoresTableBody");

        // Iterar sobre los proveedores y crear filas
        proveedoresEnLocalStorage.forEach(function (proveedor, index) {
            var row = document.createElement("tr");
            row.innerHTML = `
                <th scope="row">${proveedor.codigo}</th>
                <td>${proveedor.razonSocial}</td>
                <td>${proveedor.rubro}</td>
                <td>${proveedor.sitioWeb}</td>
                <td>${proveedor.apellidoContacto} ${proveedor.nombreContacto}</td>
                <td>${proveedor.telefonoContacto}</td>
                <td>
                    <button class="btn btn-outline-success btn-sm">Editar</button>
                    <button class="btn btn-outline-danger btn-sm" onclick="borrarProveedor(${index})">Borrar</button>
                </td>


            `;
            tableBody.appendChild(row);
        });

// Función para mostrar información del proveedor
function mostrarInformacion(index) {
    // Obtener el proveedor seleccionado
    var proveedorSeleccionado = proveedoresEnLocalStorage[index];

    // Guardar el proveedor en el localStorage
    localStorage.setItem('proveedorSeleccionado', JSON.stringify(proveedorSeleccionado));

    // Redirigir a la página mostrarInformacionProveedor.html
    window.location.href = 'mostrarDatosProveedor.html';
}

function borrarProveedor(index) {
    // Obtener la lista de proveedores del localStorage
    let proveedoresEnLocalStorage = JSON.parse(localStorage.getItem("proveedores")) || [];

    // Eliminar el proveedor en el índice especificado
    proveedoresEnLocalStorage.splice(index, 1);

    // Actualizar el localStorage con la nueva lista de proveedores
    localStorage.setItem("proveedores", JSON.stringify(proveedoresEnLocalStorage));

    // Volver a cargar la tabla para reflejar los cambios
    window.location.href = 'proveedores.html';
}