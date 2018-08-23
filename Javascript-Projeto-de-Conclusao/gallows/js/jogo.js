const criaJogo = (sprite) => {
  
  let palavraSecreta = "";
  let lacunas = [];
  let etapa = 1;

  const criaLacunas = () => {
    for (let i = 0; i < palavraSecreta.length; i++) {
          lacunas.push("");
    }

  };

  const proximaEtapa = () => etapa = 2;

  const setPalavraSecreta = (palavra) => {
    
    if (!palavra.trim()) throw Error("Palavra inválido!");

    palavraSecreta = palavra;
    criaLacunas();
    proximaEtapa();
    
  };  

  const getLacunas = () => lacunas;

  const getEtapa = () => etapa;

  const processaChute = (chute) => {

    if (!chute.trim()) throw Error("Chute inválido!");

    
    const exp = new RegExp(chute, "gi")
        var resultado
        , acertou = false;

    while (resultado = exp.exec(palavraSecreta))
      acertou = lacunas[resultado.index] = chute;

      if (!acertou) sprite.nextFrame();

  };

const ganhou = () => {
  return lacunas.length
          ? !lacunas.some(function(lacuna) {
            return lacuna == "";
          })
          : false;
};

const perdeu = () => sprite.isFinished();

const ganhouOuPerdeu = () => ganhou() || perdeu();

const reinicia = () => {
  palavraSecreta = "";
  lacunas = [];
  etapa = 1;
  sprite.reset();
};

return { setPalavraSecreta,
          getLacunas,
          getEtapa,
          processaChute,
          ganhou,
          perdeu,
          ganhouOuPerdeu, 
          reinicia
        };

};