// script.js
var mensaje = "Hola desde VAR";
let nombre = "Santiago";
const PI = 3.1416;

let texto = "cadena";
let numero = 10;
let activo = true;
let frutas = ["manzana", "pera"];
let persona = { nombre: "Ana", edad: 26, activa: true };

const div = document.getElementById("output");
div.innerHTML = `
  <p><b>Var:</b> ${mensaje}</p>
  <p><b>Let:</b> ${nombre}</p>
  <p><b>Const:</b> ${PI}</p>
  <p><b>Frutas:</b> ${frutas.join(", ")}</p>
  <p><b>Persona:</b> ${persona.nombre}, ${persona} años</p>
`;