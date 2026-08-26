require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function validarUsuario({ nombre, correo, edad }) {
  const errores = [];
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const edadNumero = Number(edad);

  if (!nombre || !nombre.trim()) {
    errores.push('El nombre es obligatorio.');
  }

  if (!correo || !correo.trim()) {
    errores.push('El correo es obligatorio.');
  } else if (!correoRegex.test(correo)) {
    errores.push('Ingresa un correo valido.');
  }

  if (edad !== '' && edad !== undefined && edad !== null) {
    if (!Number.isInteger(edadNumero) || edadNumero < 1 || edadNumero > 120) {
      errores.push('La edad debe ser un numero entero entre 1 y 120.');
    }
  }

  return errores;
}

app.get('/', async (req, res) => {
  try {
    const [usuarios] = await db.query('SELECT id, nombre, correo, edad FROM usuarios ORDER BY id DESC');
    let editUser = null;

    if (req.query.editar) {
      const [resultado] = await db.query(
        'SELECT id, nombre, correo, edad FROM usuarios WHERE id = ?',
        [req.query.editar]
      );

      editUser = resultado[0] || null;
    }

    res.render('index', {
      usuarios,
      mensaje: req.query.mensaje || null,
      error: req.query.error || null,
      editUser
    });
  } catch (error) {
    console.error('Error al listar usuarios:', error);
    res.render('index', {
      usuarios: [],
      mensaje: null,
      error: 'No se pudo conectar con la base de datos. Revisa tu archivo .env y MySQL.',
      editUser: null
    });
  }
});

app.post('/usuarios', async (req, res) => {
  const { nombre, correo, edad } = req.body;
  const errores = validarUsuario({ nombre, correo, edad });

  if (errores.length > 0) {
    return res.redirect(`/?error=${encodeURIComponent(errores.join(' '))}#usuarios`);
  }

  try {
    await db.query(
      'INSERT INTO usuarios (nombre, correo, edad) VALUES (?, ?, ?)',
      [nombre.trim(), correo.trim(), edad ? Number(edad) : null]
    );

    res.redirect('/?mensaje=Usuario registrado correctamente.#usuarios');
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.redirect('/?error=No se pudo registrar el usuario.#usuarios');
  }
});

app.post('/usuarios/:id/actualizar', async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, edad } = req.body;
  const errores = validarUsuario({ nombre, correo, edad });

  if (errores.length > 0) {
    return res.redirect(`/?error=${encodeURIComponent(errores.join(' '))}#usuarios`);
  }

  try {
    const [resultado] = await db.query(
      'UPDATE usuarios SET nombre = ?, correo = ?, edad = ? WHERE id = ?',
      [nombre.trim(), correo.trim(), edad ? Number(edad) : null, id]
    );

    if (resultado.affectedRows === 0) {
      return res.redirect('/?error=El usuario no existe.#usuarios');
    }

    res.redirect('/?mensaje=Usuario actualizado correctamente.#usuarios');
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.redirect('/?error=No se pudo actualizar el usuario.#usuarios');
  }
});

app.post('/usuarios/:id/eliminar', async (req, res) => {
  const { id } = req.params;

  try {
    const [resultado] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);

    if (resultado.affectedRows === 0) {
      return res.redirect('/?error=El usuario no existe.#usuarios');
    }

    res.redirect('/?mensaje=Usuario eliminado correctamente.#usuarios');
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.redirect('/?error=No se pudo eliminar el usuario.#usuarios');
  }
});

app.use((req, res) => {
  res.status(404).redirect('/?error=Ruta no encontrada.');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
