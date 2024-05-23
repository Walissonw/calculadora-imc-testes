function calculateIMC() {
    var altura=parseFloat(document.getElementById("altura").value/100);
    var peso=parseFloat(document.getElementById("peso").value);
    var genero=parseFloat(document.getElementById("genero").value);

    var imc = peso/(altura*altura);
    var resultado=document.getElementById("resultado"); 
    var status = "";
    if (imc < 18.5) {
      status = "Abaixo do peso";
    } else if (imc>= 18.5 && imc < 25) {
      status = "Peso normal";
    } else if (imc >= 25 &&  imc < 30) {
      status = "Sobrepeso";
    } else if (imc >= 30 &&  imc < 35) {
      status = "Obesidade Grau I";    
    } else if (imc >= 35 &&  imc < 40) {
      status = "Obesidade Grau II (obesidade severa)";    
    } else  {
      status = "Obesidade Grau III (obesidade mórbida)";   
    }
    
    var sugestao = "";
    if (status === "Abaixo do peso") {
      sugestao = "Você está abaixo do peso ideal.Tente ganhar um pouco de peso mantendo uma alimentação saudável e praticando exercícios físicos.";
    } else if (status === "Peso normal") {
      sugestao = "Parabéns! Seu peso está dentro da faixa considerada saudável. Continue mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    } else if (status === "Sobrepeso") {
      sugestao = "Você está um pouco acima do peso ideal.Tente perde um pouco de peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    } else if (status === "Obesidade Grau I") {
      sugestao = "Você está acima do peso ideal.Tente perde peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    }else if (status === "Obesidade Grau II (obesidade severa)") {
      sugestao = "Você está bem acima do peso ideal.Procure um nutrionista e tente perde peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    }else   {
      sugestao = "Você está muito acima do peso ideal.Procure um nutricionista e tente perde peso mantendo uma alimentação equilibrada e praticando exercícios regularmente.";
    }
    
    resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " - " + status + "<br><br>" + sugestao;
    
  }

function limparIMC() {
    const campoaltura = document.querySelector("altura");
    const campopeso = document.querySelector("peso");
    const camporesultado = document.querySelector("resultado");
    
    altura.value="";
    peso.value="";
    resultado.innerHTML="";
    
    
}


    
    
   
    
