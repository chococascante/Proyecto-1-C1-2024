const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Importar modelos
const modeloUsuario = require("./models/users");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://lcascante:cXe8bvl9pDpvWyeo@cluster0.isjhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const port = 3000;

// Respresentational State Transfer
// GET: obtener información
// POST: enviar información
// PUT: actualizar información
// DELETE: eliminar información

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    edad: 25,
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Lopez",
    edad: 40,
  },
];

app.get("/usuarios", async function (req, res) {
  try {
    const users = await modeloUsuario.find({});
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener los usuarios");
  }
});

app.get("/usuarios/:id", function (req, res) {
  const id = req.params.id;

  const usuario = usuarios.find(function (usuario) {
    return usuario.id == id;
  });

  res.send(usuario);
});

app.listen(port, function () {
  console.log("El servidor está escuchando en el puerto", port);
});
