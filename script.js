// Mensaje de bienvenida
alert("¡Bienvenido a la página web!");

// Solicitar nombre y apellido
let nombreCompleto = prompt("Por favor, ingresa tu nombre y apellido:");

// Mostrar mensaje personalizado
document.getElementById("mensajeBienvenida").textContent =
    "Bienvenido/a a la página principal.";

// Mostrar el nombre dentro del HTML
document.getElementById("nombreUsuario").textContent =
    "Usuario: " + nombreCompleto;

// Mostrar bienvenida personalizada en alerta
alert("Bienvenido/a " + nombreCompleto + "!");
