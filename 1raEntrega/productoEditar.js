document.addEventListener("DOMContentLoaded", function () { // ver que onda esto pq ya no carga los elementos y pq no edita al elemento indicado y crea uno nuevo
    console.log("La página se ha cargado correctamente.");
  
    // Obtener el índice del producto que se está editando (puedes obtenerlo de la URL o de alguna otra manera)
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("index");
    console.log("Índice obtenido:", index);
    // Obtener la información del producto del localStorage
    const productos = JSON.parse(localStorage.getItem("productos"));
    console.log("Productos obtenidos del localStorage:", productos);
  
    // Obtener el producto específico que se está editando
    const producto = productos[index];
    console.log("Producto a editar:", producto);
  
    // Rellenar los campos del formulario con la información del producto
    document.getElementById("sku").value = producto.sku;
    document.getElementById("proveedor").value = producto.proveedor;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("Nombre-Producto").value = producto.nombreProducto;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precio").value = producto.precio;
  
    // Agregar el evento de envío del formulario
    const editarProductoForm = document.getElementById("editarProductoForm");
    editarProductoForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Actualizar la información del producto en la lista de productos
      productos[index] = {
        sku: document.getElementById("sku").value,
        proveedor: document.getElementById("proveedor").value,
        categoria: document.getElementById("categoria").value,
        nombreProducto: document.getElementById("Nombre-Producto").value,
        descripcion: document.getElementById("descripcion").value,
        precio: document.getElementById("precio").value,
      };
  
      // Actualizar la entrada en el localStorage con la clave "productos"
      localStorage.setItem("productos", JSON.stringify(productos));
      console.log("Productos actualizados en el localStorage:", productos);
  
      // Redirigir a la página de productos después de editar
      window.location.href = "productos.html";
    });
  });
