var criaController = function (jogo) {
  var $entrada = $("#entrada");
  var $lacunas = $(".lacunas");

var exibeLacunas = function () {
  $lacunas.empty();
  jogo.getLacunas().forEach(function (lacuna) {
    $("<li>").addClass("lacuna").text(lacuna).appendTo($lacunas);
  });
};

var mudaPlaceHolder = function (texto) {
  $entrada.val("").attr("placeholder", texto);
  
};

var guardaPalavraSecreta = function () {
  try {
  jogo.setPalavraSecreta($entrada.val().trim());
  $entrada.val("");
  exibeLacunas();
  mudaPlaceHolder("chute");
  } catch(err) {
    alert(err.message);
  }
  
};

var leChute = function () {
  try {
    var chute = $entrada.val().trim().substr(0, 1);
    $entrada.val("");
    jogo.processaChute(chute);
    exibeLacunas();

  if(jogo.ganhouOuPerdeu()) {

    setTimeout(function () {
      if (jogo.ganhou()) {
        alert("Parabéns, Você ganhou!");
      } else if (jogo.perdeu()) {
        alert("Você Perde, Tente Novamente!");
      }
      jogo.reinicia();
      reinicia();
    }, 200); 
  }
} catch(err) {
  alert(err.message);
}   

};

var reinicia = function () {
  $lacunas.empty();
  mudaPlaceHolder("Palavra Secreta");
  jogo.reinicia();
}

var inicia = function () {

  $entrada.keypress(function (event) {
      if (event.which == 13) {
          switch (jogo.getEtapa()) {
              case 1:
                  guardaPalavraSecreta();
                  break;
              case 2:
                  leChute();
                  break;
          }
      }
  });
}
return { inicia: inicia };
};