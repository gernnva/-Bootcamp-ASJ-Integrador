
-- INSERTANDO PAISES
INSERT INTO PAISES VALUES (1, 'Argentina');
INSERT INTO PAISES VALUES (2, 'Brasil');
INSERT INTO PAISES VALUES (3, 'Ecuador');
INSERT INTO PAISES VALUES (4, 'Bolivia');
INSERT INTO PAISES VALUES (5, 'Paraguay');
INSERT INTO PAISES VALUES (6, 'Uruguay');


-- INSERTANDO RUBROS
INSERT INTO RUBROS VALUES (1, 'Retail');
INSERT INTO RUBROS VALUES (2, 'Tecnologia');
INSERT INTO RUBROS VALUES (3, 'Moda');
INSERT INTO RUBROS VALUES (4, 'Juguetes');
INSERT INTO RUBROS VALUES (5, 'Construccion');

-- INSERTANDO CATEGORIAS

--Categorias Retail
INSERT INTO categorias VALUES (1, 'Celulares', 1);
INSERT INTO categorias VALUES (2, 'Lavarropas', 1);
INSERT INTO categorias VALUES (3, 'Televisores', 1);

--Categorias Tecnologia
INSERT INTO categorias VALUES (4, 'Heladeras', 2);
INSERT INTO categorias VALUES (5, 'Notebooks', 2);
INSERT INTO categorias VALUES (6, 'Monitores', 2);

--Categorias Moda
INSERT INTO categorias VALUES (7, 'Polleras', 3);
INSERT INTO categorias VALUES (8, 'Remeras', 3);
INSERT INTO categorias VALUES (9, 'Pantalones', 3);

--Categorias Juguetes
INSERT INTO categorias VALUES (10, 'VideoJuegos', 4);
INSERT INTO categorias VALUES (11, 'Muñecos', 4);
INSERT INTO categorias VALUES (12, 'Disfraces', 4);

--Categorias Construcion
INSERT INTO categorias VALUES (13, 'Alambre', 5);
INSERT INTO categorias VALUES (14, 'Cemento', 5);
INSERT INTO categorias VALUES (15, 'Herramientas', 5);

-- INSERTANDO TELEFONOS
INSERT INTO telefonos VALUES (1, 3543433870, 3516856118);
INSERT INTO telefonos VALUES (2, 3514884565, 3515165846);
INSERT INTO telefonos VALUES (3, 3514856896, 3517846525);
INSERT INTO telefonos VALUES (4, 3514865846, 3516845465);
INSERT INTO telefonos VALUES (5, 3514896585, 3515468464);

-- INSERTANDO CONDICIONES IVA

INSERT INTO condicionesIVA VALUES (1, 'Responsable Inscripto');
INSERT INTO condicionesIVA VALUES (2, 'Responsable NO inscripto');
INSERT INTO condicionesIVA VALUES (3, 'Consumidor final');
INSERT INTO condicionesIVA VALUES (4, 'Monotributista');
INSERT INTO condicionesIVA VALUES (5, 'Excento');

-- INSERTANDO PROVINCIAS
-- ARGENTINA
INSERT INTO provincias VALUES (1, 'Buenos Aires', 1);
INSERT INTO provincias VALUES (2, 'Catamarca', 1);
INSERT INTO provincias VALUES (3, 'Chaco', 1);
INSERT INTO provincias VALUES (4, 'Chubut', 1);
INSERT INTO provincias VALUES (5, 'Córdoba', 1);
INSERT INTO provincias VALUES (6, 'Corrientes', 1);
INSERT INTO provincias VALUES (7, 'Entre Ríos', 1);
INSERT INTO provincias VALUES (8, 'Formosa', 1);
INSERT INTO provincias VALUES (9, 'Jujuy', 1);
INSERT INTO provincias VALUES (10, 'La Pampa', 1);
INSERT INTO provincias VALUES (11, 'La Rioja', 1);
INSERT INTO provincias VALUES (12, 'Mendoza', 1);
INSERT INTO provincias VALUES (13, 'Misiones', 1);
INSERT INTO provincias VALUES (14, 'Neuquén', 1);
INSERT INTO provincias VALUES (15, 'Río Negro', 1);
INSERT INTO provincias VALUES (16, 'Salta', 1);
INSERT INTO provincias VALUES (17, 'San Juan', 1);
INSERT INTO provincias VALUES (18, 'San Luis', 1);
INSERT INTO provincias VALUES (19, 'Santa Cruz', 1);
INSERT INTO provincias VALUES (20, 'Santa Fe', 1);
INSERT INTO provincias VALUES (21, 'Santiago del Estero', 1);
INSERT INTO provincias VALUES (22, 'Tierra del Fuego', 1);
INSERT INTO provincias VALUES (23, 'Tucumán', 1);

