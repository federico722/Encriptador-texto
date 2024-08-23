import { encriptandoText } from "./encriptarElement.js";
import { desincriptandoText } from "./desencriptarElemento.js";


// ocultar o mostrar elementos del textarea
export function show(elemento, elemento_1, elemento2, tipo) {
    const stylesElement = document.getElementById(elemento);
    const stylesElement_1 = document.getElementById(elemento_1);
    const stylesElement_2 = document.getElementsByClassName(elemento2);

    if (stylesElement && stylesElement_1) {
        // Agrega padding superior e inferior 
        stylesElement.style.paddingTop = "50px";
        stylesElement.style.paddingBottom = "50px";

        // Establece el atributo de showElement como true para aplicar los estilos
        stylesElement_1.setAttribute('showElement', 'true');

        if(stylesElement_2.length > 0){
            for (let i = 0; i < stylesElement_2.length; i++) {
                stylesElement_2[i].removeAttribute('hidden');
            }
            // Mover texto
            moveText("texArea__1", "area__presentacion__texto", tipo);
        }
    }
}


//funcion para ocultar elementos 
export  function hiddenElement(elemento0, elemento, elemento_1, elemento2, tipo) {

    if (elemento0) {
        const collectionClass = document.getElementsByClassName(elemento0);

        for (let i = 0; i < collectionClass.length; i++) {
            collectionClass[i].hidden = true;
            
        };

         show(elemento, elemento_1, elemento2, tipo)
        
    
    };
  
};


// funcion para mover el texto 
function moveText(text1, text2, tipo){
    const textElement1 = document.getElementById(text1);
    const textElement2 = document.getElementById(text2);
    
    
    if (textElement1 && textElement2) {

        if ( tipo === "encriptar" ) {
            // funcion para encriptar
            let encriptar = encriptandoText(textElement1.value);
        
            textElement2.value = encriptar;
            textElement1.value = "";

        } else if( tipo === "desincriptar"){
            // funcion para desencriptar
            let desencriptar = desincriptandoText(textElement1.value);
        
            textElement2.value = desencriptar;
            textElement1.value = "";
        };
       

        console.log(textElement2);
        console.log(textElement1);
        
        
    };
};