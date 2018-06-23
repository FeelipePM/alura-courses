var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");

var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");

var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso >= 1000)   {
    console.log("Peso Inválido!");
    tdImc.textContent = "Peso Inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura  >= 3.00)  {
    console.log("Altura Inválido!");
    tdImc.textContent = "Altura Inválido!";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida)  {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}






