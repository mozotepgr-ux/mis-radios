self.addEventListener("install", event => {
    console.log("Service Worker instalado");
});

self.addEventListener("fetch", event => {
    // Modo básico (sin cache avanzado por ahora)
});