create database gestion;

use gestion;

CREATE TABLE "paises"(
    "pais_id" INT NOT NULL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL
);

CREATE TABLE "rubros"(
    "rubr_id" INT NOT NULL PRIMARY KEY,
    "rubro" VARCHAR(255) NOT NULL
);

CREATE TABLE "categorias"(
    "cate_id" INT NOT NULL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL,
	"id_rubro" INT NOT NULL,
	FOREIGN KEY("id_rubro") REFERENCES "rubros"("rubr_id")
);

CREATE TABLE "telefonos"(
    "tele_id" INT NOT NULL PRIMARY KEY,
    "telefono" BIGINT NOT NULL,
    "celular" BIGINT NOT NULL
);

CREATE TABLE "condicionesIVA"(
    "cond_id" INT NOT NULL PRIMARY KEY,
    "condicion" VARCHAR(255) NOT NULL
);
---------------------------------------------------------
CREATE TABLE "provincias"(
    "provin_id" INT NOT NULL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL,
    "id_pais" INT NOT NULL,
    FOREIGN KEY("id_pais") REFERENCES "paises"("pais_id")
);
-----------------------------------------------------------
CREATE TABLE "direcciones"(
    "dire_id" INT NOT NULL PRIMARY KEY,
    "calle" VARCHAR(255) NOT NULL,
    "num_calle" BIGINT NOT NULL,
    "id_provincia" INT NOT NULL,
    "localidad" VARCHAR(255) NOT NULL,
    "cod_postal" BIGINT NOT NULL,
    FOREIGN KEY("id_provincia") REFERENCES "provincias"("provin_id")
);
----------------------------------------------------------------------
CREATE TABLE "contactoInfo"(
    "cont_id" INT NOT NULL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL,
    "apellido" VARCHAR(255) NOT NULL,
    "id_telefono" INT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(255) NOT NULL,
    FOREIGN KEY("id_telefono") REFERENCES "telefonos"("tele_id")
);
---------------------------------------------------------
CREATE TABLE "proveedores"(
    "provee_id" INT NOT NULL PRIMARY KEY,
    "razon_social" VARCHAR(255) NOT NULL,
    "id_rubro" INT NOT NULL,
    "sitio_web" VARCHAR(255) NOT NULL,
    "id_direcciones" INT NOT NULL,
    "cuit" VARCHAR(255) NOT NULL,
    "id_condicionIVA" INT NOT NULL,
    "id_contactoInfo" INT NOT NULL,
    "registro_creado" DATE NOT NULL,
    "registro_modificado" DATETIME NOT NULL,
    FOREIGN KEY("id_rubro") REFERENCES "rubros"("rubr_id"),
    FOREIGN KEY("id_direcciones") REFERENCES "direcciones"("dire_id"),
    FOREIGN KEY("id_condicionIVA") REFERENCES "condicionesIVA"("cond_id"),
    FOREIGN KEY("id_contactoInfo") REFERENCES "contactoInfo"("cont_id")
);
---------------------------------------------------------------------------
CREATE TABLE "productos"(
    "prod_id" INT NOT NULL PRIMARY KEY,
    "id_proveedor" INT NOT NULL,
    "id_categoria" INT NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "precio" FLOAT NOT NULL,
    "registro_creado" DATE NOT NULL,
    "registro_modificado" DATETIME NOT NULL,
    FOREIGN KEY("id_proveedor") REFERENCES "proveedores"("provee_id"),
    FOREIGN KEY("id_categoria") REFERENCES "categorias"("cate_id")
);
CREATE TABLE "ordenes"(
    "orde_id" INT NOT NULL PRIMARY KEY,
    "fecha_emision" DATETIME NOT NULL,
    "fecha_entrega" DATE NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "id_proveedor" INT NOT NULL,
    "total" BIGINT NOT NULL,
    "cancelada?" BIT NOT NULL,
    "fecha_modificado" DATETIME NOT NULL,
   
    FOREIGN KEY("id_proveedor") REFERENCES "proveedores"("provee_id")
);


---------------------------------------------------------------------------
CREATE TABLE "preOrden"(
    "pre_id" INT NOT NULL PRIMARY KEY,
    "id_producto" INT NOT NULL,
    "cantidad" INT NOT NULL,
    "precio" FLOAT NOT NULL,
    "num_orden" INT NOT NULL,
	FOREIGN KEY ("num_orden") REFERENCES "ordenes" ("orde_id"),
    FOREIGN KEY("id_producto") REFERENCES "productos"("prod_id")
);

