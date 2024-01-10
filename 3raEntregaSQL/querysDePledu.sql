--1
-- Obtener todos los productos, mostrando nombre del producto, categoría, proveedor (razón social y código proveedor), precio.
SELECT 
    p."nombre" AS "Nombre del Producto",
    c."nombre" AS "Categoría",
    pr."razon_social" AS "Proveedor",
    pr."provee_id" AS "Código Proveedor",
    p."precio" AS "Precio"
FROM productos p
JOIN proveedores pr ON p."id_proveedor" = pr."provee_id"
JOIN categorias c ON p."id_categoria" = c."cate_id";

--2
--En el listado anterior, además de los datos mostrados, traer el campo imagen aunque el producto NO tenga una. 
--Si no tiene imagen, mostrar "-".
SELECT 
    p."nombre" AS "Nombre del Producto",
    c."nombre" AS "Categoría",
    pr."razon_social" AS "Proveedor",
    pr."provee_id" AS "Código Proveedor",
    p."precio" AS "Precio",
    '-' AS "Imagen"
FROM productos p
JOIN proveedores pr ON p."id_proveedor" = pr."provee_id"
JOIN categorias c ON p."id_categoria" = c."cate_id";

--3
--Mostrar los datos que se pueden modificar (en el front) del producto con ID = 2.
SELECT 
    p."nombre" AS "Nombre del Producto",
    c."nombre" AS "Categoría",
	p.descripcion AS "Descripcion",
    p."precio" AS "Precio"
FROM productos p
JOIN proveedores pr ON p."id_proveedor" = pr."provee_id"
JOIN categorias c ON p."id_categoria" = c."cate_id"
WHERE p."prod_id" = 2;

--4
--Listar todos los proveedores cuyo teléfono tenga la característica de Córdoba 
--o que la provincia sea igual a alguna de las 3 con más proveedores.
SELECT 
    pr."razon_social" AS "Proveedor",
    pr."provee_id" AS "Código Proveedor",
    t."telefono" AS "Teléfono",
    t."celular" AS "Celular",
    d."localidad" AS "Localidad"
FROM proveedores pr
JOIN contactoInfo ci ON pr."id_contactoInfo" = ci."cont_id"
JOIN telefonos t ON ci."id_telefono" = t."tele_id"
JOIN direcciones d ON pr."id_direcciones" = d."dire_id"
WHERE 
    t."telefono" LIKE '%351%' -- Característica de Córdoba
	OR t."celular" LIKE '%351%'
ORDER BY pr."provee_id";

--5
-- Traer un listado de todos los proveedores que no hayan sido eliminados , y ordenados por razon social, codigo proveedor y fecha en que se dió de alta ASC. 
-- De este listado mostrar los datos que correspondan con su tabla del front.

ALTER TABLE proveedores
ADD eliminado BIT;

-- Asignar valor 1 (eliminado) a algunos proveedores
UPDATE proveedores
SET eliminado = 1
WHERE provee_id IN (1, 3);

-- Asignar valor 0 (no eliminado) a otros proveedores
UPDATE proveedores
SET eliminado = 0
WHERE provee_id IN (2, 4, 5);

SELECT 
    p.provee_id AS "Código Proveedor",
    p.razon_social AS "Razón Social",
    p.id_direcciones AS "Dirección ID",
    p.cuit AS "CUIT",
    ci.condicion AS "Condición IVA",
	c.id_telefono AS "Telefono",
	c.email AS "email",
	p.sitio_web AS "Pagina Web",
    p.id_contactoInfo AS "Contacto Info ID",
    p.registro_creado AS "Fecha de Alta"
FROM proveedores p
JOIN rubros r ON p.id_rubro = r.rubr_id
JOIN condicionesIVA ci ON p.id_condicionIVA = ci.cond_id
JOIN contactoInfo c ON p.id_contactoInfo = c.cont_id

WHERE p.eliminado = 0 -- Solo proveedores no eliminados
ORDER BY p.razon_social, p.provee_id, p.registro_creado ASC;

