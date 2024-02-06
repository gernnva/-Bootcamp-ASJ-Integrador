-- INSERTANTO CONDICION IVA

INSERT INTO CONDICION_IVA (Condicion) VALUES ('Responsable Inscripto');
INSERT INTO CONDICION_IVA (Condicion) VALUES ('Responsable NO inscripto');
INSERT INTO CONDICION_IVA (Condicion) VALUES ('Consumidor final');
INSERT INTO CONDICION_IVA (Condicion) VALUES ('Monotributista');
INSERT INTO CONDICION_IVA (Condicion) VALUES ('Excento');

-- INSERTANDO PAISES

INSERT INTO PAIS VALUES (1, 'Argentina');
INSERT INTO PAIS VALUES (2, 'Brasil');
INSERT INTO PAIS VALUES (3, 'Ecuador');
INSERT INTO PAIS VALUES (4, 'Bolivia');
INSERT INTO PAIS VALUES (5, 'Paraguay');
INSERT INTO PAIS VALUES (6, 'Uruguay');

-- INSERTANDO PROVINCIAS

-- ARGENTINA
INSERT INTO Provincia (nombre_provincia, country_id_pais)  VALUES ('Buenos Aires', 1);
INSERT INTO provincia (nombre_provincia, country_id_pais)   VALUES ('Catamarca', 1);
INSERT INTO provincia (nombre_provincia, country_id_pais)   VALUES ('Chaco', 1);
INSERT INTO provincia (nombre_provincia, country_id_pais)   VALUES ('Chubut', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Córdoba', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Corrientes', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Entre Ríos', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Formosa', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Jujuy', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('La Pampa', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('La Rioja', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Mendoza', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Misiones', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Neuquén', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Río Negro', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Salta', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('San Juan', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('San Luis', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Santa Cruz', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Santa Fe', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Santiago del Estero', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Tierra del Fuego', 1);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Tucumán', 1);

-- BRASIL
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('São Paulo', 2);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Rio de Janeiro', 2);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Minas Gerais', 2);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Bahia', 2);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Amazonas', 2);

-- ECUADOR
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Pichincha', 3);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Guayas', 3);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Azuay', 3);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Manabí', 3);
INSERT INTO Provincia (nombre_provincia, country_id_pais) VALUES ('Loja', 3);

-- INSERTANDO RUBROS
INSERT INTO RUBRO (nombre_rubro, reg_creado, reg_modificado) VALUES ('Retail', NOW(), NOW());
INSERT INTO RUBRO (nombre_rubro, reg_creado, reg_modificado) VALUES ('Tecnologia', NOW(), NOW());
INSERT INTO RUBRO (nombre_rubro, reg_creado, reg_modificado) VALUES ('Moda', NOW(), NOW());
INSERT INTO RUBRO (nombre_rubro, reg_creado, reg_modificado) VALUES ('Juguetes', NOW(), NOW());
INSERT INTO RUBRO (nombre_rubro, reg_creado, reg_modificado) VALUES ('Construccion', NOW(), NOW());


-- INSERTANDO DIRECCIONES

INSERT INTO DIRECCION (CALLE, CIUDAD, COD_POSTAL, NUM_CALLE, REG_CREADO, REG_MODIFICADO, PROVINCIA_ID_PROVINCIA)
VALUES ('Avenida Corrientes', 'Buenos Aires', '1043', 123, '2024-02-02 14:00:00', '2024-02-02 14:00:00', 1);

INSERT INTO DIRECCION (CALLE, CIUDAD, COD_POSTAL, NUM_CALLE, REG_CREADO, REG_MODIFICADO, PROVINCIA_ID_PROVINCIA)
VALUES ('Calle Salta', 'Córdoba', '5000', 456, '2024-02-02 14:00:00', '2024-02-02 14:00:00', 5);



-- INSERTANDO CONTACTOINFO

INSERT INTO CONTACTO_INFO (APELLIDO, EMAIL, NOMBRE, REG_CREADO, REG_MODIFICADO, ROL, TEL_CELULAR, TEL_FIJO)
VALUES ('Pérez', 'perez@example.com', 'Juan', '2024-02-02 14:30:00', '2024-02-02 14:30:00', 'Gerente de Ventas', '1152635263', '1145236523');

INSERT INTO CONTACTO_INFO (APELLIDO, EMAIL, NOMBRE, REG_CREADO, REG_MODIFICADO, ROL, TEL_CELULAR, TEL_FIJO)
VALUES ('Gómez', 'gomez@example.com', 'María', '2024-02-02 14:35:00', '2024-02-02 14:35:00', 'Asistente Administrativo', '3516856118', '3543433870');


-- INSERTANDO PROVEEDORES

INSERT INTO PROVEEDOR (COD_PROVEEDOR, CUIT, ELIMINADO, EMAIL, LOGO, PAGINA_WEB, RAZON_SOCIAL, REG_CREADO, REG_MODIFICADO, ID_CONDICION_IVA, ID_CONTACTO_INFO, ID_DIRECCION, RUBRO_ID_RUBRO)
VALUES ('PROV001', '30578901234', false, 'proveedor1@example.com', 'https://ams3.digitaloceanspaces.com/graffica/2023/02/cocacola-logo.jpeg', 'www.proveedor1.com', 'Proveedor Uno S.A.', '2024-02-02 14:40:00', '2024-02-02 14:40:00', 1, 1, 1, 1);

INSERT INTO PROVEEDOR (COD_PROVEEDOR, CUIT, ELIMINADO, EMAIL, LOGO, PAGINA_WEB, RAZON_SOCIAL, REG_CREADO, REG_MODIFICADO, ID_CONDICION_IVA, ID_CONTACTO_INFO, ID_DIRECCION, RUBRO_ID_RUBRO)
VALUES ('PROV002', '30765432109', false, 'proveedor2@example.com', 'https://media.c5n.com/p/71564fc2250e47e03324509e2621a620/adjuntos/326/imagenes/000/178/0000178160/790x0/smart/cetrogar-logo-ok.png', 'www.proveedor2.com', 'Proveedor Dos S.A.', '2024-02-02 14:45:00', '2024-02-02 14:45:00', 2, 2, 2, 3);








