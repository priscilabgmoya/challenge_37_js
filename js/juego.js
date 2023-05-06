let numeroRandom = 0;

function crearNumeroRandom() {
    numeroRandom = generarNumero(-100, 100);
    document.getElementById("inputUsuario").removeAttribute("readonly", false);
    document.getElementById("btnEnviarUsuario").removeAttribute("disabled", false);
    document.getElementById("btnLimpiarUsuario").removeAttribute("disabled", false);
    document.getElementById("btnInciarJuego").setAttribute("disabled", true);
}
function obtenerAdivinaza() {
    let numero = parseInt(document.getElementById("inputUsuario").value);
    let contenedorPadreRespuesta = document.getElementById("panelRespuesta");
    let h2 = document.createElement("h2");

    if (numero == numeroRandom) {
        h2.innerHTML = '<i class="bi bi-stars"></i> Usted Adivino el Numero';
        return contenedorPadreRespuesta.appendChild(h2);
    }
    if (numero < numeroRandom) {
        h2.innerHTML = '<i class="bi bi-x-square-fill"></i> Usted No Adivino el Numero!. Adivino un numero menor que el Número Mágico';
       return contenedorPadreRespuesta.appendChild(h2);
    }
    if (numero > numeroRandom) {
        h2.innerHTML = '<i class="bi bi-x-square-fill"></i> Usted No Adivino el Numero!. Adivino un numero mayor que el Número Mágico';
       return contenedorPadreRespuesta.appendChild(h2);
    }
}

function limpiar() {
    if (confirm('¿Desea Jugar de Nuevo?')) {
        document.getElementById("inputUsuario").value = "";
        let contenedorPadreRespuesta = document.getElementById("panelRespuesta");
        while (contenedorPadreRespuesta.hasChildNodes()) {
            contenedorPadreRespuesta.childNodes.forEach(child => child.remove());
        }
    } else {
        window.location.reload();
    }
}
function generarNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}