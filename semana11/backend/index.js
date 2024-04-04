const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = 3000;

// Respresentational State Transfer
// GET: obtener información
// POST: enviar información
// PUT: actualizar información
// DELETE: eliminar información

app.get("/pizza", function (req, res) {
  res.send({
    masa: "delgada",
    queso: "mozzarella",
    ingredientes: ["pepperoni", "piña", "champiñones"],
  });
});

app.post("/pizza", function (req, res) {
  res.send("Aquí está su pizza");
});

app.post("/login", function (req, res) {
  red.send("Aquí está su token");
});

app.listen(port, function () {
  console.log("El servidor está escuchando en el puerto", port);
});
