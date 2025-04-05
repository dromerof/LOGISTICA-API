# 🚛 LOGISTICA-API

## Descripción

Esta API desarrollada en NestJS, permite optimizar la asignación de pedidos a camiones registrados en una base de datos PostgreSQL. Los camiones tienen una capacidad máxima de carga en kilogramos y la API se encarga de distribuir los pedidos.

## Tecnologías utilizadas

NestJS.

TypeORM.

PostgreSQL.

Docker.

## Instalación

### 1. Clonar el repositorio
```
git clone  https://github.com/dromerof/LOGISTICA-API.git
```
### 2. Instaciones

Dentro del proyecto ejecutar: 
```
yarn install
```
### 3. Configurar el archivo .env
Clonar el archivo ```.env.template``` y renombrarlo a ```.env```

Luego, actualiza el archivo .env con los detalles de tu base de datos, por ejemplo:
```
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_datos
DB_HOST=5432
DB_PORT=tu_port
DB_USERNAME=tu_usuario

PORT=3000

```

### 4. Levantar la base de datos: 
```
docker-compose up -d
```
### 5. Ejecutar la aplicación:
```
yarn start: dev
```

### 6. Ejecutar SEED para llenar la base de datos.
```
localhost:3000/api/seed
```

## Endpoints

Listado de endpoints disponibles de la API:

![image](https://github.com/user-attachments/assets/82bd5d88-b570-41df-a50a-cf3422ca5040)

Una vez este online el server local puede encontrar la documentación http://localhost:3000/api
