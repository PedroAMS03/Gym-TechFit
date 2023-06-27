function calcImc(){
    //declarando as variaveis

let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value /100;
let resultado = document.getElementById("resultado")
let imc =(peso /(altura * altura)).toFixed(2);
let mensagem="";


//condição if para verificar se os campos estão vazios e o seu imc

if(altura !="" && peso !=""){
    
if(imc < 18.5){
    mensagem="VOCÊ ESTÁ COM SUBPESO";
}
else if (imc < 25){	
    mensagem="VOCÊ ESTÁ COM UM PESO NORMAL";
}
else if(imc < 35){
    mensagem="VOCÊ ESTÁ COM SOBREPESO";
}
else {
    mensagem ="VOCÊ ESTÁ COM OBESIDADE";
}
    //apresenta no textarea o resultado da variavel mensagem
     resultado.textContent =`SEU IMC É \n ${imc} \n ${mensagem}`;	
}else{
    resultado.textContent ="PREECHA TODOS OS CAMPOS!";
}
    
}

// declarando e chamando a função e o metódo
let Calcular = document.getElementById("btn_calcular");
Calcular.addEventListener('click',calcImc);
