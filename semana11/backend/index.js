const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Importar modelos
const modeloUsuario = require("./models/users");
const sendEmail = require("./lib/sendEmail");

const app = express();

app.use(cors());

// Permitir que Express entienda el cuerpo de las solicitudes
app.use(express.json());

mongoose.connect(
  "mongodb+srv://lcascante:cXe8bvl9pDpvWyeo@cluster0.isjhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const port = 3000;

// Respresentational State Transfer
// GET: obtener información
// POST: enviar información
// PUT: actualizar información
// DELETE: eliminar información

app.get("/usuarios", async function (req, res) {
  console.log("Atentiendo solicitud GET a ruta /usuarios");
  try {
    const users = await modeloUsuario.find({});
    console.log("Usuarios obtenidos", users);
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al obtener los usuarios");
  }
});

app.get("/usuarios/:id", async function (req, res) {
  const id = req.params.id;
  console.log("Atentiendo solicitud GET a ruta /usuarios/:id, con id:", id);

  try {
    const usuario = await modeloUsuario.findById(id);
    // const usuarioPorCedula = modeloUsuario.find({
    //   cedula: id,
    //   correo: "lcascante@ucenfotec.ac.cr"
    // });
    res.send(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al obtener el usuario");
  }
});

app.delete("/usuarios/:id", async function (req, res) {
  const id = req.params.id;
  console.log("Atentiendo solicitud DELETE a ruta /usuarios/:id, con id:", id);

  try {
    const usuario = await modeloUsuario.findByIdAndDelete(id);

    res.status(204).send(usuario.id);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al obtener el usuario");
  }
});

app.post("/usuarios", async function (req, res) {
  console.log("Atentiendo solicitud POST a ruta /usuarios", req.body);

  // Validar que se envió el cuerpo de la solicitud
  if (
    !req.body.nombre ||
    !req.body.apellido ||
    !req.body.cedula ||
    !req.body.email
  ) {
    console.error("No se envió el cuerpo de la solicitud");
    res.status(400).send("Falta el cuerpo de la solicitud");
  }

  const nuevaPassword = Math.random().toString(36).slice(-8);

  try {
    // Crear un nuevo usuario
    const nuevoUsuario = new modeloUsuario({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cedula: req.body.cedula,
      email: req.body.email,
      password: nuevaPassword,
    });

    // Guardar el usuario en la base de datos
    await nuevoUsuario.save();

    // Enviar correo de bienvenida
    await sendEmail({
      subject: "Bienvenido a la plataforma",
      correoUsuario: req.body.email,
      html: `<div>
        <h1>Bienvenido a la plataforma</h1>
        <p>Su contraseña es: ${nuevoUsuario.password}</p>
      </div>`,
    });

    // Responder con el ID del usuario creado
    res.status(201).send(nuevoUsuario.id);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al crear el usuario");
  }
});

app.patch("/usuarios", async function (req, res) {
  console.log("Atentiendo solicitud PATCH a ruta /usuarios", req.body);

  // Validar que se envió el cuerpo de la solicitud
  if (!req.body) {
    console.error("No se envió el cuerpo de la solicitud");
    res.status(400).send("Falta el cuerpo de la solicitud");
  }

  try {
    // Paso 1: Buscar el usuario por ID en la base (datos viejos)
    const usuario = await modeloUsuario.findById(req.body.id);
    // Paso 2: Actualizar el usuario con los datos nuevos
    const usuarioActualizado = await modeloUsuario.findByIdAndUpdate(
      req.body.id,
      {
        nombre: req.body.nombre ?? usuario.nombre,
        apellido: req.body.apellido ?? usuario.apellido,
        cedula: req.body.cedula ?? usuario.cedula,
        email: req.body.email ?? usuario.email,
      }
    );

    // const usuarioActualizado2 = await modeloUsuario.findOneAndUpdate(
    //   {
    //     cedula: req.body.cedula,
    //   },
    //   {
    //     nombre: req.body.nombre ?? usuario.nombre,
    //     apellido: req.body.apellido ?? usuario.apellido,
    //     cedula: req.body.cedula ?? usuario.cedula,
    //     email: req.body.email ?? usuario.email,
    //   }
    // );

    await sendEmail({
      subject: "Actualización de datos",
      correoUsuario: req.body.email,
      html: `<div>
        <h1>Sus datos han sido actualizados</h1>
        <p>Nombre: ${req.body.nombre ?? usuario.nombre}</p>
        <p>Apellido: ${req.body.apellido ?? usuario.apellido}</p>
        <p>Cédula: ${req.body.cedula ?? usuario.cedula}</p>
        <p>Email: ${req.body.email ?? usuario.email}</p>
      </div>`,
    });

    // Responder con el ID del usuario actualizado
    res.status(200).send(usuarioActualizado.id);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al actualizar el usuario");
  }
});

app.listen(port, function () {
  console.log("El servidor está escuchando en el puerto", port);
});
