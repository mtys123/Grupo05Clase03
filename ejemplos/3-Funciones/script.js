function mostrarSaludo(nombre) {
    document.getElementById("resultado").innerText = `Hola, ${nombre}`;
}

const calcularEdad = (edad) => {
    let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    document.getElementById("resultado").innerText = mensaje;
};