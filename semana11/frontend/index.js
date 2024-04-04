window.onload = async function () {
  try {
    // Hago la petición al servidor
    const respuesta = await fetch("http://localhost:3000/pizza", {
      method: "GET",
    });

    // Saco los datos de la respuesta
    const pizza = await respuesta.json();

    const div = document.getElementById("ordenes");

    div.innerHTML = `
      <h1>Orden de pizza</h1>
      <p>Masa: ${pizza.masa}</p>
      <p>Queso: ${pizza.queso}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
    `;
  } catch (error) {
    console.error(error);
  }
};
