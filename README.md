# Laboratorio 02 - Desarrollo de Soluciones en la Nube

**Estudiante:** Andy Luis Campos Escandón  
**Carrera:** Diseño y Desarrollo de Software  
**Institución:** Tecsup  
**Ciclo:** 5.º ciclo  
**Curso:** Desarrollo de Soluciones en la Nube  

## Descripción

En este laboratorio desarrollé una aplicación web que muestra mi perfil personal y también cuenta con un CRUD de usuarios conectado a una base de datos MySQL.

Para el desarrollo utilicé Node.js, Express y EJS. La parte visual de la página fue realizada con HTML, CSS y JavaScript.

También trabajé con una base de datos MySQL en la nube utilizando Aiven y finalmente desplegué la aplicación en Render. Para mantener segura la información de conexión utilicé variables de entorno, evitando colocar contraseñas directamente en el código.

## Aplicación desplegada

La aplicación se encuentra desplegada en Render y se puede acceder desde el siguiente enlace:

https://dsl-lab02.onrender.com

## Objetivos

Con este laboratorio busqué:

- Crear una aplicación web con un perfil personal.
- Implementar un CRUD de usuarios.
- Conectar una aplicación Node.js con MySQL.
- Utilizar una base de datos MySQL alojada en la nube.
- Manejar las credenciales mediante variables de entorno.
- Subir el proyecto a GitHub.
- Desplegar la aplicación utilizando Render.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- EJS
- MySQL
- MySQL Workbench
- Aiven
- Git
- GitHub
- Render

## Estructura del proyecto

```text
perfil-crud-render/

├── public/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── WhatsApp Image 2026-08-26 at 9.14.16 AM.jpeg
│   └── js/
│       └── main.js
├── views/
│   └── index.ejs
├── .env.example
├── .gitignore
├── app.js
├── db.js
├── package-lock.json
├── package.json
└── README.md
```

La carpeta `node_modules/` y el archivo `.env` no se suben al repositorio, ya que contienen dependencias locales e información de configuración que no debe publicarse.

## Base de datos

Para el CRUD se trabaja con una tabla llamada:

```text
usuarios
```

Los campos utilizados son:

- `id`
- `nombre`
- `correo`
- `edad`

La estructura utilizada para la tabla es la siguiente:

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    edad INT
);
```

Esta tabla permite almacenar los usuarios registrados desde la aplicación y realizar las operaciones del CRUD.

## Base de datos en Aiven

Para tener la base de datos disponible desde Internet utilicé Aiven, donde configuré un servicio de MySQL.

Dentro de Aiven utilicé el apartado **Overview**, donde pude revisar la información necesaria para conectar la aplicación con la base de datos.

Entre los datos mostrados se encuentran:

- Host
- Port
- User
- Password
- Database name
- SSL mode


## Configuración local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Andy-CE17/Dsl-Lab02.git
```

### 2. Entrar al proyecto

```bash
cd Dsl-Lab02
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Para trabajar de manera local se debe crear un archivo `.env` tomando como referencia el archivo `.env.example`.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=bd_usuarios
PORT=3000
```

El archivo `.env` no se sube a GitHub porque puede contener información privada de la conexión.

### 5. Ejecutar el proyecto

Para iniciar la aplicación se utiliza:

```bash
npm start
```

Luego se puede ingresar desde el navegador utilizando:

```text
http://localhost:3000
```

## Funcionalidades

### Perfil personal

La página principal muestra información relacionada con mi perfil, como:

- Presentación personal.
- Información sobre mí.
- Información académica.
- Tecnologías utilizadas.
- Fotografía de perfil.

### CRUD de usuarios

El proyecto permite realizar las cuatro operaciones principales de un CRUD:

**CREATE:** registrar nuevos usuarios.

**READ:** mostrar los usuarios registrados.

**UPDATE:** modificar los datos de un usuario.

**DELETE:** eliminar un usuario.

Los datos ingresados desde la aplicación son manejados mediante Node.js y almacenados en MySQL.

## Procedimiento realizado

Para comenzar el laboratorio preparé el proyecto utilizando Node.js, Express y EJS. Luego organicé las carpetas necesarias para las vistas, estilos, imágenes y archivos JavaScript.

Después desarrollé la página de mi perfil personal, agregando mi información académica, una sección sobre mí, las tecnologías utilizadas y mi fotografía.

Una vez terminada esa parte, trabajé en el CRUD de usuarios. Implementé las opciones para registrar, visualizar, editar y eliminar usuarios.

Para guardar esta información trabajé con MySQL. Primero realicé las pruebas de conexión y luego utilicé Aiven para tener la base de datos disponible en la nube.

Desde el apartado **Overview de Aiven** revisé los datos de conexión del servicio MySQL, como el host, puerto, usuario, contraseña, nombre de la base de datos y configuración SSL.

La conexión desde Node.js se configuró utilizando variables de entorno. Esto me permitió evitar colocar las credenciales directamente dentro del código.

También preparé el proyecto con Git y lo subí a GitHub para tener el código almacenado en un repositorio remoto.

Después conecté el repositorio de GitHub con Render y configuré las variables de entorno utilizando los datos de conexión proporcionados por Aiven.

Finalmente realicé el despliegue del proyecto en Render y obtuve una dirección pública para poder ingresar a la aplicación desde Internet.

## Despliegue en Render

Para publicar el proyecto utilicé Render. El repositorio de GitHub fue conectado directamente con el servicio web creado en la plataforma.

Para instalar las dependencias se utilizó:

```bash
npm install
```

Y para iniciar la aplicación:

```bash
npm start
```

En Render también agregué las variables de entorno necesarias para la conexión con MySQL:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```


Después de configurar el servicio y realizar el despliegue, la aplicación quedó disponible en:

https://dsl-lab02.onrender.com

## Evidencias del laboratorio

Durante el desarrollo realicé pruebas tanto de manera local como en la nube.

Entre las principales partes trabajadas se encuentran el perfil personal, el CRUD de usuarios, la conexión con MySQL, la configuración de Aiven, el uso de **Overview** para revisar los datos de conexión, la publicación del proyecto en GitHub y el despliegue final en Render.

## Seguridad

Para evitar publicar información sensible, el proyecto no incluye dentro del repositorio:

- `.env`
- Contraseñas
- Credenciales reales de MySQL
- `node_modules/`

El archivo `.env.example` sirve solamente como referencia para conocer las variables necesarias para ejecutar el proyecto.

## Repositorio

El código fuente del laboratorio se encuentra almacenado en GitHub:

https://github.com/Andy-CE17/Dsl-Lab02

## Resultado final

Como resultado del laboratorio pude desarrollar una aplicación web con mi perfil personal y un CRUD de usuarios, además de trabajar con una base de datos MySQL en la nube.

También pude practicar el uso de GitHub para almacenar el proyecto, Aiven para trabajar con MySQL en la nube y Render para realizar el despliegue de la aplicación.

**Aplicación:**  
https://dsl-lab02.onrender.com