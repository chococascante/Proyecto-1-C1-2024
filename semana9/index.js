// Una lista de compras
// En cada compra, hay un botón para ver factura
// Al hacer click en el botón, se muestra la factura

// ¿Cómo hacemos para que el botón sepa cuál factura
// tiene que mostrar?

let compras = [
  { id: "1", nombre: "pan", precio: 10, fecha: "2021-09-01" },
  { id: "2", nombre: "leche", precio: 20, fecha: "2021-09-02" },
  { id: "4", nombre: "jamon", precio: 40, fecha: "2021-09-04" },
  { id: "5", nombre: "huevo", precio: 50, fecha: "2021-09-05" },
];

window.onload = function () {
  renderizarListaCompras();
};

function renderizarListaCompras() {
  const lista = document.getElementById("lista-compras");

  lista.innerHTML = "";

  compras.forEach(function (compra) {
    lista.innerHTML += `
      <li>
        <p>Producto: ${compra.nombre}</p>
        <p>Precio: ${compra.precio}</p>
        <p>Fecha: ${compra.fecha}</p>
        <button data-id=${compra.id} data-nombre=${compra.nombre} onclick="borrarConTarget(this)">Borrar</button>
      </li>
    `;
  });
}

function borrarConTarget(target) {
  console.log(target.dataset.nombre);
  compras = compras.filter(function (compra) {
    return compra.id != target.dataset.id;
  });

  renderizarListaCompras();
}

function borrarElemento(id) {
  compras = compras.filter(function (compra) {
    return compra.id != id;
  });

  renderizarListaCompras();
}
