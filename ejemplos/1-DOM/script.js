document.getElementById("cambiar").onclick = () => {
    document.getElementById("mensaje").innerText = "El mensaje fue cambiado con JS!";
};

const lista = document.getElementById("lista");
document.getElementById("agregar").onclick = () => {
    const nuevoItem = document.createElement("li");
    nuevoItem.innerText = "Elemento " + (lista.children.length + 1);
    lista.appendChild(nuevoItem);
};