const criaController = (jogo) => {
  let $entrada = $("#entrada");
  let $lacunas = $(".lacunas");

const exibeLacunas = () => {
  $lacunas.empty();
  jogo.getLacunas().forEach((lacuna) => {
    $("<li>").addClass("lacuna").text(lacuna).appendTo($lacunas);
  });
};

const mudaPlaceHolder = (texto) => $entrada.val("").attr("placeholder", texto);

const guardaPalavraSecreta = () => {
  try {
  jogo.setPalavraSecreta($entrada.val().trim());
  $entrada.val("");
  exibeLacunas();
  mudaPlaceHolder("chute");
  } catch(err) {
    alert(err.message);
  }
  
};

const leChute = () => {
  try {
    var chute = $entrada.val().trim().substr(0, 1);
    $entrada.val("");
    jogo.processaChute(chute);
    exibeLacunas();

  if(jogo.ganhouOuPerdeu()) {

    setTimeout(() => {
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

const reinicia = () => {
  $lacunas.empty();
  mudaPlaceHolder("Palavra Secreta");
  jogo.reinicia();
}

const inicia = () => {

  $entrada.keypress((event) => {
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
return { inicia };
};