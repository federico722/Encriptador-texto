export function copiar() {
    const textarea = document.querySelector(".copiarTexto");
    const textToCopy = textarea.value.toLowerCase();
    
    if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(textToCopy).then(() => {
            console.log('Texto copiado al portapapeles');

            textarea.select();

        }).catch(err => {
            console.error('Error al copiar texto: ', err);
        });
    } else {
        console.warn('El navegador no soporta la API Clipboard');
    }
    
};