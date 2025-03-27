function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Mundo'));

const despedir = function (nombre) {
    return `Chau ${nombre}`;
};

console.log(despedir('Mundo'));

const multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 3));

// Parametros

function sumar(a = 0, b = 0) {
    return a + b;
}

console.log(sumar(2, 3));
console.log(sumar(1));

// condicionales

let edad = 20;
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

let mensaje = edad >= 18 ? "Mayor" : "Menor";
console.log(mensaje);