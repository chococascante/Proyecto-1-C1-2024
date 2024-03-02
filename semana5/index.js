// Mostrar un mensaje en la consola
console.log("Hola Mundo!");

// Variables
let variable = "variable"; // Recomendación del profe
const Edad_Maxima = 100; // Constante

Edad_Maxima = 10;

// -------------------Tipos de datos-------------------
// Numbers
let edad = 25;
let precio = 25.5;

// Operaciones de numbers
let suma = 5 + 3;
let resta = 5 - 3;
let multiplicacion = 5 * 3;
let division = 5 / 3;
let modulo = 5 % 3; // Residuo
let potencia = 5 ** 3;

const numeroPar = 8 % 2; // 0
const numeroImpar = 9 % 2; // 1

// Strings - Cadenas de texto
let mascota = "Sienna";
let nombre = "Luis";
let apellido = "Cascante";
let nombreCompleto =
  "Mi nombre es " + nombre + " " + apellido + ", y tengo hambre."; // Luis Cascante
let stringTemplate = `Mi nombre es ${nombre} ${apellido}, y tengo hambre.`; // Luis Cascante

// Boolean
let verdadero = true; // True
let falso = false; // False

// And -> Conjunción -> python: "and"
/**
 * True y True -> True
 * True y False -> False
 * False y True -> False
 * False y False -> False
 */
let conjuncion = true && false; // False

// Or -> Disyunción -> python: "or"
/**
 * True o True -> True
 * True o False -> True
 * False o True -> True
 * False o False -> False
 */
let disyuncion = true || false; // True

// Not -> Negación -> python: "not"
/**
 * not True -> False
 * not False -> True
 */
let negacion = !true; // False

// Null y Undefined
let nulo = null; // Valor nulo
let indefinido = undefined; // Valor indefinido

let patito; // undefined

// -------------------COERCION-------------------
let variableEdad = "5" + 8;
let ejemplo = "patito" + 5;
let ejemplo2 = true + 5;
let ejemplo3 = true + true;

// Comparaciones
let comparacion1 = "5" == 5;
let comparacion2 = "5" === 5;
let comparacion3 = "5" != 5;
let comparacion4 = "5" !== 5;

// -------------------COLECCIONES-------------------

// Objectos
// llave:valor
let estudiante = {
  nombre: "Luis",
  apellido: "Cascante",
  edad: 25,
  mascota: "Sienna",
};

let nombreEstudiante = `${estudiante.nombre} ${estudiante.apellido}`; // Luis

estudiante.edad = 30;
console.log(estudiante.edad); // 30

delete estudiante.edad;
console.log(estudiante.edad); // undefined

typeof estudiante.nombre; // "string"
typeof estudiante.edad; // "undefined"

// Arrays - Arreglos
//                               0       1       2          3
let listaNombresEstudiantes = ["Luis", "Andrea", "Carlos", "Patricia"];
let luis = listaNombresEstudiantes[0]; // Luis

let cantidadElementos = listaNombresEstudiantes.length; // 4

// -------------------CONDICIONALES-------------------

edad = 66;

if (edad < 18) {
  console.log("Es menor de edad");
} else if (edad >= 18 && edad < 65) {
  console.log("Es mayor de edad");
} else {
  console.log("Es adulto mayor");
}

switch (edad) {
  case 18:
    console.log("Tiene 18 años");
    break;
  case 25:
    console.log("Tiene 25 años");
    break;
  default:
    console.log("No tiene 18 ni 25 años");
    break;
}

// -------------------CICLOS-------------------

// Ciclo while
let quiereIngresarDato = true;

while (quiereIngresarDato) {
  inputEdad = prompt("Ingrese su edad");
  console.log(inputEdad);

  console.log("¿Desea ingresar otro dato?");
  quiereIngresarDato = prompt(
    "Ingrese 's' si desea ingresar otro dato, de lo contrario, ingrese 'n'"
  );

  if (quiereIngresarDato === "n") {
    quiereIngresarDato = false;
  }
}

let contador = 11;

while (contador <= 10) {
  console.log(contador);
  contador = contador + 1; // contador++
  // fin
}

// Ciclo For
/**
 *  contador = 0 | true | 1
 * contador = 1 | true | 2
 * contador = 2 | true | 3
 * contador = 3 | true | 4
 * contador = 4 | true | 5
 * contador = 5 | true | 6
 * contador = 6 | true | 7
 * contador = 7 | true | 8
 * contador = 8 | true | 9
 * contador = 9 | true | 10
 * contador = 10 | true | 11
 * contador = 11 | false
 */
for (let contador = 0; contador <= 10; contador++) {
  console.log(contador);
  //fin
}
