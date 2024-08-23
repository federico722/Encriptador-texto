
export function encriptandoText(encriptar) {
    let verificacionTextoEnMinuscula = /^[a-z\s]+$/.test(encriptar);
    if (verificacionTextoEnMinuscula) {
        return convertirTexto(encriptar);
    } else {
        return "El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y espacios.";
    };
    
};


function convertirTexto(letra) {
    let textoEncriptado = "";

    for (let i = 0; i < letra.length; i++) {
        switch (letra[i]) {
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "a":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ofat";
                break;
            case " ":
                textoEncriptado += " ";
                break;
            default:
                textoEncriptado += letra[i];
        }
    }

    return textoEncriptado;
    
};


