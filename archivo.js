function encriptar(){
    var texto = document.querySelector(".textodesencriptado").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".textoencriptado").innerHTML = textoCifrado;
    document.querySelector(".textodesencriptado").value;
    }


    

function desencriptar(){ 
    var texto = document.querySelector(".textodesencriptado").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
document.querySelector(".textoencriptado").innerHTML= textoCifrado;
document.querySelector(".textodesencriptado").value;
}


function copy(){
    var content = document.querySelector(".textoencriptado").innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}







