function init(){
document.getElementById('img-candidato').style.display='none';

}

function mostrarCandidato(){
  imgCandidato.src = resposta.src;
    imgCandidato.alt = 'Foto do Candidato';
    imgCandidato.style.display='unset';
    cabecalho.style.display="unset";
    candidato.style.display="unset";
    candidatoLabel.style.display="unset";
    candidato.innerHTML = resposta.nome;
    partido.style.display="unset";
    partidoLabel.style.display="unset";
    instrucoes.style.display="unset";
    regua.style.display="unset";
    errado.style.display="none";
    nulo.style.display="none";
    partido.innerHTML = resposta.partido;
}


function inserir(valor) {
  var quantidadeDigitos = 0;
  var votacao = document.getElementById("cargo").innerText;

  switch (votacao) {
    case "Deputado Estadual":
      quantidadeDigitos = 5;
      break;
    case "Deputado Federal":
      quantidadeDigitos = 4;
      break;
    case "Senador":
      quantidadeDigitos = 3;
      break;
    case "Governador":
      quantidadeDigitos = 2;
      break;
    case "Presidente":
      quantidadeDigitos = 2;
      break;
    default:
      break;
  }

  var inputs = [];

  for (var i = 1; i <= quantidadeDigitos; i++) {
    var input = document.getElementById("digito" + i).value;
    inputs.push(input);
  }

  var primeiroVazio = inputs.findIndex(function (valor) {
    return valor === "";
  });

  if (primeiroVazio !== -1) {
    document.getElementById("digito" + (primeiroVazio + 1)).value = valor;
  }
}


function corrigir() {
  var quantidadeDigitos = 0;
  var votacao = document.getElementById("cargo").innerText;
  switch (votacao) {
    case "Deputado Estadual":
      quantidadeDigitos = 5;
      break;
    case "Deputado Federal":
      quantidadeDigitos = 4;
      break;
    case "Senador":
      quantidadeDigitos = 3;
      break;
    case "Governador":
      quantidadeDigitos = 2;
      break;
    case "Presidente":
      quantidadeDigitos = 2;
      break;
    default:
      break;
  }

  for (var i = quantidadeDigitos; i >= 1; i--) {
    var campo = document.getElementById("digito" + i);
    var valor = campo.value;

    if (valor !== "") {
      campo.value = "";
      break;
    }
  }
}

function verificarCandidato() {
  var votacao = document.getElementById("cargo").innerText;
  var { digito1, digito2, digito3, digito4, digito5, errado, nulo, instrucoes, regua, imgCandidato, cabecalho, candidato, candidatoLabel, partido, partidoLabel } = getFromViews(votacao);
  

  // Faça a requisição AJAX para verificar o candidato
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/verificar-candidato', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var resposta = JSON.parse(xhr.responseText);

          var votacao = document.getElementById("cargo").innerText;

          // Verifique se o candidato existe
          if (resposta.existeCandidato) {
            if (votacao === "Deputado Estadual") {
              if (resposta.tipo === "deputado estadual" && digito1 && digito2 && digito3 && digito4 && digito5) {
                mostrarCandidato(resposta);
              }
            } else if (votacao === "Deputado Federal") {
              if (resposta.tipo === "deputado federal" && digito1 && digito2 && digito3 && digito4) {
                mostrarCandidato(resposta);
              }
            } else if (votacao === "Senador") {
              if (resposta.tipo === "Senador" && digito1 && digito2 && digito3) {
                mostrarCandidato(resposta);
              }
            } else if (votacao === "Governador") {
              if (resposta.tipo === "Governador" && digito1 && digito2) {
                mostrarCandidato(resposta);
              }
            } else if (votacao === "Presidente") {
              if (resposta.tipo === "Presidente" && digito1 && digito2) {
                mostrarCandidato(resposta);
              }
            }
          } 
          else if (digito1 == '' && digito2 == '' && digito3 == '' && digito4 == '') {
            errado.style.display="none";
              nulo.style.display="none";
              instrucoes.style.display="none";
              regua.style.display="none";
          } 
          else {
              // Limpe a exibição da foto do candidato
              imgCandidato.src = '';
              imgCandidato.alt = '';
              imgCandidato.style.display="none";
              cabecalho.style.display="none";
              candidato.style.display="none";
              candidatoLabel.style.display="none";
              candidato.style.display="none";
              partido.style.display="none";
              partidoLabel.style.display="none";
              instrucoes.style.display="unset";
              regua.style.display="unset";
              partido.style.display="none";
              errado.style.display="unset";
              nulo.style.display="unset";
          }
      }
  };


  var data = JSON.stringify({
      digito1:digito1,
      digito2:digito2,
      digito3:digito3,
      digito4:digito4,
      digito5:digito5,

      _token: '{{ csrf_token() }}'
  });

  xhr.setRequestHeader('X-CSRF-TOKEN', '{{ csrf_token() }}');

  xhr.send(data);
  

  function getFromViews(votacao) {
    var campos = [];
    var imgCandidato = document.getElementById('img-candidato');
    var cabecalho = document.getElementById('cabecalho');
    var candidatoLabel = document.getElementById('candidatoLabel');
    var candidato = document.getElementById('candidatoNome');
    var partidoLabel = document.getElementById('partidoLabel');
    var partido = document.getElementById('partidoNome');
    var instrucoes = document.getElementById('instrucoes');
    var regua = document.getElementById('regua');
    var errado = document.getElementById('avisoErrado');
    var nulo = document.getElementById('avisoNulo');
  
    // Definir os campos de acordo com a votação
    switch (votacao) {
      case 'Deputado Estadual':
        campos = ['digito1', 'digito2', 'digito3', 'digito4', 'digito5'];
        break;
      case 'Deputado Federal':
        campos = ['digito1', 'digito2', 'digito3', 'digito4'];
        break;
      case 'Senador':
        campos = ['digito1', 'digito2', 'digito3'];
        break;
      case 'Governador':
        campos = ['digito1', 'digito2'];
        break;
      case 'Presidente':
        campos = ['digito1', 'digito2'];
        break;    
      // Adicionar mais casos para outros tipos de candidato, como Senador, Governador, Presidente, etc.
      default:
        break;
    }
  
    // Obter os valores dos campos
    var valores = campos.map(function (campo) {
      return document.getElementById(campo).value;
    });
  
    // Retornar um objeto com os valores e os elementos HTML
    return {
      ...valores.reduce(function (acc, valor, index) {
        acc['digito' + (index + 1)] = valor;
        return acc;
      }, {}),
      errado,
      nulo,
      instrucoes,
      regua,
      imgCandidato,
      cabecalho,
      candidato,
      candidatoLabel,
      partido,
      partidoLabel
    };
  }
  

  function mostrarCandidato(resposta) {
    imgCandidato.src = resposta.src;
    imgCandidato.alt = 'Foto do Candidato';
    imgCandidato.style.display = 'unset';
    cabecalho.style.display = "unset";
    candidato.style.display = "unset";
    candidatoLabel.style.display = "unset";
    candidato.innerHTML = resposta.nome;
    partido.style.display = "unset";
    partidoLabel.style.display = "unset";
    instrucoes.style.display = "unset";
    regua.style.display = "unset";
    errado.style.display = "none";
    nulo.style.display = "none";
    partido.innerHTML = resposta.partido;
  }
}

