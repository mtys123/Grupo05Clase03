const frutas = ["manzana", "banana", "sandía"];
const lista = document.getElementById("miLista");

for (let fruta of frutas) {
    const li = document.createElement("li");
    li.innerText = fruta;
    lista.appendChild(li);
}