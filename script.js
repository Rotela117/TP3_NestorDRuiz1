// Mensaje de bienvenida
alert("¡Bienvenido a la página web!");

document.addEventListener("DOMContentLoaded", () => {
    let nombreCompleto = localStorage.getItem("nombreUsuario");

    // Si no hay nombre guardado, pedir al usuario
    if (!nombreCompleto) {
        nombreCompleto = null;

        // Repetir mientras el usuario no escriba algo válido
        while (!nombreCompleto || nombreCompleto.trim() === "") {
            nombreCompleto = prompt("Por favor, ingresa tu nombre y apellido:");
            // Si presiona cancelar, volvemos a pedir
            if (nombreCompleto === null) {
                alert("Debes ingresar tu nombre para continuar.");
            }
        }

        // Guardar en localStorage
        localStorage.setItem("nombreUsuario", nombreCompleto);
        alert("Bienvenido/a " + nombreCompleto + "!");
    }

    // Mostrar mensaje en la página
    document.getElementById("mensajeBienvenida").textContent =
        "Bienvenido/a a la página principal.";
    document.getElementById("nombreUsuario").textContent =
        "Usuario: " + nombreCompleto;
});
