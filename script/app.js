import { hiddenElement} from "./function/controladorIncriptador.js";
import { copiar } from "./function/copiar.js";

// llamar a las funciones

// hidden__element => clase de las etiquetas img, h2, p para ocultar las etiquetas y estilos 
// contenedor__elementos__desincriptador => clase de la etiqueta div, para cambiar los estilos del padding 
// area__presentacion__texto => clase de la etiqueta textArea, para cambiar el atributo de showElement y mostrar los estilos del textArea
//view__element => clase de las etiquetas button, para cambiar el atributo de hidden y mostrar button, textArea
// encriptar - desincriptar => se usa para elegir si el texto debe ser desincriptado o encriptado

window.oneClickEncriptar = function () {
    hiddenElement('hidden__element','contenedor__elementos__desincriptador','area__presentacion__texto', 'view__element', 'encriptar');

};

window.oneClickDesencriptar = function () {
   hiddenElement('hidden__element','contenedor__elementos__desincriptador','area__presentacion__texto', 'view__element', 'desincriptar');
};

window.copyText = function () {
    copiar();
    
}