--BRASIL
INSERT INTO provincias VALUES (24, 'São Paulo', 2);
INSERT INTO provincias VALUES (25, 'Rio de Janeiro', 2);
INSERT INTO provincias VALUES (26,'Minas Gerais', 2);
INSERT INTO provincias VALUES (27, 'Bahia', 2);
INSERT INTO provincias VALUES (28,'Amazonas', 2);
select * from provincias

--ECUADOR
INSERT INTO provincias VALUES (29, 'Pichincha', 3);
INSERT INTO provincias VALUES (30, 'Guayas', 3);
INSERT INTO provincias VALUES (31, 'Azuay', 3);
INSERT INTO provincias VALUES (32, 'Manabí', 3);
INSERT INTO provincias VALUES (33, 'Loja', 3);

-- DIRECCIONES
INSERT INTO direcciones VALUES (1, 'Av. Principal', 123, 1, 'Florencio Varela', 1002);
INSERT INTO direcciones VALUES (2, 'Calle Central', 456, 1, 'Tigre', 1020);
INSERT INTO direcciones VALUES (3, 'Av. Norte', 789, 2, 'San Fernando', 4700);
INSERT INTO direcciones VALUES (4, 'Calle Sur', 101, 5, 'Cordoba', 5000);
INSERT INTO direcciones VALUES (5, 'Av. Oeste', 202, 5, 'Mendiolaza', 5107);

-- CONTACTO INFO
INSERT INTO contactoInfo VALUES (1, 'Juan', 'Pérez', 1, 'juan.perez@example.com', 'Gerente');
INSERT INTO contactoInfo VALUES (2, 'María', 'Gómez', 2, 'maria.gomez@example.com', 'Vendedor');
INSERT INTO contactoInfo VALUES (3, 'Carlos', 'López', 3, 'carlos.lopez@example.com', 'Asistente');
INSERT INTO contactoInfo VALUES (4, 'Ana', 'Martínez', 4, 'ana.martinez@example.com', 'Encargado');
INSERT INTO contactoInfo VALUES (5, 'Pedro', 'Rodríguez', 5, 'pedro.rodriguez@example.com', 'Director');

ALTER TABLE proveedores
ALTER COLUMN registro_modificado DATETIME NULL;

-- PROVEEDORES
INSERT INTO proveedores VALUES (1, 'ElectroTech SRL', 2, 'www.electrotech.com', 1, '20-32338823-8', 1, 1, '2023-10-15', NULL);
INSERT INTO proveedores VALUES (2, 'FashionStyle SA', 3, 'www.fashionstyle.com', 2, '28-34332263-2', 2, 2, '2023-12-10', NULL);
INSERT INTO proveedores VALUES (3, 'ConstruMaterials', 5, 'www.construmaterials.com', 5, '23-32658812-9', 4, 3, '2023-01-22', NULL);
INSERT INTO proveedores VALUES (4, 'TecnoGadgets', 2, 'www.tecnogadgets.com', 3, '25-25635684-7', 1, 4, '2023-07-07', NULL);
INSERT INTO proveedores VALUES (5, 'ToyLand', 4, 'www.toyland.com', 4, '25-26854856-5', 3, 5, '2023-06-09', NULL);

