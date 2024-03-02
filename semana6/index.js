const listaEstudiantes = [
  {
    nombre: "Luis",
    apellido: "Cascante",
    nota: 0,
  },
  {
    nombre: "Esteban",
    apellido: "García",
    nota: 10,
  },
  {
    nombre: "Jill",
    apellido: "Hernandez",
    nota: 8,
  },
  {
    nombre: "Ana",
    apellido: "Araya",
    nota: 100,
  },
];

// window.onload = function () {
//   // Conexión al html
//   const lista = document.getElementById("lista");

//   // Iterar sobre la lista de estudiantes
//   for (let i = 0; i < listaEstudiantes.length; i++) {
//     // Obtener el estudiante
//     const estudiante = listaEstudiantes[i];

//     // Crear un elemento de tipo li
//     const elementoLista = document.createElement("li");

//     const parrafoNombre = document.createElement("p");
//     parrafoNombre.innerText = `Nombre: ${estudiante.nombre}`;

//     const parrafoApellido = document.createElement("p");
//     parrafoApellido.innerText = `Apellido: ${estudiante.apellido}`;

//     const parrafoNota = document.createElement("p");
//     parrafoNota.innerText = `Nota: ${estudiante.nota}`;

//     // Agregar parrafos al elemento li
//     elementoLista.appendChild(parrafoNombre);
//     elementoLista.appendChild(parrafoApellido);
//     elementoLista.appendChild(parrafoNota);

//     // Agregar el elemento li a la lista
//     lista.appendChild(elementoLista);
//   }
// };

window.onload = function () {
  // Conexión al html
  const lista = document.getElementById("lista");

  for (let i = 0; i < listaEstudiantes.length; i++) {
    // Obtener el estudiante
    const estudiante = listaEstudiantes[i];

    // Crear un elemento de tipo li
    const nuevoEstudiante = `
      <li>
        <p>Nombre: ${estudiante.nombre}</p>
        <p>Apellido: ${estudiante.apellido}</p>
        <p>Nota: ${estudiante.nota}</p>
        <img src=${estudiante.foto} class="estudiante--foto" />
      </li>
    `;

    lista.innerHTML = lista.innerHTML + nuevoEstudiante;
  }
};

/**
 * Escriba un programa en JS que muestre una lista de cosas de su hobby favorito en el html.
 */
