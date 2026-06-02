const radios = [
    {
        nombre: "Radio M2O",
        logo: "logos/m2o.png",
        stream: "https://streamcdnb3-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiom2o/radiom2o/play1.m3u8"
    },
    {
        nombre: "Radio Deejay",
        logo: "logos/deejay.png",
        stream: "https://streamcdnc1-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiodeejay/radiodeejay/master_ma.m3u8"
    }
];

const contenedor = document.getElementById("radios");
const player = document.getElementById("player");

let radioActiva = null;

radios.forEach((radio, index) => {

    const tarjeta = document.createElement("div");
    tarjeta.className = "radio";

    tarjeta.innerHTML = `
        <img src="${radio.logo}">
        <div>
            <h3>${radio.nombre}</h3>
        </div>
        <button>▶</button>
    `;

    const boton = tarjeta.querySelector("button");

    boton.addEventListener("click", () => {

    // Cambiar audio
    player.src = radio.stream;
    player.play();

    // Quitar activa de todas
    document.querySelectorAll(".radio").forEach(el => {
        el.classList.remove("activa");
    });

    // Activar la actual
    tarjeta.classList.add("activa");

    // 🟢 MOSTRAR TEXTO "REPRODUCIENDO AHORA"
    document.getElementById("reproduciendo").textContent =
        "Reproduciendo ahora: " + radio.nombre;

});

    contenedor.appendChild(tarjeta);
});