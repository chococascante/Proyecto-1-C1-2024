window.onload = async function () {
  traerUsuarios();
  crearBotonCloudinary();

  const formulario = document.getElementById("formulario-usuario");

  formulario.addEventListener("submit", manejarSubmitFormulario);
};

async function traerUsuarios() {
  try {
    // fetch
    const respuesta = await fetch("http://localhost:3000/usuarios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const usuarios = await respuesta.json();

    const listaUsuarios = document.getElementById("lista-usuarios");

    listaUsuarios.innerHTML = "";

    listaUsuarios.innerHTML = usuarios
      .map(function (usuario) {
        return `<li>${usuario.nombre} ${usuario.apellido}</li>`;
      })
      .join("");

    console.log("Usuarios obtenidos", usuarios);
  } catch (error) {
    console.error(error);
  }
}

function crearBotonCloudinary() {
  const boton = document.getElementById("btn-subir-archivo");

  let cloudinaryWidget = cloudinary.createUploadWidget(
    {
      cloudName: "dezdyauun",
      uploadPreset: "luiscascante",
    },
    function (error, result) {
      if (!error && result && result.event === "success") {
        fotoPerfil = result.info.url;
        document.getElementById("foto-usuario").src = fotoPerfil;
        thumbnailPerfil = result.info.thumbnail_url;
      }
    }
  );

  boton.addEventListener("click", function () {
    cloudinaryWidget.open();
  });
}

async function manejarSubmitFormulario(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("correo").value;
  const cedula = document.getElementById("cedula").value;
  const fotoPerfil = document.getElementById("foto-usuario").src;

  if (!nombre || !apellido || !correo || !cedula || !fotoPerfil) {
    alert("Todos los campos son requeridos");
    return;
  }

  try {
    const respuesta = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        cedula,
        fotoPerfil,
      }),
    });

    // Como obtener la respuesta del servidor
    const idNuevoUsuario = await respuesta.json();

    traerUsuarios();
  } catch (error) {
    console.error(error);
  }
}
