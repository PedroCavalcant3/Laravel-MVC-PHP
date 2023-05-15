function inserir(valor) {
  var valor1 = document.getElementById("cxNumero1").value;
  var valor2 = document.getElementById("cxNumero2").value;
  var valor3 = document.getElementById("cxNumero3").value;
  var valor4 = document.getElementById("cxNumero4").value;

  if (valor1 == "") {
      document.getElementById("cxNumero1").value = valor;
  } else if (valor2 == "") {
      document.getElementById("cxNumero2").value = valor;
  }
  else if (valor3 == "") {
    document.getElementById("cxNumero3").value = valor;
}
else if (valor4 == "") {
  document.getElementById("cxNumero4").value = valor;
}
}

function corrigir() {

  const campos = ["cxNumero1","cxNumero2","cxNumero3","cxNumero4"]

  for (let i = (campos.length - 1); i < campos.length; i--) {
    const valor = document.getElementById(campos[i]).value;

    if (valor != "") {
      document.getElementById(campos[i]).value = "";
      break;
    }
  }
}

/*$(function (){
  $(document).ready(function() {
    verificarURL().then(function(urlRecuperada){
      url = urlRecuperada;
      recuperarCargo().then(function(cargoRecuperado) {
        cargo = cargoRecuperado;
        verificaAcessibilidade().then(function(acessibilidade) {
          habilitaAudio = acessibilidade;
          if (habilitaAudio) {
            $('#audioAtivado').show();
            descreverCargo();
            var intervaloOcioso = setInterval(verificaTempoOcioso, 1000);
            $(this).click(function(e) {
                tempoOcioso = 0;
            });
          } else {
            $('#audioAtivado').hide();
          }
        });
        
        turno = $('#codigoCargo').data('turno');
        urlListaCandidatos = (turno == 1 ? 'json/candidatos.json' : 'json/candidatosT2.json');
        urlListaPartidos  = (turno == 1 ? 'json/partidos.json' : 'json/partidosT2.json');
        
        carregarPartidosConcorrentes(cargoRecuperado);
      });
    });

    //código para bloquear o usuário de ficar navegando entre os cargos através do history
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function() {
      history.pushState(null, null, document.URL);
    });
  });

  var verificaAcessibilidade = function() {
    var habilitaAudio = JSON.parse(localStorage.getItem('sevin_sv_habilitaAudio'));
    return new Promise(function(resolve, reject){
      if (habilitaAudio == null) {
        notifica('information', 'Deseja habilitar a audiodescrição durante a votação?<br />', [
          {text: 'Sim', addClass: 'btn-noty', onClick: function($noty) {
              habilitaAudio = true;
              localStorage.setItem('sevin_sv_habilitaAudio', JSON.stringify(true));
              resolve(habilitaAudio);
              $noty.close();
            }
          },
          {text: 'Não', addClass: 'btn-noty', onClick: function($noty) {
              habilitaAudio = false;
              localStorage.setItem('sevin_sv_habilitaAudio', JSON.stringify(false));
              resolve(habilitaAudio);
              $noty.close();
            }
          }
        ]);
      } else {
        resolve(habilitaAudio);
      }
    });
  }

  var verificaTempoOcioso = function() {
    tempoOcioso = tempoOcioso + 1;

    if (tempoOcioso > 10) {
      tempoOcioso = 0;
      descreverCargo();
    }
  }

  //Tratamento para execução dos áudios de um cargo para outro - inter.mp3 / inter.wav
    var endereco = location.href;
    if (endereco.indexOf("?") > 0) {
        var arr = endereco.split('?');
        var param = arr[1].split("=");
        //Verifica se audio igual a um, isso aciona o play do audio
        if (param[0] == "audio" && param[1] == 1){
            var song = $('#audioInter');
			try { song.get(0).play(); } catch(e){}
        }
    }
    $( ".listaConcorrentes" ).animate({
                top: "97"
       }, 3000, function() {
        $("#ajuda").show();
    });

    //Definição para todos os botões de alteração do mouse para mão
    for(i = 0; i <= 9; i++){
        $('#n_' + i).css('cursor', 'pointer');
    }
    $('#branco').css('cursor', 'pointer');
    $('#corrige').css('cursor', 'pointer');
    $('#confirma').css('cursor', 'pointer');

    //pulsar as bordas da caixa de número na entrada de cada cargo
    $("#cxNumero1").effect( "pulsate", {times:40}, 50000 );

    //Cor das letras que ficam piscando
    var properties = {
       color : '#808080'
    };

    //Pulsar os avisos de nulo, branco e voto de legenda
    var el = $('#avisoNulo,#avisoBranco,#obs,#avisoLegenda,#avisoConferirVoto');
    el.pulse(properties, {
        duration : 1000,
        pulses : 20000
    });

    $("#libras").css("display", "block");

    $(this).mousedown(function (e) {
      var ide = e.target.id;
      pressionarTecla(ide);
    });

    $(this).keydown(function (e) {
        converterTeclado(e).then(function(ide) {
        if (ide != '' && ide != undefined) {
          pressionarTecla(ide);
        }
      });
    });

    $(this).mouseup(function (e) {
      var ide = e.target.id;
      despressionarTecla(ide);
    });

    $(this).keyup(function (e) {
      converterTeclado(e).then(function(ide) {
        if (ide != '' && ide != undefined)  
          despressionarTecla(ide);
      });
    });
  
   $(".listaConcorrentes").on("click", ".partidoInfo a", function(){
      event.preventDefault();
      $('.partidoHeader').hide();
      $('.partidoInfo').hide();
      $('#fecharImagem').show();
      $('#paginas').attr('href', $(this).attr('href'))
      $('#paginas').show();
      $('#p1a').show();
      $('#p2i').show();
      carregarCandidatosConcorrentes($(this).attr('href'));
  });

  $("#p1i").click(function(){
    $('#paginas').show();
    $('#p1a').show();
    $('#p2i').show();
    $('#p1i').hide();
    $('#p2a').hide();
    var caminho = $('#paginas').attr('href');
    carregarCandidatosConcorrentes(caminho);
  });

  $("#p2i").click(function(){
    $('#paginas').show();
    $('#p1i').show();
    $('#p2a').show();
    $('#p1a').hide();
    $('#p2i').hide();
    var caminho = $('#paginas').attr('href');
    caminho = caminho.substring(0, caminho.length - 4) + '2.png';
    carregarCandidatosConcorrentes(caminho);
  });

  $("#fecharImagem").click(function(){  
      $('#p1a').hide();
      $('#p1i').hide();
      $('#p2a').hide();
      $('#p2i').hide();
      $('#paginas').hide();
      $('.partidoHeader').show();
      $('.partidoInfo').show();
      $('#imagemCandidatos').hide();
      $('#fecharImagem').hide();
  });

  $('#imagemCandidatos').click(function(){
      notifica('information','Digite os números do candidato ou clique no teclado da urna. <br /><br />[ FECHAR ]');
  });

  });

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    var sleep1s = async function() {
      await sleep(1000);
    }

    var tecladoBloqueado = false;

    var exibirAvisoConferirVoto = async function(qteCandidatos = 1) {
      tecladoBloqueado = true;
      $("#habilitaConfirma").text("false");
      $("#habilitaNumeros").text("false");
      $("#habilitaCorrige").text("false");
      $("#instrucoes").hide();
      if (qteCandidatos == 1) {
        $("#avisoConferirVoto").css("left", "120px");
      } else if (qteCandidatos == 2) {
        $("#avisoConferirVoto").css("left", "70px");
      } else if (qteCandidatos == 3) {
        $("#avisoConferirVoto").css("left", "20px");
      }
      $("#avisoConferirVoto").show();
      await sleep(1000);
      $("#avisoConferirVoto").hide();
      $("#restoVerde0").hide();
      $("#restoVerde1").show();
      $("#instrucoes").show();
      $("#habilitaConfirma").text("true");
      $("#habilitaNumeros").text("false");
      $("#habilitaCorrige").text("true");
      tecladoBloqueado = false;
    }

    const DIRETORIO_SONS = "sons/";
    const DIRETORIO_IMAGENS = "image/";
    const TECLA_BRANCO = "B";
    const TECLA_CORRIGE = "Backspace";
    const TECLA_CONFIRMA = "Enter";
    
    var audio = new Audio();
    var volume = JSON.parse(localStorage.getItem('sevin_sv_volumeAcessibilidade'));
    if (volume != '') {
      audio.volume = volume;
    } else {
      audio.volume = 0.6;
    }
    
    var cargo;
    var candidatoEscolhido;
    var url;
    var turno;
    var urlListaCandidatos;
    var urlListaPartidos;
    var tempoOcioso = 0;
    var habilitaAudio = false;
    var votoBranco = false;
    var candidatoJaEscolhido = false;

    var notifica = function generate(type,texto, botoes) {
        var n = noty({
            text        : texto,
            type        : type,
            buttons     : botoes,
            dismissQueue: true,
            force       : false,
            killer      : true,
            modal       : true,
            layout      : 'center',
            theme       : 'defaultTheme',
            maxVisible  : 1,
        });
    }

    var converterTeclado = function(e) {
      return new Promise(function(resolve, reject) {
        var ide;
        if (e.key == TECLA_CORRIGE.valueOf()) {
          e.preventDefault();
          ide = "corrige";
        } else if (e.key == TECLA_CONFIRMA.valueOf()) {  
          ide = "confirma";
        } else if (e.key.toUpperCase() == TECLA_BRANCO.valueOf()) {
          ide = "branco";
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.which >= 96 && e.which <= 105)){
          ide = "n_" + e.key;
        }
        resolve(ide);
      });
    };

    var confirmandoLegenda = false;

    var pressionarTecla = function(ide) {


      //Aqui serão feitas as ações quando se aperta o botão CONFIRMA
      if(ide == "confirma"){
        $("#libras").css("display", "none");
        if($("#habilitaConfirma").text() == "true") {
          
          numeroDigitado = "";
          var caixas =  $('.cxNumero');
          if (caixas.length > 0) {
            caixas.each(function() {
              if ($(this).text().length > 0) {
                numeroDigitado +=$(this).text();
              }
            });
          }
          var brancoPressionado = $("#avisoBranco").css('display').toLowerCase() == 'block';
          
          if (!brancoPressionado && numeroDigitado.length != cargo.quantidade_digitos && !confirmandoLegenda) {
            var num = $("#cxNumero1").text() + $("#cxNumero2").text();
            verificarPartido(num, cargo).then(function(existe) {
              if (existe) {
                $("#avisoLegenda").show();
              } else {
                $("#partidoLabel").hide();
                $("#partidoNome").hide();
                $("#avisoErrado").show();
                $("#avisoConferirVoto").css("left", "120px");
                $("#avisoNulo").show();
                $("#avisoLegenda").hide();
              }
            });
            $("#obs").hide();
            exibirAvisoConferirVoto();
            confirmandoLegenda = true;
            return;
          }

          $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide + "_down.jpg");
          var href = $('#confirma').data("proximo");
          if ($('#confirma').data("proximo") == "senadorEscolha2.html") {
            var num = $("#cxNumero1").text() + $("#cxNumero2").text() + $("#cxNumero3").text();
            href = href + "?votoSenador1=" + num;
          } 

          if (habilitaAudio) {
            var playlist = [];
            playlist.push(DIRETORIO_SONS + "tecC.mp3");
            playlist.push($('#audioInter').get(0).children[0].src);
            tocar(playlist).then(function(){
              $(location).attr('href', href);
            });
          } else {
            try { $('#audioInter').get(0).play(); } catch(e){}
            setTimeout(function(){ location.href = href; }, $('#audioInter').get(0).duration * 1000);
          }
        } else {
          try { $('#audioOps').get(0).play(); } catch(e){}
          if (!tecladoBloqueado) {
            if (cargo.nome == "prefeito" || cargo.nome == "senador" || cargo.nome == "governador" || cargo.nome == "presidente") {
              notifica('information','Para <strong>CONFIRMAR</strong> é necessário digitar o número do candidato<br /> ou votar em BRANCO.<br /><br />[ FECHAR ]');
            } else {
              notifica('information','Para <strong>CONFIRMAR</strong> é necessário digitar pelo menos o <br />número do partido<br /> ou votar em BRANCO.<br /><br />[ FECHAR ]');
            }
          }
          if ($("#avisoConferirVoto").css("display") == "none") {
            $("#libras").css("display", "block");
          }
        }
      }
      confirmandoLegenda = false;

      if(ide.substring(0, 2) == 'n_'){
        $("#libras").css("display", "none");

        //desabilitar utilização de números 
        if($("#habilitaNumeros").text() == "false"){
          try { $('#audioOps').get(0).play(); } catch(e){}
          notifica('information','O número do candidato já está completo.<br />Não é possível utilizar teclas numéricas neste momento.<br /><br />[ FECHAR ]');
          return false;
        }
           
        //Flag utilizada para habilitar/desabilitar utilização do botao Corrige
        $("#habilitaCorrige").text("true");
   
        matriz = ide.split("_");
        $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide.substr(0, 1) + ide.substr(2, 1) + "_down.jpg"); 

        if($("#cxNumero1").text().length == 0){
          $("#restoVerde1").hide();
          $("#restoVerde0").show();
          $("#regua").hide();
        } else if (cargo.quantidade_digitos == 2) {
          $("#regua").show();
        }

        if($("#cxNumero1").text().length == 0){
            $("#cxNumero1").text(matriz[1]);
            $("#cxNumero1").finish();
            $("#cxNumero2").effect( "pulsate", {times:20}, 25000 );
            if (habilitaAudio) {
              tocar([DIRETORIO_SONS + "tec" + matriz[1] + ".mp3"]);
            }
        } else if($("#cxNumero2").text().length == 0){
            $("#cxNumero2").text(matriz[1]);
            $("#cxNumero2").finish();
            $("#cxNumero3").effect( "pulsate", {times:20}, 25000 );
            num = $("#cxNumero1").text() + $("#cxNumero2").text();
            if (cargo.quantidade_digitos == 2) {
              $("#habilitaNumeros").text("false");
              habilitaInfo();
              mostrarPartido(num); 
              mostrarCandidato(num, cargo.nome)
            } else if (cargo.aceitaVotoLegenda) {
              habilitaInfo();
              mostrarPartido(num);
            }
            if (habilitaAudio) {
              tocar([DIRETORIO_SONS + "tec" + matriz[1] + ".mp3"]).then(function() {
                if (cargo.aceitaVotoLegenda || cargo.quantidade_digitos == 2) {
                  descreverCargo();
                }
              });
            } 
        } else if($("#cxNumero3").text().length == 0){
            $("#cxNumero3").text(matriz[1]);
            $("#cxNumero3").finish();
            $("#cxNumero4").effect("pulsate", {times:20}, 25000 );
            num = $("#cxNumero1").text() + $("#cxNumero2").text() + $("#cxNumero3").text();
            if (cargo.quantidade_digitos == 3) {
              $("#habilitaNumeros").text("false");
              habilitaInfo();
              mostrarPartido(num.substring(0, 2));
              mostrarCandidato(num, cargo.nome, (url.indexOf("senadorEscolha2") == -1? 1 : 2));
              if (habilitaAudio) {
                tocar([DIRETORIO_SONS + "tec" + matriz[1] + ".mp3"]).then(function() {
                    descreverCargo();
                });
              }
            } else if (habilitaAudio) {
              tocar([DIRETORIO_SONS + "tec" + matriz[1] + ".mp3"]);
            }
        } else if($("#cxNumero4").text().length == 0){
            $("#cxNumero4").text(matriz[1]);
            $("#cxNumero4").finish();
            $("#cxNumero5").effect( "pulsate", {times:20}, 25000 );
            num = $("#cxNumero1").text() + $("#cxNumero2").text() + $("#cxNumero3").text() + $("#cxNumero4").text()
            if (cargo.quantidade_digitos == 4) {
              $("#habilitaNumeros").text("false");
              habilitaInfo();
              mostrarCandidato(num, cargo.nome);
              if (habilitaAudio) {
                tocar([DIRETORIO_SONS + "tec" + matriz[1] + ".mp3"]).then(function() {
                  descreverCargo();
                });
              } 
            } else if (habilitaAudio) {
              tocar([DIRETORIO_SONS + "tec" + matriz[1] + ".mp3"]);
            }
        } else if($("#cxNumero5").text().length == 0){
            $("#cxNumero5").text(matriz[1]);
            $("#cxNumero5").finish();
            $("#habilitaNumeros").text("false");
            num = $("#cxNumero1").text() + $("#cxNumero2").text() + $("#cxNumero3").text() + $("#cxNumero4").text()  + $("#cxNumero5").text();
            mostrarCandidato(num, cargo.nome);
            if (habilitaAudio) {
              tocar([DIRETORIO_SONS + "tec" + matriz[1] + ".mp3"]).then(function() {
                descreverCargo();
              });
            }
        }
    }

    //Aqui serão feitas as ações quando se aperta o botão BRANCO
    if(ide == "branco"){
      $("#libras").css("display", "none");
      if($("#cxNumero1").text().length == 0){
        votoBranco = true;
        exibirAvisoConferirVoto();
        $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide + "_down.jpg");
        $('#cxFoto').hide();
        $('#cxFotoVice').hide();
        $('#numeros').hide();
        $('#candidato').hide();
        $('#partidoNome').hide();
        $('#partidoLabel').hide();
        $('#avisoErrado').hide();
        $('#avisoLegenda').hide();
        $('#obs').hide();
        $('#avisoNulo').hide();
        $('#avisoInexistente').hide();
        $("#audioAtivado").hide();
        $('#avisoBranco').show();
        $('#regua').css("width","545");
        $("#cabecalho").show();
        $("#regua").show();
        //$("#instrucoes").show();
        //Flag utilizada para habilitar/desabilitar o botao Confirma
        $("#habilitaConfirma").text("true");
        //Flag utilizada para habilitar/desabilitar utilização dos botoes numéricos
        //$("#habilitaNumeros").text("false");
        //Flag utilizada para habilitar/desabilitar utilização do botao Corrige
        //$("#habilitaCorrige").text("true");
        $('#audioAtivado').hide();
        //Se o áudio da urna estiver ligado, descreve as teclas digitadas
        if (habilitaAudio) {
          tocar([DIRETORIO_SONS + "tecB.mp3"]).then(
            descreverCargo()
          )
        }
        return false;
      } else{
        try { $('#audioOps').get(0).play(); } catch(e){}
        if (!tecladoBloqueado) {
          notifica('information','Para votar em <strong>BRANCO</strong> <br /> o campo de voto deve estar vazio.<br /> Aperte CORRIGE para apagar o campo de voto.<br /><br />[ FECHAR ]');
        }
      }
    }

      //Aqui serão feitas as ações quando se aperta o botão CORRIGE
      if(ide == "corrige"){
        //$("#libras").css("display", "none");
        if($("#habilitaCorrige").text() == "true"){
          votoBranco = false;
          candidatoJaEscolhido = false;
          $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide + "_down.jpg");
          $('#cxFoto').hide();
          $('#candidato').hide();
          $('#labelCanditato').hide();
          $("#cxFotoVice").hide();
          $("#labelVice").hide();
          $("#viceLabel").hide();
          $("#viceNome").hide();
          $("#fotoVice").hide();
          $('#cxFotoSup1').hide();
          $('#labelSuplente1').hide();
          $('#suplente1Label').hide();
          $('#suplente1Nome').hide();
          $('#cxFotoSup2').hide();
          $('#labelSuplente2').hide();
          $('#suplente2Label').hide();
          $('#suplente2Nome').hide();
          $('#candidatoNome').text('');
          $('#partidoNome').text('');
          $('#foto').attr('src', '');
          $("#cxFotoVice").attr('src', '');
          $('#cxNumero1').text('');
          $('#cxNumero2').text('');
          $('#cxNumero3').text('');
          $('#cxNumero4').text('');
          $('#cxNumero5').text('');
          $('#numeroLabel').hide();
          $('#numeros').show();
          $('#partidoNome').text('');
          $('#partidoLabel').hide();
          $('#cabecalho').hide();
          $("#regua").hide();
          $("#instrucoes").hide();
          $('#avisoBranco').hide();
          $('#avisoErrado').hide();
          $('#avisoRepetido').hide();
          $('#avisoNulo').hide();
          $('#avisoInexistente').hide();
          $('#avisoLegenda').hide();
          $("#habilitaConfirma").text("false");
          $("#cxNumero2").finish();
          $("#cxNumero3").finish();
          $("#cxNumero4").finish();
          $("#cxNumero5").finish();
          $("#cxNumero1").effect( "pulsate", {times:20}, 25000 );

          flexaoGenero($("#cargo").text(),"M", null, true);

          $("#habilitaNumeros").text("true");
          //Flag utilizada para habilitar/desabilitar utilização do botao Corrige
          $("#habilitaCorrige").text("false");
          
          //Se o áudio da urna estiver ligado, descreve as teclas digitadas
          if (habilitaAudio) {
            tocar([DIRETORIO_SONS + "tecD.mp3"]).then(function() {
              descreverCargo()
            });
          
            $('#audioAtivado').show();
          }
          $("#libras").css("display", "block");
          return false;
        } else {
            try { $('#audioOps').get(0).play(); } catch(e){}
            if (!tecladoBloqueado) {
              notifica('information','Para utilizar o <strong>CORRIGE</strong> <br /> você deve ter digitado algum número<br /> ou ter votado em BRANCO. <br /><br />[ FECHAR ]');
            }
            if ($("#avisoConferirVoto").css("display") == "none") {
              $("#libras").css("display", "block");
            }
        }
      }
    }

    var despressionarTecla = function(ide) {
      if(ide == "branco"){
        $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide + ".jpg");
      }

      if(ide == "corrige"){
          $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide + ".jpg");
      }

      if(ide == "confirma"){
          $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide + ".jpg");
      }

      if(ide.substring(0, 2) == 'n_'){
          $('#' + ide).attr("src", DIRETORIO_IMAGENS + ide.substr(0, 1) + ide.substr(2, 1) + ".jpg");
      }
    }

    var mostrarPartido = function(num){
      verificarPartido(num, cargo).then(function(existe) {
        if (existe) {
          $("#partidoLabel").show();
          $("#partidoNome").show();
          if (cargo.aceitaVotoLegenda) {
            $("#obs").show(); 
          }
        } else {
          $("#partidoLabel").hide();
          $("#partidoNome").hide();
          $("#avisoErrado").show();
          $("#avisoConferirVoto").css("left", "120px");
          $("#avisoNulo").show();
          $("#avisoLegenda").hide();
          $("#obs").hide();
        }
      });
    };

    var obterTipo = function() {
      switch (localStorage.getItem('sevin_sv_tipo')) {
        case 'G': return 'Geral';
        case 'M': return 'Municipal';
        case 'D': return 'DistritoFederal';
        case 'E': return 'Exterior';
        default: return '';
      }
    }

    var obterTurno = function() {
      switch (localStorage.getItem('sevin_sv_turno')) {
        case '1': return 'PrimeiroTurno';
        case '2': return 'SegundoTurno';
        default: return '';
      }
    }

    var verificarTipoTurnoValidos = function() {
      return obterTipo() != '' && obterTurno() != '';
    }

    //Garante que o usuário começou a votação do início
    var verificarURL = function() {
      return new Promise(function(resolve, reject) {
      var tipo = obterTipo();
      var turno = obterTurno();
      var origem = turno + tipo;
      var iniciouVotacao = (localStorage.getItem('sevin_sv_habilitaAudio') == null ? false : true);
      if (origem == '' || (!iniciouVotacao && 
          origem != 'PrimeiroTurnoMunicipal' && 
          origem != 'SegundoTurnoMunicipal' && 
          origem != 'PrimeiroTurnoGeral' && 
          origem != 'SegundoTurnoGeral' &&
          origem != 'PrimeiroTurnoDistritoFederal' && 
          origem != 'SegundoTurnoDistritoFederal' &&
          origem != 'PrimeiroTurnoExterior' && 
          origem != 'SegundoTurnoExterior')) {
        window.location.href = "/";
      }
      resolve(origem);
      }); 
    };

    //Verifica se o partido existe
    var verificarPartido = function(num, cargo) {
      return new Promise(function(resolve, reject){
        $.getJSON(urlListaPartidos, function(listaPartidosCargos){
          var partidoExiste = false;
          var partidos = listaPartidosCargos[cargo.nome];
          for (let i = 0; i < partidos.length; i++) {
            if (partidos[i].numero == num) {
              $("#partidoNome").text(partidos[i].sigla);
              partidoExiste = true;
            }
          };
          resolve(partidoExiste);
        });
      });
    };

    //Verifica se o candidato existe
    var verificarCandidato = function(num, cargo) {
      return new Promise(function(resolve, reject) {
        candidatoExiste = false;
        $.getJSON(urlListaCandidatos, function(listaCargos) {
          var candidatos = listaCargos[cargo.nome];
          for (let i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == num) {
              candidatoExiste = true;
              break;
            }
          }
          resolve(candidatoExiste);
        });
      });
    };


    var mostrarCandidato = function(num,nomeCargo,escolha){

      var qteCandidatos = 0;
      if (nomeCargo == "senador") {
        qteCandidatos = 3;
      } else if (nomeCargo == "prefeito" || nomeCargo == "governador" || nomeCargo == "presidente") {
        qteCandidatos = 2;
      } else {
        qteCandidatos = 1;
      }
      exibirAvisoConferirVoto(qteCandidatos);

      var candidatoExiste = false;
      var canRepetido = false;
      var numSuplente1;
      var numSuplente2;
      var numVice;
      var numeroPart;

      var url = location.href;
      var votoSenador1=0;

      if (url.indexOf("senadorEscolha2") > 0) {
          var arr1 = url.split('?');
          var param1 = arr1[1].split("=");
          if (param1[0] == "votoSenador1"){
              votoSenador1 =  param1[1];
          }
      }

      $.getJSON(urlListaCandidatos, function(c) {
        $.each(c, function(i, field){
          if(i == nomeCargo){
            $.each(field, function(i, campo){
              //Neste caso, o candidato esta na lista de candidatos do json
              if(campo.numero == num){
                candidatoEscolhido = campo;
                $("#candidatoNome").text(campo.nome);
                //Recupera as fotos no sub-diretório
                if(nomeCargo == 'vereador'){
                  $("#foto").attr("src", DIRETORIO_IMAGENS + "figuras/111x155/2020/" + campo.foto + ".png");

                }else if(nomeCargo == 'prefeito'){
                  $("#foto").attr("src", DIRETORIO_IMAGENS + "figuras/161x225/2020/" + campo.foto + ".png");

                }else{
                  $("#foto").attr("src", DIRETORIO_IMAGENS + "figuras/135x145/24bpp/" + campo.foto + ".jpg");
                }
                $("#obs").hide();

                flexaoGenero(nomeCargo,campo.sexo,escolha, true);

                if(nomeCargo == "senador"){
                  numSuplente1 = num + 'a';
                  numSuplente2 = num + 'b';

                } else if(nomeCargo == "governador"){
                  numVice = num + 'a';
                } else if(nomeCargo == "presidente"){
                  numVice = num + 'a';

                } else if(nomeCargo == "prefeito"){
                  numVice = num + 'a';
                }
                candidatoExiste = true;
              }

              if(numSuplente1 != '' && !canRepetido){
                if(campo.numero == num + 'a'){
                  $("#suplente1Nome").text(campo.nome);
                  $("#fotoSup1").attr("src", DIRETORIO_IMAGENS + "figuras/95x105/24bpp/" + campo.foto + ".jpg");
                }
              }

              if(numSuplente2 != '' && !canRepetido){
                if(campo.numero == num + 'b'){
                  $("#suplente2Nome").text(campo.nome);
                  $("#fotoSup2").attr("src", DIRETORIO_IMAGENS + "figuras/95x105/24bpp/" + campo.foto + ".jpg");                
                }
              }

              if(numVice != '' && !canRepetido){
                if(campo.numero == num + 'a'){
                  $("#viceNome").text(campo.nome);
                  if(nomeCargo == "prefeito"){
                    $("#fotoVice").attr("src", DIRETORIO_IMAGENS + "figuras/161x225/2020/" + campo.foto + ".png");
                  } else {
                    $("#fotoVice").attr("src", DIRETORIO_IMAGENS + "figuras/95x105/24bpp/" + campo.foto + ".jpg");
                  }
                  flexaoGenero(nomeCargo, campo.sexo, escolha, false)
                }
              }
            });
          }
        });

        if(!candidatoExiste){
    				//neste ponto é preciso identificar para os cargos proporcionais se os dois primeiros números são de algum partido e portanto teremos voto de legenda.
            numeroPart = num.substring(0, 2);
            verificarPartido(numeroPart, cargo).then(function(existe){
              if(existe) {
                if(nomeCargo == "senador"){
                  $('#candidato').hide();
                  $("#cxFoto").hide();
                  $('#numeros').show();
                  $("#numeroLabel").show();
                  $("#cabecalho").show();
                  $("#regua").show();
                  //$("#instrucoes").show();
                  $("#audioAtivado").hide();
                  $("#avisoInexistente").hide();
                  $("#avisoLegenda").hide();
                  $('#regua').css("width","545");
  
                  $("#partidoLabel").hide();
                  $("#partidoNome").hide();
                  $("#avisoLegenda").hide();
                  $("#avisoErrado").show();
                  $("#avisoRepetido").hide();
                  $("#obs").hide();
                  $("#avisoConferirVoto").css("left", "120px");
                  $("#avisoNulo").show();
                }else{
                  $('#candidato').hide();
                  $("#cxFoto").hide();
                  $('#numeros').show();
                  $("#numeroLabel").show();
                  $("#cabecalho").show();
                  $("#regua").show();
                  //$("#instrucoes").show();
                  $("#audioAtivado").hide();
                  $("#avisoInexistente").show();
                  $("#avisoLegenda").show();
                  $('#regua').css("width","545");
  
                  $("#partidoLabel").show();
                  $("#partidoNome").show();
                  $("#avisoLegenda").show();
                  $("#avisoErrado").hide();
                  $("#avisoRepetido").hide();
                  $("#obs").hide();
                  $("#avisoNulo").hide();
                 }
             }else{
                  $('#candidato').hide();
                  $("#cxFoto").hide();
                  $('#numeros').show();
                  $("#numeroLabel").show();
                  $("#cabecalho").show();
                  $("#regua").show();
                  //$("#instrucoes").show();
                  $("#avisoLegenda").show();
                  $('#regua').css("width","545");
  
                  $("#partidoLabel").hide();
                  $("#partidoNome").hide();
                  $("#avisoLegenda").hide();
                  $("#avisoInexistente").hide();
                  $("#avisoRepetido").hide();
                  $("#avisoErrado").show();
                  $("#obs").hide();
                  $("#avisoConferirVoto").css("left", "120px");
                  $("#avisoNulo").show();
                }
            }); 
          }else{ //Candidato existe
				        $("#numeroLabel").show();
                $("#cxFoto").show();
                $("#labelCanditato").show();
			          $('#candidato').show();
                $("#candidatoLabel").show();
                $("#candidatoNome").show();
                $("#partidoLabel").show();
                $("#partidoNome").show();
        				$("#cabecalho").show();
        				$("#regua").show();
                //$("#instrucoes").show();
                $('#obs').hide();
                $("#audioAtivado").hide();
   			        $('#regua').css("width","545");

		            if(nomeCargo == "senador"){
                    $("#fotoSup1").show();
            				$("#cxFotoSup1").show();
                    $("#labelSuplente1").show();
            				$("#suplente1Label").show();
            				$("#suplente1Nome").show();
            				$("#fotoSup2").show();
            				$("#cxFotoSup2").show();
                    $("#labelSuplente2").show();
            				$("#suplente2Label").show();
                    $("#suplente2Nome").show();
                    $('#obs').hide();
            	      $('#regua').css("width","385");

                }else if(nomeCargo == "governador"){
          					$("#fotoVice").show();
                    $("#cxFotoVice").show();
                    $("#labelVice").show();
                    $("#viceLabel").show();
                    $("#viceNome").show();
          					$("#avisoInexistente").hide();
                    $("#avisoLegenda").hide();
                    $('#obs').hide();
          					$('#regua').css("width","465");

                }else if(nomeCargo == "presidente"){
    	              $("#fotoVice").show();
                    $("#cxFotoVice").show();
                    $("#labelVice").show();
                    $("#viceLabel").show();
                    $("#viceNome").show();
                    $('#obs').hide();
    	              $('#regua').css("width","465");

                }else if(nomeCargo == "prefeito"){
		                $("#fotoVice").show();
                    $("#cxFotoVice").show();
                    $("#labelVice").show();
                    $("#viceLabel").show();
                    $("#viceNome").show();
                    $('#obs').hide();
			              $('#regua').css("width","465");
				            }
               }

               if(votoSenador1 == num && candidatoExiste){
                 canRepetido = true;
                 $("#cargo").text("Senador - 2ª vaga");
                 candidatoRepetido();
               }
        });
    };

    var habilitaInfo = function(){
        $("#habilitaConfirma").text("true");
        $("#numeroLabel").show();
        $("#cabecalho").show();
        $("#regua").show();
        $("#instrucoes").show();
        $("#audioAtivado").hide();
    }

    var flexaoGenero = function(cargo,sexo,escolha,titular){
      if(sexo == "F"){
        if(cargo == "deputadoFederal"){
          $("#cargo").text("Deputada Federal");
          $("#labelCanditato").text("Deputada Federal");
        }
        if(cargo == "deputadoEstadual"){
          $("#cargo").text("Deputada Estadual");
          $("#labelCanditato").text("Deputada Estadual");
        }
        if(cargo == "deputadoDistrital"){
          $("#cargo").text("Deputada Distrital");
          $("#labelCanditato").text("Deputada Distrital");
        }
        if(cargo == "senador"){
          if (titular) {
            $("#cargo").text("Senadora");
            $("#labelCanditato").text("Senadora");
          }
        }
        if(cargo == "governador"){
          if (titular) {
            $("#cargo").text("Governadora");
            $("#labelCanditato").text("Governadora");
          } else {
            $("#labelVice").text("Vice-Governadora");
            $("#viceLabel").text("Vice-Governadora:");
          }
        }
        if(cargo == "vereador"){
          $("#cargo").text("Vereadora");
          $("#labelCanditato").text("Vereadora");
        }
        if(cargo == "prefeito"){
          if (titular) {
            $("#cargo").text("Prefeita");
            $("#labelCanditato").text("Prefeita");
          } else {
            $("#labelVice").text("Vice-Prefeita");
            $("#viceLabel").text("Vice-Prefeita:");
          }
        }
      }else{
        if(cargo == "deputadoFederal" || cargo == "Deputada Federal"){
          $("#cargo").text("Deputado Federal");
          $("#labelCanditato").text("Deputado Federal");
        }
        if(cargo == "deputadoEstadual" || cargo == "Deputada Estadual"){
          $("#cargo").text("Deputado Estadual");
          $("#labelCanditato").text("Deputado Estadual");
        }
        if(cargo == "deputadoDistrital" || cargo == "Deputada Distrital"){
          $("#cargo").text("Deputado Distrital");
          $("#labelCanditato").text("Deputado Distrital");
        }
        if(cargo == "Senadora"){
          if (titular) {
            $("#cargo").text("Senador");
            $("#labelCanditato").text("Senador");
          }
        }
        if(cargo == "Senadora - 1ª vaga"){
          if (titular) {
            $("#cargo").text("Senador - 1ª vaga");
            $("#labelCanditato").text("Senador");
          }
        }
        if(cargo == "Senadora - 2ª vaga"){
          if (titular) {
            $("#cargo").text("Senador - 2ª vaga");
            $("#labelCanditato").text("Senador");
          }
        }
        if(cargo == "Senador - 1ª vaga"){
          $("#cargo").text("Senador - 1ª vaga");
        }
        if(cargo == "Senador - 2ª vaga"){
          $("#cargo").text("Senador - 2ª vaga");
        }
        if(cargo == "governador" || cargo == "Governadora"){
          if (titular) {
            $("#cargo").text("Governador");
            $("#labelCanditato").text("Governador");
          } else {
            $("#labelVice").text("Vice-Governador");
            $("#viceLabel").text("Vice-Governador:");
          }
        }
        if(cargo == "vereador" || cargo == "Vereadora"){
          $("#cargo").text("Vereador");
          $("#labelCanditato").text("Vereador");
        }
        if(cargo == "prefeito" || cargo == "Prefeita"){
          if (titular) {
            $("#cargo").text("Prefeito");
            $("#labelCanditato").text("Prefeito");
          } else {
            $("#labelVice").text("Vice-Prefeito");
            $("#viceLabel").text("Vice-Prefeito:");
          }
        }
      }
    }

    var candidatoRepetido = function(){
      candidatoJaEscolhido = true;
      var qteCandidatos = 3;
      exibirAvisoConferirVoto(qteCandidatos);
      $('#candidato').hide();
      $("#cxFoto").hide();
      $('#numeros').show();
      $("#numeroLabel").show();
      $("#cabecalho").show();
      $("#regua").show();
      //$("#instrucoes").show();
      $("#avisoInexistente").hide();
      $("#avisoLegenda").hide();
      $('#regua').css("width","545");

      $("#partidoLabel").hide();
      $("#partidoNome").hide();
      $("#avisoLegenda").hide();
      $("#avisoErrado").hide();
      $("#avisoRepetido").show();
      $("#obs").hide();
      $("#avisoConferirVoto").css("left", "120px");
      $("#avisoNulo").show();

      $("#fotoSup1").hide();
      $("#cxFotoSup1").hide();
      $("#labelSuplente1").hide();
      $("#suplente1Label").hide();
      $("#suplente1Nome").hide();
      $("#fotoSup2").hide();
      $("#cxFotoSup2").hide();
      $("#labelSuplente2").hide();
      $("#suplente2Label").hide();
      $("#suplente2Nome").hide();
      $("#labelCanditato").hide();
    }

    var descreverCargo = function() {
      return new Promise(function(resolve, reject){
        recuperarNumeroDigitado().then(function(numeroDigitado){
          montarAudioCargo(cargo, numeroDigitado).then(function(playlist){
            tocar(playlist).then(function(){
              resolve();  
            });
          })
        });
      });  
    }

    var carregarPartidosConcorrentes = function(cargo) {
        $.getJSON(urlListaPartidos, function(listaPartidosCargos) { 
          let partidos = listaPartidosCargos[cargo.nome];
          let divPartidos = $('div.listaConcorrentes');
          for (let i = 0; i < partidos.length; i++) {
            divPartidos.append('<div class="partidoInfo"><a href="' + partidos[i].imagem + '"><div class="partidoSigla">' + partidos[i].numero + " " + partidos[i].sigla + '</div><div class="partidoDescricao">' + partidos[i].nome + '</div></a></div>');
          } 
          let larguraPartido = (100 / partidos.length) + "%";
          $('.partidoInfo').css('width', larguraPartido);
      });
    }

    var carregarCandidatosConcorrentes = function(urlImagem) {
      let larguraDiv = $('.listaConcorrentes').css('width');
      let alturaDiv = $('.listaConcorrentes').css('height');
      
      $('#imagemCandidatos').attr('src', urlImagem).css({width: larguraDiv, height: alturaDiv}).show();
    }
  
    var recuperarCargo = function() {
      return new Promise(function(resolve, reject) {
        $.getJSON('json/cargos.json', function(cargos) {
          var codigoCargo = $('#codigoCargo').val();
          var cargoVotacao;
    
          $.each(cargos, function(i, c) {
            if(c.codigo == codigoCargo) {
                cargoVotacao = c;
                resolve(cargoVotacao);
            }
          });
        });
      });
    }

    var recuperarNumeroDigitado = function() {
      return new Promise(function(resolve, reject) {
        var numerosDigitados = [];
        var caixas =  $('.cxNumero');
        if (caixas.length > 0) {
          caixas.each(function() {
            if ($(this).text().length > 0) {
              numerosDigitados.push($(this).text());
            }
          });
        }
        resolve(numerosDigitados);
      });
    }

    var montarAudioCargoChapa = function(cargo, num) {
      return new Promise(function(resolve, reject) {
        var playlist = [];
        var numVice, numSuplente1, numSuplente2, audioVice, audioSuplente1, audioSuplente2;
        if(cargo.nome == "senador") {
          numSuplente1 = num + 'a';
          numSuplente2 = num + 'b';
          $.ajaxSetup({ async: false });
          $.getJSON(urlListaCandidatos, function(listaCargos) {
            var candidatos = listaCargos[cargo.nome];
            var count = 0;
            for (let i = 0; i < candidatos.length && count < 2; i++) {
              if (candidatos[i].numero == numSuplente1) {
                audioSuplente1 = candidatos[i].audio;
                count++;
              } else if (candidatos[i].numero == numSuplente2) {
                audioSuplente2 = candidatos[i].audio;
                count++;
              }
            }
          });
          $.ajaxSetup({ async: true });
          playlist.push(DIRETORIO_SONS + 'cargo5a.mp3');
          playlist.push(DIRETORIO_SONS + audioSuplente1);
          playlist.push(DIRETORIO_SONS + 'cargo5b.mp3');
          playlist.push(DIRETORIO_SONS + audioSuplente2);
        } else if(cargo.nome == 'presidente' || cargo.nome == 'governador' || cargo.nome == 'prefeito') {
          numVice = num + 'a';
          $.ajaxSetup({ async: false });
          $.getJSON(urlListaCandidatos, function(listaCargos) {
            var candidatos = listaCargos[cargo.nome];
            for (let i = 0; i < candidatos.length; i++) {
              if (candidatos[i].numero == numVice) {
                audioVice = candidatos[i].audio;
                break;
              }
            }
          });
          $.ajaxSetup({ async: true });
          if (cargo.nome == 'presidente') {
            playlist.push(DIRETORIO_SONS + 'cargo1a.mp3');
          } else if(cargo.nome == "governador") {
            playlist.push(DIRETORIO_SONS + 'cargo3a.mp3');
          } else if(cargo.nome == "prefeito") {
            playlist.push(DIRETORIO_SONS + 'cargo11a.mp3');
          }
          playlist.push(DIRETORIO_SONS + audioVice);
        };
        resolve(playlist);
      });
    }

    var conferirVoto = true;

    var montarAudioCargo = function(cargo, numeroDigitado) {
      return new Promise(function(resolve, reject) {
        var playlist = [];
        //Aqui descreve o Voto em BRANCO
        if (votoBranco) {
          playlist.push(DIRETORIO_SONS + "confira_voto.mp3"); //Confira seu voto
          playlist.push(DIRETORIO_SONS + "frase06.mp3");   //Você está votando em branco para...
          playlist.push(DIRETORIO_SONS + cargo.audio);     //(cargo)
          playlist.push(DIRETORIO_SONS + "aperte_confirma_ou_corrige.mp3"); //Aperte confirma ou corrige.
          resolve(playlist);
        } else {
          //Informou todos os dígitos
          if (numeroDigitado.length == cargo.quantidade_digitos) {
            verificarCandidato(numeroDigitado.join(''), cargo)
              .then(function(existe) {
                 
              if (conferirVoto) {
                playlist.push(DIRETORIO_SONS + "confira_voto.mp3"); //Confira seu voto
                conferirVoto = false;
              }
              playlist.push(DIRETORIO_SONS + "frase04.mp3"); //Você está votando para
              playlist.push(DIRETORIO_SONS + cargo.audio);   //(cargo)
              if (existe) {
                //Candidato existente
                if (candidatoEscolhido.sexo == "M") {
                  playlist.push(DIRETORIO_SONS + "frase05.mp3");      //No candidato
                } else {
                  playlist.push(DIRETORIO_SONS + "na-candidata.wav"); //Na candidata
                }
                
                montarAudioTeclas(numeroDigitado).then(function(audioTeclas) {
                  playlist = playlist.concat(audioTeclas); //Inclui o áudio das teclas numéricas digitadas
                  if (candidatoJaEscolhido) {
                    playlist.push(DIRETORIO_SONS + "frase12.mp3"); //Candidato a Senador escolhido no primeiro voto
                    playlist.push(DIRETORIO_SONS + "frase13.mp3"); //Se apertar confirma, este voto será nulo.
                  } else {
                    if (typeof candidatoEscolhido.audio !== "undefined") {
                      playlist.push(DIRETORIO_SONS + candidatoEscolhido.audio); //(nome do candidato)
                    }
                    montarAudioCargoChapa(cargo, candidatoEscolhido.numero).then(function(pl) {
                      playlist = playlist.concat(pl);
                      playlist.push(DIRETORIO_SONS + "aperte_confirma_ou_corrige.mp3"); //Aperte confirma ou corrige. 
                      resolve(playlist);
                    })
                  }
                })
              } else {
                //Número completo + Candidato não existe
                numPartido = [];
                numPartido.push(numeroDigitado[0]); 
                numPartido.push(numeroDigitado[1]);
                //Verifica se o cargo permite voto em legenda
                if (cargo.aceitaVotoLegenda) {
                  verificarPartido(numeroDigitado[0] + "" + numeroDigitado[1], cargo)
                  .then(function(existe) {
                    if (existe) {
                      //Partido existe, descreve voto em legenda
                      playlist.push(DIRETORIO_SONS + "no_numero.mp3");                     //No número
                      montarAudioTeclas(numeroDigitado).then(function(audioTeclas) {
                        playlist = playlist.concat(audioTeclas);                           //(teclas numéricas digitadas)
                        playlist.push(DIRETORIO_SONS + "candidato_inexistente.mp3");       //Candidato inexistente
                        playlist.push(DIRETORIO_SONS + "votar_na_legenda.mp3");            //Aperte confirma para votar na legenda
                        montarAudioTeclas(numPartido).then(function(audioTeclas) { 
                          playlist = playlist.concat(audioTeclas);                         //(duas primeiras teclas numéricas digitadas)
                          montarAudioPartidos(numeroDigitado[0] + "" + numeroDigitado[1], cargo).then(function(audioPartido) {
                            playlist = playlist.concat(audioPartido);                      //(nome do partido)
                            playlist.push(DIRETORIO_SONS + "ou_corrige.mp3");              //ou corrige para reiniciar este voto
                            resolve(playlist);
                          });
                        });
                      });
                    } else {
                      //Partido não existe
                      playlist.push(DIRETORIO_SONS + "frase05.mp3");                       //No candidato
                      montarAudioTeclas(numeroDigitado).then(function(audioTeclas) { 
                        playlist = playlist.concat(audioTeclas);                           //(teclas numéricas digitadas)
                        playlist.push(DIRETORIO_SONS + "frase09.mp3");                     //Número errado
                        playlist.push(DIRETORIO_SONS + "frase13.mp3");                     // Se apertar confirma, este voto será nulo.
                        playlist.push(DIRETORIO_SONS + "aperte_confirma_ou_corrige.mp3"); // Aperte confirma ou corrige.
                        resolve(playlist);
                      });
                    }
                  });
                } else {
                  //Cargo não permite voto em legenda
                  playlist.push(DIRETORIO_SONS + "frase05.mp3"); //No candidato
                  montarAudioTeclas(numPartido).then(function(audioTeclas) {
                    playlist = playlist.concat(audioTeclas);
                    playlist.push(DIRETORIO_SONS + "frase09.mp3"); //Número errado
                    playlist.push(DIRETORIO_SONS + "frase13.mp3"); //Se apertar "CONFIRMA", esse voto será nulo
                    playlist.push(DIRETORIO_SONS + "aperte_confirma_ou_corrige.mp3"); // Aperte confirma ou corrige.
                    resolve(playlist);
                  });
                }
              }
            });
          } else if (cargo.aceitaVotoLegenda && numeroDigitado.length >= 2) {

            playlist.push(DIRETORIO_SONS + "confira_voto.mp3"); //Confira seu voto
            playlist.push(DIRETORIO_SONS + "frase04.mp3"); //Você está votando para
            playlist.push(DIRETORIO_SONS + cargo.audio);   //(cargo)
            //Informou mais que 2 dois dígitos para cargo que permite voto em legenda
            numPartido = [];
            numPartido.push(numeroDigitado[0]); 
            numPartido.push(numeroDigitado[1]);
            verificarPartido(numPartido.join(''), cargo)    
              .then(function(existe){
                if (existe) {
                  //Partido existente
                  var legendaVisivel = $('#avisoLegenda').css('display');
                  if (typeof legendaVisivel === "undefined" || legendaVisivel.toLowerCase() != 'block') {
                    playlist.push(DIRETORIO_SONS + "frase16.mp3"); // Digite os demais dígitos do seu candidato, ou aperte confirma para prosseguir, ou corrige para reiniciar este voto. 
                    resolve(playlist);
                  } else {
                    playlist.push(DIRETORIO_SONS + "no_numero.mp3");                     //No número
                    montarAudioTeclas(numeroDigitado).then(function(audioTeclas) {
                      playlist = playlist.concat(audioTeclas);                           //(teclas numéricas digitadas)
                      playlist.push(DIRETORIO_SONS + "votar_na_legenda.mp3");            //Aperte confirma para votar na legenda
                      montarAudioTeclas(numPartido).then(function(audioTeclas) { 
                        playlist = playlist.concat(audioTeclas);                         //(duas primeiras teclas numéricas digitadas)
                        montarAudioPartidos(numeroDigitado[0] + "" + numeroDigitado[1], cargo).then(function(audioPartido) {
                          playlist = playlist.concat(audioPartido);                      //(nome do partido)
                          playlist.push(DIRETORIO_SONS + "ou_corrige_seu_voto.mp3");     //ou corrige para reiniciar o seu voto
                          resolve(playlist);
                        });
                      });
                    });
                  }
                } else {
                  //Partido inexistente
                  playlist.push(DIRETORIO_SONS + "frase05.mp3"); //No candidato
                  montarAudioTeclas(numPartido).then(function(audioTeclas){
                    playlist = playlist.concat(audioTeclas);  //Inclui o áudio das duas primeiras teclas numéricas digitadas
                    playlist.push(DIRETORIO_SONS + "frase09.mp3"); //Número errado
                    playlist.push(DIRETORIO_SONS + "frase13.mp3"); //Se apertar "CONFIRMA", esse voto será nulo
                    playlist.push(DIRETORIO_SONS + "frase11.mp3"); //Aperte confirma para prosseguir, ou corrige para reiniciar este voto.
                    resolve(playlist);
                  });
                }
              });     
          } else {
            //Não apertou nenhuma tecla numérica
            playlist.push(DIRETORIO_SONS + "frase04.mp3"); //Você está votando para
            playlist.push(DIRETORIO_SONS + cargo.audio);   //(cargo)
            resolve(playlist);
          }
        }
      });
    }

    var montarAudioPartidos = function(num, cargo) {
      return new Promise(function(resolve, reject){
        $.getJSON(urlListaPartidos, function(listaPartidosCargos){
          audioPartido = [];
          var partidos = listaPartidosCargos[cargo.nome];
          for (let i = 0; i < partidos.length; i++) {
            if (partidos[i].numero == num) {
              audioPartido.push(partidos[i].audio);
              break;
            }
          }
          resolve(audioPartido);
        });
      });
    }

    var montarAudioTeclas = function(num) {
      audioTeclas = [];
      return new Promise(function(resolve, reject){
        if (num.length > 0) {
          for (let i = 0; i < num.length; i++) {
            audioTeclas.push(DIRETORIO_SONS + "tec" + num[i] + ".mp3");
          }
          resolve(audioTeclas);
        } else {
          resolve();
        }
      });
    }

    var tocar = function(playlist) {

      //Interrompe áudio que está sendo tocado
      if (audio.src != '' && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
      
      return new Promise(function(resolve, reject) {
        var i = 1;

        //Passa para o próximo áudio automaticamente
        audio.onended = function() {
          if (i < playlist.length) {
            audio.src = playlist[i];
            audio.play();
            tempoOcioso = 0;
            i++;
          } else {
            resolve();
          }
        }

        //Toca o primeiro áudio
        if (playlist.length > 0) {
          audio.src = playlist[0];
          audio.play();  
          tempoOcioso = 0;
        } else {
          resolve();
        }
      });    
    }
*/