-- PRODUCTOS
-- proveedor 1
INSERT INTO productos VALUES (1, 1, 1, 'Nokia 1100', 'Clasico para que tus abuelos puedan entenderlo', 50.99, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (2, 1, 2, 'drean 12kg', 'La mejor opcion para una familia grande', 120.50, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (3, 1, 3, 'Televisor LED 4K', 'Televisor de alta definición con tecnología 4K', 75.30, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (4, 1, 1, 'Smartphone Modelo X1', 'Teléfono inteligente de última generación', 25.75, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (5, 1, 2, 'Lavadora de Carga Frontal', 'Lavadora eficiente con tecnología avanzada', 90.20, '2024-01-10', GETDATE());

-- Proveedor 2
INSERT INTO productos VALUES (6, 2, 7, 'Pollera de Verano', 'Pollera fresca y cómoda para la temporada', 45.99, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (7, 2, 8, 'Remera Estampada', 'Remera con diseño moderno y estampado único', 29.50, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (8, 2, 9, 'Pantalón Casual', 'Pantalón elegante y cómodo para uso diario', 59.30, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (9, 2, 7, 'Pollera Midi', 'Pollera de longitud media para ocasiones especiales', 39.75, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (10, 2, 8, 'Remera de Algodón', 'Remera suave y transpirable para uso cotidiano', 24.99, '2024-01-10', GETDATE());

-- Proveedor 3
INSERT INTO productos VALUES (11, 3, 13, 'Rollo de Alambre Galvanizado', 'Alambre resistente para diversas aplicaciones', 12.50, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (12, 3, 14, 'Bolsa de Cemento Portland', 'Cemento de alta resistencia para construcción', 18.99, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (13, 3, 15, 'Juego de Herramientas para Carpintería', 'Kit completo de herramientas para trabajos de carpintería', 89.75, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (14, 3, 13, 'Alambre de Púa', 'Alambre de púa para cercas y seguridad', 15.30, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (15, 3, 14, 'Bolsa de Cemento Rápido', 'Cemento de fraguado rápido para reparaciones', 24.99, '2024-01-10', GETDATE());

-- Proveedor 4
INSERT INTO productos VALUES (16, 4, 4, 'Heladera Smart Inverter', 'Heladera con tecnología inteligente y ahorro energético', 899.99, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (17, 4, 5, 'Notebook Ultrabook Pro', 'Notebook de alto rendimiento para profesionales', 1399.50, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (18, 4, 6, 'Monitor Curvo UltraWide', 'Monitor panorámico para experiencia visual inmersiva', 399.75, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (19, 4, 4, 'Heladera Side-by-Side', 'Heladera de gran capacidad con diseño elegante', 1199.75, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (20, 4, 5, 'Notebook Gaming Pro', 'Notebook diseñada para juegos con potente rendimiento', 1799.99, '2024-01-10', GETDATE());

-- Proveedor 5
INSERT INTO productos VALUES (21, 5, 10, 'VideoJuego Aventura Épica', 'Videojuego emocionante con gráficos de última generación', 49.99, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (22, 5, 11, 'Muñeco Articulado Superhéroe', 'Muñeco articulado con diseño de superhéroe', 15.50, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (23, 5, 12, 'Disfraz de Princesa Encantada', 'Disfraz de princesa para fiestas y eventos especiales', 29.75, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (24, 5, 10, 'VideoJuego de Estrategia en Tiempo Real', 'Videojuego de estrategia con modo multijugador', 39.30, '2024-01-10', GETDATE());
INSERT INTO productos VALUES (25, 5, 11, 'Muñeco de Peluche Animalito', 'Muñeco de peluche suave y adorable', 12.99, '2024-01-10', GETDATE());

-- ORDEN

INSERT INTO ordenes ("orde_id", "fecha_emision", "fecha_entrega", "descripcion", "id_proveedor", "total", "cancelada?", "fecha_modificado") VALUES (1, '2024-01-10', '2024-02-01', 'Orden de prueba 1', 1, 0, 0, GETDATE());
INSERT INTO ordenes ("orde_id", "fecha_emision", "fecha_entrega", "descripcion", "id_proveedor", "total", "cancelada?", "fecha_modificado") VALUES (2, '2024-01-11', '2024-02-02', 'Orden de prueba 2', 2, 0, 0, GETDATE());
INSERT INTO ordenes ("orde_id", "fecha_emision", "fecha_entrega", "descripcion", "id_proveedor", "total", "cancelada?", "fecha_modificado") VALUES (3, '2024-01-12', '2024-02-03', 'Orden de prueba 3', 3, 0, 0, GETDATE());
INSERT INTO ordenes ("orde_id", "fecha_emision", "fecha_entrega", "descripcion", "id_proveedor", "total", "cancelada?", "fecha_modificado") VALUES (4, '2024-01-13', '2024-02-04', 'Orden de prueba 4', 4, 0, 0, GETDATE());
INSERT INTO ordenes ("orde_id", "fecha_emision", "fecha_entrega", "descripcion", "id_proveedor", "total", "cancelada?", "fecha_modificado") VALUES (5, '2024-01-14', '2024-02-05', 'Orden de prueba 5', 5, 0, 0, GETDATE());

-- PREORDEN

INSERT INTO preOrden VALUES (1, 1, 10, 49.99, 1);
INSERT INTO preOrden VALUES (2, 2, 5, 29.50, 1);
INSERT INTO preOrden VALUES (3, 7, 2, 29.50, 2);
INSERT INTO preOrden VALUES (4, 8, 3, 59.30, 2);
INSERT INTO preOrden VALUES (5, 11, 1, 12.50, 3);
INSERT INTO preOrden VALUES (6, 12, 2, 18.99, 3);
INSERT INTO preOrden VALUES (7, 16, 1, 899.99, 4);
INSERT INTO preOrden VALUES (8, 17, 1, 1399.50, 4);
INSERT INTO preOrden VALUES (9, 21, 2, 49.99, 5);
INSERT INTO preOrden VALUES (10, 22, 3, 15.50, 5);

-- Crear 5 registros en la tabla "ordenes" con datos de la tabla "preOrden"
INSERT INTO ordenes ("orde_id", "fecha_emision", "fecha_entrega", "descripcion", "id_proveedor", "total", "cancelada?", "fecha_modificado") 
SELECT 
    o."orde_id",
    o."fecha_emision",
    o."fecha_entrega",
    o."descripcion",
    o."id_proveedor",
    o."total",
    o."cancelada?",
    GETDATE() AS "fecha_modificado"
FROM (
    VALUES 
        (1, '2024-01-10', '2024-02-01', 'Orden de prueba 1', 1, 0, 0, GETDATE()),
        (2, '2024-01-11', '2024-02-02', 'Orden de prueba 2', 2, 0, 0, GETDATE()),
        (3, '2024-01-12', '2024-02-03', 'Orden de prueba 3', 3, 0, 0, GETDATE()),
        (4, '2024-01-13', '2024-02-04', 'Orden de prueba 4', 4, 0, 0, GETDATE()),
        (5, '2024-01-14', '2024-02-05', 'Orden de prueba 5', 5, 0, 0, GETDATE())
) AS o("orde_id", "fecha_emision", "fecha_entrega", "descripcion", "id_proveedor", "total", "cancelada?", "fecha_modificado");

-- Actualizar el campo "total" en la tabla "ordenes" con la suma de productos de la tabla "preOrden"
UPDATE ordenes
SET "total" = (
    SELECT SUM(po."cantidad" * pr."precio") 
    FROM preOrden po
    JOIN productos pr ON po."id_producto" = pr."prod_id"
    WHERE po."num_orden" = ordenes."orde_id"
    GROUP BY po."num_orden"
)
WHERE "orde_id" BETWEEN 1 AND 5;