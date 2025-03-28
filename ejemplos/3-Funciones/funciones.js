
console.log("1 - Funciones estandard");
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Mundo'));


console.log("2 - Funciones anonimas");
const despedir = function (nombre) {
    return `Chau ${nombre}`;
};

console.log(despedir('Mundo'));

console.log("3 - Funciones flecha");
const multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 3));

// Parametros

console.log("4 - Parametros");
function sumar(a = 0, b = 0) {
    return a + b;
}

console.log(sumar(2, 3));
console.log(sumar(1));

// condicionales


console.log("5 - Condicionales");
let edad = 20;
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

console.log("6 - Operador ternario");
let mensaje = edad >= 18 ? "Mayor" : "Menor";
console.log(mensaje);