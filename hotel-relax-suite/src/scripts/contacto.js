const inputs = document.querySelectorAll(".input")

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    parent.classList.remove("focus");
}

inputs.forEach(input =>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

var btn = document.getElementById("btn");

function registrar() {
    var fields = document.getElementsByClassName("input-container");
    for (var i = 0; i < fields.length; i++) {
        var input = fields[i].querySelector("input");
        if (!input.value) {
            document.getElementById("mensaje-incorrecto").innerText = "Por favor, complete todos los campos.";
            return;
        }
    }
    
    // Aquí puedes realizar el registro o enviar los datos, por ejemplo:
    respuestaCorrecta.textContent = `Registrado correctamente`;  // Esto es solo un ejemplo, reemplázalo con tu lógica de registro real.
    setTimeout(function() {
        location.reload();
    }, 4000);
}