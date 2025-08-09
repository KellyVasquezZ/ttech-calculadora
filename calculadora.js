document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("finalizar").style.display = "none";
    document.getElementById("iniciar").style.display = "block";
});   
    
function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num2 !== 0 ? num1 / num2 : "Error: No se puede dividir por cero.";
}

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
    return suma(num1, num2);
    } else if (operacion === "resta") {
    return resta(num1, num2);
    } else if (operacion === "multiplicacion") {
    return multiplicacion(num1, num2);
    } else if (operacion === "division") {
    return division(num1, num2);
    } else {
    return "Operación no válida.";
    }
}

function iniciarCalculadora() {
    const operacion = document.getElementById("operacion").value;

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const resultado = realizarOperacion(num1, num2, operacion);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function mostrarCalculadora() {
    document.getElementById("calculadora").style.display = "block";
    document.getElementById("finalizar").style.display = "block";
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("resultado").innerText = "";
}

function ocultarCalculadora() {
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("finalizar").style.display = "none";
    document.getElementById("iniciar").style.display = "block";
    document.getElementById("resultado").innerText = "¡Gracias por usar la calculadora!";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}