let numeroRandom = 0;

function crearNumeroRandom() {
    numeroRandom = generarNumero(-100, 100);
    document.getElementById("inputUsuario").removeAttribute("readonly", false);
    document.getElementById("btnEnviarUsuario").removeAttribute("disabled", false);
    document.getElementById("btnInciarJuego").setAttribute("disabled", true);
    console.log(numeroRandom);
}
function obtenerAdivinaza() {
    let numero = parseInt(document.getElementById("inputUsuario").value);
    let contenedorPadreRespuesta = document.getElementById("panelRespuesta");
    let h2 = document.createElement("h2");
    switch (true) {
        case numero == numeroRandom:
            h2.innerHTML = '<i class="bi bi-stars"></i> Usted Adivino el Numero';
            contenedorPadreRespuesta.appendChild(h2);
            setTimeout(empezarDeNuevo,3000);
            break;
        case numero < numeroRandom:
            h2.innerHTML = '<i class="bi bi-x-square-fill"></i> Usted No Adivino el Numero!. Adivino un numero menor que el Número Mágico';
            contenedorPadreRespuesta.appendChild(h2);
          setTimeout( limpiar,3000);
            break;
        case numero > numeroRandom:
            h2.innerHTML = '<i class="bi bi-x-square-fill"></i> Usted No Adivino el Numero!. Adivino un numero mayor que el Número Mágico';
            contenedorPadreRespuesta.appendChild(h2);
            setTimeout( limpiar,3000);
            break;
        default:
            h2.innerHTML = '<i class="bi bi-x-square-fill"></i> Usted No Adivino el Numero!';
            setTimeout( empezarDeNuevo,3000);
            break;
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
function empezarDeNuevo(){
    window.location.reload();
}
function generarNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}