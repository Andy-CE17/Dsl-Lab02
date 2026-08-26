# Laboratorio 02 - Desarrollo de Soluciones en la Nube

**Estudiante:** Andy Luis Campos Escandón  
**Carrera:** Diseño y Desarrollo de Software  
**Institución:** Tecsup  
**Ciclo:** 5.º ciclo  
**Curso:** Desarrollo de Soluciones en la Nube

## Descripción

Este laboratorio consiste en desarrollar y preparar para despliegue una aplicación web con un perfil personal y un CRUD de usuarios conectado a una base de datos MySQL. El proyecto utiliza Node.js, Express y EJS para renderizar la interfaz, además de HTML, CSS y JavaScript para la experiencia visual e interacción del usuario.

## Objetivos

El proyecto permite:

- Mostrar un perfil personal mediante una aplicación web.
- Implementar un CRUD de usuarios.
- Conectar Node.js con MySQL mediante variables de entorno.
- Preparar la aplicación para su despliegue en Render.
- Documentar el procedimiento realizado.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- EJS
- MySQL
- MySQL Workbench
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

> Nota: la carpeta `node_modules/`, el archivo `.env` y la carpeta local `.github/modernize/` no deben subirse al repositorio.

## Base de datos

Base de datos utilizada:

```text
bd_usuarios
```

Tabla utilizada:

```text
usuarios
```

Campos:

- `id`
- `nombre`
- `correo`
- `edad`

SQL para crear la base de datos y la tabla:

```sql
CREATE DATABASE bd_usuarios;

USE bd_usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    edad INT
);
```

No ejecutar comandos destructivos sobre una base de datos existente sin realizar una copia de seguridad previa.

## Configuración

### 1. Clonar repositorio

```bash
git clone https://github.com/Andy-CE17/Dsl-Lab02.git
```

### 2. Entrar al proyecto

```bash
cd Dsl-Lab02
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar variables de entorno

Crear un archivo `.env` tomando como base `.env.example`.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=bd_usuarios
PORT=3000
```

La contraseña real de MySQL no debe subirse a GitHub. El archivo `.env` está incluido en `.gitignore`.

### 5. Ejecutar

```bash
npm start
```

Localmente se puede acceder mediante:

```text
http://localhost:3000
```

Si el puerto `3000` está ocupado, se puede usar otro puerto configurando `PORT` en el archivo `.env`.

## Funcionalidades

### Perfil personal

- Presentación del estudiante.
- Sección Sobre mí.
- Tecnologías utilizadas.
- Información académica.
- Fotografía de perfil.

### CRUD de usuarios

**CREATE:** registrar usuarios.  
**READ:** listar usuarios.  
**UPDATE:** editar usuarios.  
**DELETE:** eliminar usuarios.

# Procedimiento realizado

1. **Creación/configuración de la cuenta en Render:** Pendiente. No existe evidencia en el proyecto.
2. **Creación del proyecto web:** Completado. El proyecto contiene una aplicación Node.js con Express y EJS.
3. **Desarrollo del perfil personal:** Completado. La vista principal contiene datos personales, académicos, fotografía y tecnologías.
4. **Creación de la base de datos `bd_usuarios`:** Pendiente de evidencia. El proyecto documenta la base requerida, pero no incluye capturas ni scripts de verificación de creación.
5. **Creación de la tabla `usuarios`:** Pendiente de evidencia. La aplicación espera una tabla `usuarios` con `id`, `nombre`, `correo` y `edad`.
6. **Configuración de la conexión entre Node.js y MySQL:** Completado. La conexión se realiza en `db.js` usando variables de entorno.
7. **Desarrollo del CRUD:** Completado. Existen rutas para registrar, listar, editar y eliminar usuarios.
8. **Pruebas locales:** Parcialmente completado. La aplicación responde localmente y la plantilla EJS renderiza correctamente. La prueba completa del CRUD depende de una base MySQL local configurada.
9. **Creación del repositorio Git:** Pendiente hasta confirmar la inicialización local y sincronización con GitHub.
10. **Publicación del código en GitHub:** Pendiente hasta realizar el `push`.
11. **Preparación del proyecto para Render:** Parcialmente completado. El proyecto tiene `npm start`, variables de entorno y estructura compatible.
12. **Despliegue en Render:** Pendiente. No se debe considerar completado hasta verificar la URL desplegada.

# Evidencias

Las siguientes capturas deben agregarse posteriormente como evidencia del laboratorio:

- Cuenta/Dashboard de Render: Pendiente.
- Creación de la base de datos: Pendiente.
- Tabla usuarios: Pendiente.
- Registros de prueba en MySQL: Pendiente.
- Perfil funcionando: Pendiente.
- CRUD funcionando: Pendiente.
- Registro de usuario: Pendiente.
- Edición de usuario: Pendiente.
- Eliminación de usuario: Pendiente.
- Repositorio GitHub: Pendiente.
- Despliegue en Render: Pendiente.
- Aplicación desplegada: Pendiente.

Actualmente no existe una carpeta de evidencias con capturas dentro del proyecto. Cuando se agreguen imágenes, se recomienda crear una carpeta como `docs/evidencias/` y referenciarlas desde este README.

## Despliegue en Render

Pasos necesarios para desplegar:

1. Crear una cuenta o iniciar sesión en Render.
2. Crear un nuevo Web Service.
3. Conectar el repositorio de GitHub.
4. Configurar el comando de instalación:

```bash
npm install
```

5. Configurar el comando de inicio:

```bash
npm start
```

6. Agregar las variables de entorno necesarias en Render:

```env
DB_HOST=
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_NAME=bd_usuarios
PORT=3000
```

7. Desplegar y verificar la URL pública.

### Estado del despliegue

- Preparación del proyecto para Render: Parcialmente completado.
- Despliegue en Render: Pendiente.
- Verificación de la aplicación desplegada: Pendiente.
- Verificación del CRUD desplegado: Pendiente.

### Limitación importante

Una base MySQL local creada en MySQL Workbench no será accesible desde Render usando `localhost`. Para que el CRUD funcione en Render, se debe usar una base de datos MySQL accesible desde la nube o un servicio externo con credenciales configuradas en las variables de entorno de Render.

## Seguridad

No subir al repositorio:

- `.env`
- Contraseñas
- Credenciales de MySQL
- `node_modules/`

Sí se incluye `.env.example` con valores de ejemplo y sin contraseñas reales.
