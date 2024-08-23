export function desincriptandoText(textoEncriptado) {
    let verificacionTextoEnMinuscula = /^[a-z\s]+$/.test(textoEncriptado);

    if (!verificacionTextoEnMinuscula) {
        return "El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y espacios.";
    } 

    let textoDesifrado = "";
    let i = 0;

    while (i < textoEncriptado.length) {
        if (textoEncriptado.startsWith("enter",i)) {
            textoDesifrado += "e";
            i += 5; 
        }else if(textoEncriptado.startsWith("imes", i)){
            textoDesifrado += "i"
            i += 4;
        }else if(textoEncriptado.startsWith("ai", i )){
            textoDesifrado += "a"
            i += 2;
        }else if(textoEncriptado.startsWith("ober", i)){
            textoDesifrado += "o";
            i += 4;
        }else if(textoEncriptado.startsWith("ofat", i)){
            textoDesifrado += "u"
            i += 4;
        }else {
            textoDesifrado += textoEncriptado[i];
            i++;
        }
    }

    return textoDesifrado;
    
}
