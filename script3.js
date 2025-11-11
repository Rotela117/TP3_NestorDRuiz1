function mostrarResultado(texto) {
    document.getElementById("resultado").textContent = texto;
}

function calcularSuma() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado = a + b;
    mostrarResultado("La suma es: " + resultado);
}

function calcularDivision() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));

    if (b === 0) {
        mostrarResultado("No se puede dividir entre cero.");
        return;
    }

    let resultado = a / b;
    mostrarResultado("La división es: " + resultado);
}

function calcularPromedio() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado = (a + b) / 2;
    mostrarResultado("El promedio es: " + resultado);
}
