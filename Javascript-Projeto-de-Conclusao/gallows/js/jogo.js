var criaJogo = function(sprite) {
  
  var palavraSecreta = "";
  var lacunas = [];
  var etapa = 1;

  var criaLacunas = function() {
    for (let i = 0; i < palavraSecreta.length; i++) {
          lacunas.push("");
    };

  };

  var proximaEtapa = function() {
    etapa = 2;

  };

  var setPalavraSecreta = function(palavra) {
    
    palavraSecreta = palavra;
    criaLacunas();
    proximaEtapa();
    
  };  

  var getLacunas = function() {
    return lacunas;
  
  };

  var getEtapa = function() {
    return etapa;

  };

  var processaChute = function(chute) {
    
    var exp = new RegExp(chute, "gi")
        , resultado
        , acertou = false;

    while (resultado = exp.exec(palavraSecreta))
      acertou = lacunas[resultado.index] = chute;

      if (!acertou) sprite.nextFrame();

  };

var ganhou = function () {
  return lacunas.length
          ? !lacunas.some(function(lacuna) {
            return lacuna == "";
          })
          : false;
};

var perdeu = function () {
    return sprite.isFinished();
};

var ganhouOuPerdeu = function () {
    return ganhou() || perdeu();
};

var reinicia = function () {
  palavraSecreta = "";
  lacunas = [];
  etapa = 1;
  sprite.reset();
};

  return { setPalavraSecreta: setPalavraSecreta,
            getLacunas: getLacunas,
            getEtapa: getEtapa,
            processaChute: processaChute,
            ganhou: ganhou,
            perdeu: perdeu,
            ganhouOuPerdeu: ganhouOuPerdeu, 
            reinicia: reinicia
          };

};