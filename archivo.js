function encriptar(){
    var texto = document.querySelector(".textBox").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".rectangle1").innerHTML = textoCifrado;
    document.querySelector(".textBox").value;
    }


    

function desencriptar(){ 
    var texto = document.querySelector(".textBox").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
document.querySelector(".rectangle1").innerHTML= textoCifrado;
document.querySelector(".textBox").value;
}


function copy(){
    var content = document.querySelector(".rectangle1").innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}






