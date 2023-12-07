document.addEventListener("DOMContentLoaded", function () {
    // Obtener productos del localStorage
    var productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

    // Obtener la referencia al cuerpo de la tabla
    var tableBody = document.getElementById("proveedoresTableBody");

    // Iterar sobre los productos y crear filas
    productosEnLocalStorage.forEach(function (producto, index) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${producto.sku}</th>
            <td>${producto.proveedor}</td>
            <td>${producto.categoria}</td>
            <td>${producto.nombreProducto}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td>
                <button class="btn btn-outline-success btn-sm" onclick="editarProducto(${index})">Editar</button>
                <button class="btn btn-outline-danger btn-sm" onclick="borrarProducto(${index})">Borrar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
});

// Función para editar un producto
function editarProducto(index) {
    // Obtener el producto seleccionado
    var productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
    var producto = productosEnLocalStorage[index];

    // Guardar el producto en el localStorage
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));

    // Redirigir a la página de edición de producto
    window.location.href = 'ProductoEditar.html';
}

// Función para borrar un producto
function borrarProducto(index) {
    // Obtener productos del localStorage
    var productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

    // Eliminar el producto seleccionado del array
    productosEnLocalStorage.splice(index, 1);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));

    // Recargar la página para reflejar los cambios
    cargarDatosEnTabla();
}

function cargarDatosEnTabla() {
    // Obtener productos del localStorage
    var productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

    // Obtener la referencia al cuerpo de la tabla
    var tableBody = document.getElementById("proveedoresTableBody");

    // Limpiar la tabla antes de volver a cargar los datos
    tableBody.innerHTML = "";

    // Iterar sobre los productos y crear filas
    productosEnLocalStorage.forEach(function (producto, index) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${producto.sku}</th>
            <td>${producto.proveedor}</td>
            <td>${producto.categoria}</td>
            <td>${producto.nombreProducto}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td>
                <button class="btn btn-outline-success btn-sm" onclick="editarProducto(${index})">Editar</button>
                <button class="btn btn-outline-danger btn-sm" onclick="borrarProducto(${index})">Borrar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Llamar a la función para cargar los datos en la tabla al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    cargarDatosEnTabla();
});