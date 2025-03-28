document.getElementById("saludar").addEventListener("click", () => {
    const nombre = document.getElementById("entrada").value;
    document.getElementById("mensaje").innerText = `¡Hola, ${nombre}!`;
});