--6
--Obtener razón social, código proveedor, imagen, web, email, teléfono y
--los datos del contacto del proveedor con más ordenes de compra cargadas.
WITH ProveedoresConOrdenes AS (
    SELECT 
        p.provee_id,
        p.razon_social,
        p.sitio_web,
        ci.email,
        c.telefono,
        c.celular,
        COUNT(o.orde_id) AS cantidad_ordenes
    FROM proveedores p
    JOIN contactoInfo ci ON p.id_contactoInfo = ci.cont_id
    JOIN telefonos c ON ci.id_telefono = c.tele_id
    JOIN productos pr ON pr.id_proveedor = p.provee_id
    LEFT JOIN preOrden po ON po.id_producto = pr.prod_id
    LEFT JOIN ordenes o ON po.num_orden = o.orde_id
    WHERE p.eliminado = 0 -- Solo proveedores no eliminados
    GROUP BY p.provee_id, p.razon_social, p.sitio_web, ci.email, c.telefono, c.celular
)

SELECT 
    pc.provee_id AS "Código Proveedor",
    pc.razon_social AS "Razón Social",
    pc.sitio_web AS "Sitio Web",
    pc.email AS "Email",
    pc.telefono AS "Teléfono",
    pc.celular AS "Celular"
FROM ProveedoresConOrdenes pc
WHERE pc.cantidad_ordenes = (SELECT MAX(cantidad_ordenes) FROM ProveedoresConOrdenes);

--(mis proveedores tienen 1 compra a cada uno -- el negocio es nuevo -- ja) 


--7
-- Mostrar la fecha emisión, nº de orden, razon social y codigo de proveedor, y la cantidad de productos de cada orden.

SELECT
    o.fecha_emision AS "Fecha de Emisión",
    o.orde_id AS "Nº de Orden",
    p.razon_social AS "Razón Social",
    p.provee_id AS "Código de Proveedor",
    COUNT(po.id_producto) AS "Cantidad de Productos"
FROM ordenes o
JOIN proveedores p ON o.id_proveedor = p.provee_id
LEFT JOIN preOrden po ON o.orde_id = po.num_orden
GROUP BY o.fecha_emision, o.orde_id, p.razon_social, p.provee_id
ORDER BY o.fecha_emision;

-- 8
-- En el listado anterior, diferenciar cuando una orden está Cancelada o no, y el total de la misma.

SELECT
    o.fecha_emision AS "Fecha de Emisión",
    o.orde_id AS "Nº de Orden",
    p.razon_social AS "Razón Social",
    p.provee_id AS "Código de Proveedor",
    COUNT(po.id_producto) AS "Cantidad de Productos",
    CASE 
        WHEN o.[cancelada?] = 1 THEN 'Cancelada'
        ELSE 'No Cancelada'
    END AS "Estado",
    o.total AS "Total"
FROM ordenes o
JOIN proveedores p ON o.id_proveedor = p.provee_id
LEFT JOIN preOrden po ON o.orde_id = po.num_orden
GROUP BY o.fecha_emision, o.orde_id, p.razon_social, p.provee_id, o.[cancelada?], o.total
ORDER BY o.fecha_emision;

--9
-- Mostrar el detalle de una orden de compra del proveedor 3, trayendo: SKU del producto, nombre producto, cantidad y subtotal.

SELECT
    p.prod_id AS "SKU del Producto",
    p.nombre AS "Nombre del Producto",
    po.cantidad AS "Cantidad",
    po.cantidad * p.precio AS "Subtotal"
FROM preOrden po
JOIN productos p ON po.id_producto = p.prod_id
JOIN ordenes o ON po.num_orden = o.orde_id
JOIN proveedores prov ON o.id_proveedor = prov.provee_id
WHERE prov.provee_id = 3
ORDER BY p.prod_id;

--10
--Cambiar el estado a Cancelada y la fecha de modificación a la orden de compra con ID = 4.
UPDATE ordenes
SET "cancelada?" = 1,
    "fecha_modificado" = GETDATE()
WHERE "orde_id" = 4;

--11
-- Escribir la sentencia para eliminar el producto con id = 1 (NO EJECUTAR, SÓLO MOSTRAR SENTENCIA)
DELETE FROM productos
WHERE "prod_id" = 1;

-- se que no er a asi per son las 15.57