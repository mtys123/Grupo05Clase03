let frutas = ["manzana", "banana", "uva"];

console.log("recorremos array con indice")
for (let indice = 0; indice < frutas.length; indice++) {
    console.log("Index: ", indice, " - ", frutas[indice]);
}

console.log("recorremos array iterativamente")
frutas.forEach(fruta => {
    console.log("-> ", fruta);
});

console.log("Array original: ", frutas);
frutas.push("pera");
console.log("Array con pera: ", frutas);

frutas.concat(["naranja", "limón"]);
console.log("Array con naranja y limón: ", frutas);