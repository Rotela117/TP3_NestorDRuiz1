// Mensaje de bienvenida
alert("Bienvenido a la galería.");

// Preguntar edad
let edad = prompt("Ingresa tu edad:");
let mensaje = edad > 20 ? "Sos mayor de 20 años." : "Sos menor o tenés 20.";
document.getElementById("mensajeEdad").textContent = mensaje;

// Mini carrusel solo para los 5 cuadros
const cuadros = document.querySelectorAll(".galeria .cuadro img");

cuadros.forEach(img => {
    const original = img.src;
    const alterna = img.getAttribute("data-alt");

    img.addEventListener("mouseenter", () => {
        img.src = alterna;
    });

    img.addEventListener("mouseleave", () => {
        img.src = original;
    });
});
