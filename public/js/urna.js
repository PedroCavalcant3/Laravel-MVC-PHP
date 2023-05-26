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
  
  var valor1 = document.getElementById("digito1").value;
  var valor2 = document.getElementById("digito2").value;
  var valor3 = document.getElementById("digito3").value;
  var valor4 = document.getElementById("digito4").value;

  if (valor1 == "") {
      document.getElementById("digito1").value = valor;
  } else if (valor2 == "") {
      document.getElementById("digito2").value = valor;
  }
  else if (valor3 == "") {
    document.getElementById("digito3").value = valor;
}
else if (valor4 == "") {
  document.getElementById("digito4").value = valor;
}
}

function corrigir() {

  const campos = ["digito1","digito2","digito3","digito4"]

  for (let i = (campos.length - 1); i < campos.length; i--) {
    const valor = document.getElementById(campos[i]).value;

    if (valor != "") {
      document.getElementById(campos[i]).value = "";
      break;
    }
  }
}

function verificarCandidato() {
  
  var { digito1, digito2, digito3, digito4, errado, nulo, instrucoes, regua, imgCandidato, cabecalho, candidato, candidatoLabel, partido, partidoLabel } = getFromViews();
  

  // Faça a requisição AJAX para verificar o candidato
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/verificar-candidato', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var resposta = JSON.parse(xhr.responseText);

          // Verifique se o candidato existe
          if (resposta.existeCandidato) {

            if(resposta.tipo == "deputado federal"){

              if (digito1 && digito2 && digito3 && digito4) {
              
                mostrarCandidato(resposta);
                }
            }
            if(resposta.tipo == "deputado estadual"){

              alert("aaaaaaaaaa");
            }
            if(resposta.tipo == "governador"){

              alert("aaaaaaaaaa");
            }

            if(resposta.tipo == "presidente"){

              alert("aaaaaaaaaa");
            }

            if(resposta.tipo == "Senador"){

              alert("aaaaaaaaaa");
            }
              // Modifique o src da tag img
              
          } else if (digito1 == '' && digito2 == '' && digito3 == '' && digito4 == '') {
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
      _token: '{{ csrf_token() }}'
  });

  xhr.setRequestHeader('X-CSRF-TOKEN', '{{ csrf_token() }}');

  xhr.send(data);
  

  function getFromViews() {
    var digito1 = document.getElementById('digito1').value;
    var digito2 = document.getElementById('digito2').value;
    var digito3 = document.getElementById('digito3').value;
    var digito4 = document.getElementById('digito4').value;
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
    return { digito1, digito2, digito3, digito4, errado, nulo, instrucoes, regua, imgCandidato, cabecalho, candidato, candidatoLabel, partido, partidoLabel };
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

