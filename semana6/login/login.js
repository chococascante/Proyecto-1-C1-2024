let existioError = false;

window.onload = function () {
  const formulario = document.getElementById("formulario-inicio-sesion");
  formulario.addEventListener("submit", onSubmitFormulario);

  document
    .getElementById("show-password")
    .addEventListener("click", mostrarOcultarPassword);
};

const foo = () => false;

function mostrarOcultarPassword(event) {
  event.preventDefault();

  const inputPassword = document.getElementById("password");

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}

function onSubmitFormulario(evento) {
  // Evita que el formulario se envíe y la página se recargue
  evento.preventDefault();

  const correoElectronico = document.getElementById("email").value;
  const contrasena = document.getElementById("password").value;

  let hayError = false;

  if (!validarCorreoElectronico(correoElectronico)) {
    // Manejar el caso en que no sea válido el correo electrónico
    const helperCorreo = document.getElementById("email-helper");
    helperCorreo.innerText = "Correo electrónico inválido";
    helperCorreo.style.color = "red";
    helperCorreo.style.display = "block";
    existioError = true;
    hayError = true;
  } else if (existioError) {
    const helperCorreo = document.getElementById("email-helper");
    helperCorreo.style.display = "none";
  }

  if (contrasena.length < 6) {
    // Manejar el caso en que la contraseña sea muy corta
    const helperContrasena = document.getElementById("password-helper");
    helperContrasena.innerText =
      "La contraseña debe tener al menos 6 caracteres";
    helperContrasena.style.color = "red";
    helperContrasena.style.display = "block";
    hayError = true;
  } else if (existioError) {
    const helperContrasena = document.getElementById("password-helper");
    helperContrasena.style.display = "none";
  }

  if (hayError) {
    return;
  }

  // Yey!
  window.location.href = "https://www.google.com";
  alert("Inicio de sesión exitoso");
}

function validarCorreoElectronico(correoElectronico) {
  return correoElectronico.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/);
}

/**
 * Función que suma dos números y devuelve el resultado.
 *
 * @param a - Primer número
 * @param b - Segundo número
 * @returns Suma de a y b
 */
function sumar(a, b) {
  return a + b;
}
