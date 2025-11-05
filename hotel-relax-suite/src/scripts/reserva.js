
var btn = document.getElementById("button");

function registrar() {
    var fields = document.getElementsByClassName("input-box");
    for (var i = 0; i < fields.length; i++) {
        var input = fields[i].querySelector("input, select");
        if (!input.value) {
            document.getElementById("mensaje-incorrecto").innerText = "Por favor, complete todos los campos.";
            return;
        }
    }

    document.getElementById("mensaje-correcto").innerText = "Registrado correctamente";
    setTimeout(function() {
        location.reload();
    }, 4000);
}
const alerta = document.getElementById("alert")
function validar() {
    // Obtiene el valor actual del campo de entrada
    var inputElement = document.getElementById('person');
    var inputValue = inputElement.value;

    // Convierte el valor a un número
    var numberValue = parseFloat(inputValue);

    // Verifica si es un número válido (no es NaN) y si es menor que cero
    if (isNaN(numberValue) || numberValue < 0) {
        // Si es inválido, establece el valor del campo en cero
        inputElement.value = 1;
        alerta.innerText = "Minimo 1 persona maximo 4";  
        setTimeout(function() {
            alerta.innerText = "";
        }, 2000);
    }
}