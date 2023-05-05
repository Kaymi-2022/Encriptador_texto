

function encriptar() {
    const textoarea = document.getElementById("textoEncriptado").value.toLowerCase();
    if (textoarea != "") {
        const arearespuesta1 = document.getElementById("order1");
        const arearespuesta2 = document.getElementById("order2");
        var textoEncriptado = textoarea.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        arearespuesta2.style.zIndex = '1';
        arearespuesta1.style.zIndex = '-1';
        document.getElementById("textoEncriptado").value = "";
    } else {
        alert("INGRESE DATOS");
    }

}

function desencriptar() {
    const textoarea = document.getElementById("textoEncriptado").value.toLowerCase();
    if (textoarea != "") {
        const arearespuesta1 = document.getElementById("order1");
        const arearespuesta2 = document.getElementById("order2");
        var textoEncriptado = textoarea.replace(/enter/img, "e");
        var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        arearespuesta2.style.zIndex = '1';
        arearespuesta1.style.zIndex = '-1';
        document.getElementById("textoEncriptado").value = "";

    } else {
        alert("INGRESE DATOS");
    }
}

function copiarMensaje() {
    var mensaje = document.getElementById("textoDesencriptado");
    const arearespuesta1 = document.getElementById("order1");
    const arearespuesta2 = document.getElementById("order2");
    mensaje.select();
    document.execCommand("copy");
    alert("El mensaje se ha copiado al portapapeles.");
    arearespuesta2.style.zIndex = '-1';
    arearespuesta1.style.zIndex = '1';
}


