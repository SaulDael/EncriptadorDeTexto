/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
"gato" => "gaitober"
gaitober" => "gato"*/

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

textArea.focus();

//funcion de caracteres o acentos
function caracteres(){
    if(/[áéíóúñ$°~`|+*_#@!?<>":&^%]/.test(textArea.value)){
        swal.fire("!Error!", "No se pueden agregar palabras con signos especiales, ni acentos!!", "success");
        textArea.value = "";
        return false;
    }
} 

// funciones para encriptar

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    let caracterValido = caracteres();
    if(caracterValido == false){
        return;
    }
    
    if(textArea.value !== ""){
        mensaje.value = textoEncriptado;
        textArea.value = "";

    }
}

function encriptar(palabraEncriptada){
    let matrizConvertir = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    palabraEncriptada = palabraEncriptada.toLowerCase();

    for(let i = 0; i < matrizConvertir.length; i++){
        if(palabraEncriptada.includes(matrizConvertir[i][0])){
            palabraEncriptada = palabraEncriptada.replaceAll(matrizConvertir[i][0], matrizConvertir[i][1]);
        }
    }
    return palabraEncriptada;
}

// boton copiar
 function btnCopiar(){
    if(mensaje.value === ""){
        swal.fire("!No hay nada que copiar!", "Encripta un texto para poder copiarlo!!", "success");
        return;
    }else{
        mensaje.select();
        document.execCommand("copy");
        swal.fire("!Copiado!", "Da clic en el boton y pega el texto para desencriptarlo!!", "success");
    }
 }

// desencriptar
function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textArea.value);
    let caracterValido = caracteres();
    if(caracterValido == false){
        return;
    }
    
    if(textArea.value !== ""){
        mensaje.value = textoDesencriptado;
        textArea.value = "";

    }
}


function Desencriptar(palabraDesencriptada){
    let matrizConvertir = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    palabraDesencriptada = palabraDesencriptada.toLowerCase();

    for(let i = 0; i < matrizConvertir.length; i++){
        if(palabraDesencriptada.includes(matrizConvertir[i][1])){
            palabraDesencriptada = palabraDesencriptada.replaceAll(matrizConvertir[i][1], matrizConvertir[i][0]);
        }
    }
    return palabraDesencriptada;
}
