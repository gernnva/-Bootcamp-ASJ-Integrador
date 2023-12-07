let formulario = document.getElementById("nuevoProductoForm");

// Agregar un evento al formulario para capturar el envío
formulario.addEventListener("submit", function (event) {
    // Evitar que el formulario se envíe de forma predeterminada
    event.preventDefault();

    // Obtener valores de los campos de entrada
    let sku = document.getElementById("sku").value;
    let proveedor = document.getElementById("proveedor").value;
    let categoria = document.getElementById("categoria").value;
    let nombreProducto = document.getElementById("Nombre-Producto").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;

    // Crear un objeto con los datos del producto
    let nuevoProducto = {
        sku: sku,
        proveedor: proveedor,
        categoria: categoria,
        nombreProducto: nombreProducto,
        descripcion: descripcion,
        precio: precio
    };

    // Obtener productos existentes del localStorage o inicializar un array vacío
    let productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

    // Agregar el nuevo producto al array
    productosEnLocalStorage.push(nuevoProducto);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));

    // Limpiar el formulario
    //formulario.reset();

    // Opcional: mostrar un mensaje de éxito u otra acción después de guardar en el localStorage
    alert("Producto agregado con éxito");

    window.location.href = 'productos.html';
});