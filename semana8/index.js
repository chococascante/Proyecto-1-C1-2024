window.onload = function () {
  const formulario = document.getElementById("formulario");

  const botonCerrarSesion = document.getElementById("cerrar-sesion");

  botonCerrarSesion.addEventListener("click", function () {
    localStorage.removeItem("usuario");
  });

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const correo = document.getElementById("email").value;
    const contrasenna = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;

    const usuario = {
      correo: correo,
      contrasenna: contrasenna,
      rol: rol,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    window.location.href = "./pagina1.html";
  });
};
