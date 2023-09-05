CREATE DATABASE forestaldb

create table organization
(
id serial primary key,
nombre VARCHAR (255),
descripcion VARCHAR (255),	
direccion VARCHAR(255),
Contacto VARCHAR(255), 
correo VARCHAR(255)
);