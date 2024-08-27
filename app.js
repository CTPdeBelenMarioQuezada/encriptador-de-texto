// Función para encriptar el texto
function encriptar(texto) {
    const reglas = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    return texto.replace(/[eioua]/g, letra => reglas[letra]);
}

// Función para desencriptar el texto
function desencriptar(texto) {
    const reglasInversas = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    return texto.replace(/enter|imes|ai|ober|ufat/g, cadena => reglasInversas[cadena]);
}

// Función para manejar el encriptado/desencriptado según la opción seleccionada
function procesarTexto() {
    const texto = document.getElementById("texto").value;
    const accion = document.querySelector('input[name="accion"]:checked').value;
    let resultado = "";

    if (accion === "encriptar") {
        resultado = encriptar(texto);
    } else if (accion === "desencriptar") {
        resultado = desencriptar(texto);
    }

    document.getElementById("resultado").textContent = resultado;
}
