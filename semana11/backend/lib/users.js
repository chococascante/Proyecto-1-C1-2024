async function usersPOST(req, res) {
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
    return;
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
    // await sendEmail({
    //   subject: "Bienvenido a la plataforma",
    //   correoUsuario: req.body.email,
    //   html: `<div>
    //     <h1>Bienvenido a la plataforma</h1>
    //     <p>Su contraseña es: ${nuevoUsuario.password}</p>
    //   </div>`,
    // });

    // Responder con el ID del usuario creado
    res.status(201).send(nuevoUsuario.id);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al crear el usuario");
  }
}
