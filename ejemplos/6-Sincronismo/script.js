const btn = document.getElementById("buscar");
btn.addEventListener("click", async () => {
    const nombre = document.getElementById("pokemon").value;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = await res.json();

    document.getElementById("info").innerHTML = `
    <h3>${data.name}</h3>
    <img src="${data.sprites.front_default}" />
    <p>Peso: ${data.weight}</p>
  `;
});