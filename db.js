require('dotenv').config();

const mysql = require('mysql2/promise');

// Pool de conexiones a MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Verifica y crea la tabla usuarios si todavía no existe
async function crearTablaUsuarios() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(100) NOT NULL,
                correo VARCHAR(100) NOT NULL,
                edad INT
            )
        `);

        console.log('Tabla usuarios lista');
    } catch (error) {
        console.error('Error al crear la tabla usuarios:', error);
    }
}

crearTablaUsuarios();

module.exports = pool;