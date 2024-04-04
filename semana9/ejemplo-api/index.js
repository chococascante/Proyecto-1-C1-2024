window.onload = async function () {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  // const localhost = "http://localhost:3000/posts"; Esto es para el proyecto

  try {
    const response = await fetch(apiUrl);
    const data = await response.json(); // Arreglo de todos

    const listaTodos = document.getElementById("todos");

    data.forEach(function (todo) {
      listaTodos.innerHTML += `<li>${todo.title}</li>`;
    });

    console.log("Data: ", data);
  } catch (error) {
    console.error("Error: ", error);
  }

  console.log("Hola mundo!");
};
