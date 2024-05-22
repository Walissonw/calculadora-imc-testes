function calculateIMC() {
    var altura=parseFloat(document.getElementById("altura").value/100);
    var peso=parseFloat(document.getElementById("peso").value);
    var genero=parseFloat(document.getElementById("genero").value);

    var imc = peso/(altura*altura);
    var resultado=document.getElementById("resultado"); 
    
}