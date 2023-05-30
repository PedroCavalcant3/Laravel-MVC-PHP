

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="{{ app()->getLocale() }}" xml:lang="pt-br">
  <head>
    <title>Simulador</title>

    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=9">

    <link rel="stylesheet" href="css/governador.css">
    <link type="text/css" rel="stylesheet" href="css/urna.css">
    <script type="text/javascript" src="js/urna.js"></script>
    <script type="text/javascript" src="js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="js/lib/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/lib/jquery.pulse.min.js"></script>
    <script type="text/javascript" src="js/lib/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="js/lib/slick.min.js"></script>
    <script type="text/javascript" src="js/lib/jquery.noty.packaged.min.js"></script>
    
    <style type="text/css">
        .sr-only {position: absolute; width: 1px; height: 1px; padding:0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border:0}
        h1 { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
      </style>
    </head>
    <body onload="init()">
        <input type="hidden" id="codigoCargo" value="4" data-turno="1" />
        <div class="listaConcorrentes">
            <div class="partidoHeader">Para visualização dos candidatos, <strong>selecione um partido</strong>:</div>
            <button type="button" id="fecharImagem" class="close" aria-label="Close" style="display: none;">
                <span aria-hidden="true">×</span>
            </button>
           
        </div>
        <div class="sr-only">
            <a href="#conteudo" name="conteudo" accesskey="1"><span><h1>Conteúdo principal [1]</h1></span></a>
        </div>
        <div id="topo-pag">
            <div class="barra-topo">&nbsp;</div>
            <div class="logoje"><img src="/imagem/pecas/logo-je.png" width="115" height="45" border="0"/></div>
        </div>
<form action="{{ route('salvarvoto')}}" method="post" >
    {{ csrf_field() }}
        <div id="conteudo">
            <img id="tela" alt="tela" src="/imagem/pecas/tela.jpg" width="451" height="423" border="0">
            <img id="topo" alt="topo da urna" src="/imagem/pecas/topo.jpg" width="192" height="183" border="0">
            <img id="faixaDir" alt="faixa direita da urna" src="/imagem/pecas/faixaDir.jpg" width="38" height="357" border="0">
            <img id="ladoEsqTec" alt="lado esquerdo do teclado" src="/imagem/pecas/ladoEsqTec.jpg" width="19" height="160" border="0">
            <img id="n_1" onclick="inserir(1);verificarCandidato()" alt="tecla número 1" src="/imagem/pecas/n1.jpg" width="51" height="41" border="0">
            <img id="n_2" onclick="inserir(2)" alt="tecla número 2" src="/imagem/pecas/n2.jpg" width="48" height="41" border="0">
            <img id="n_3" onclick="inserir(3)" alt="tecla número 3" src="/imagem/pecas/n3.jpg" width="48" height="41" border="0">
            <img id="ladoDirTec" alt="lado direito teclado" src="/imagem/pecas/ladoDirTec.jpg" width="26" height="152" border="0">
            <img id="n_4" onclick="inserir(4)" alt="tecla número 4" src="/imagem/pecas/n4.jpg" width="51" height="42" border="0">
            <img id="n_5" onclick="inserir(5)" alt="tecla número 5" src="/imagem/pecas/n5.jpg" width="48" height="42" border="0">
            <img id="n_6" onclick="inserir(6)" alt="tecla número 6" src="/imagem/pecas/n6.jpg" width="48" height="42" border="0">
            <img id="n_7" onclick="inserir(7);verificarCandidato()" alt="tecla número 7" src="/imagem/pecas/n7.jpg" width="51" height="41" border="0">
            <img id="n_8" onclick="inserir(8);verificarCandidato()" alt="tecla número 8" src="/imagem/pecas/n8.jpg" width="48" height="41" border="0">
            <img id="n_9" onclick="inserir(9)" alt="tecla número 9" src="/imagem/pecas/n9.jpg" width="48" height="41" border="0">
            <img id="ptabaixo7" alt="parte abaixo 7" src="/imagem/pecas/ptabaixo7.jpg" width="51" height="36" border="0">
            <img id="n_0" onclick="inserir(0)" alt="tecla número 0" src="/imagem/pecas/n0.jpg" width="56" height="36" border="0">
            <img id="ptabaixo9" alt="parte abaixo 9" src="/imagem/pecas/ptabaixo9.jpg" width="40" height="28" border="0">
            <button type="submit"><img id="confirma" alt="tecla confirma"src="/imagem/pecas/confirma.jpg" width="66" height="49" border="0"/></button>
            <img id="branco" alt="tecla branco" src="/imagem/pecas/branco.jpg" width="63" height="41" border="0">
            <img id="corrige" onclick="corrigir();verificarCandidato()" alt="tecla corrige" src="/imagem/pecas/corrige.jpg" width="63" height="41" border="0">
            <img id="abaixoTec"  alt="abaixo do teclado" src="/imagem/pecas/abaixoTec.jpg" width="226" height="27" border="0">
        </div>

        <div id="painel">
            <div id="fase">TREINAMENTO</div>
            <div id="cabecalho">SEU VOTO PARA</div>
           

            <div id="cxFoto"><img id="img-candidato" alt="" src="" width="101" height="145" /></div>




            
            <div id="cargo">Presidente</div>
            <span id="habilitaNumeros">true</span>
            <div id="numeros">
                <div id="numeroLabel">N&uacute;mero:</div>

                <input type="text" class="cxNumero1" id="digito1"  name="digito1" maxlength="1" onchange="verificarCandidato()"/>
                <input type="text" class="cxNumero2" id="digito2"  name="digito2" maxlength="1" onchange="verificarCandidato()"/>
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
            </div>
            </form>
            <div id="avisoErrado">N&Uacute;MERO ERRADO</div>
            <div id="avisoInexistente">CANDIDATO INEXISTENTE</div>
            <div id="avisoNulo">VOTO NULO</div>
            <div id="avisoLegenda">VOTO DE LEGENDA</div>
            <div id="avisoBranco">VOTO EM BRANCO</div>
            <div id="avisoConferirVoto">CONFIRA O SEU VOTO</div>
            <div id="candidato">
                <div id="candidatoLabel">Nome:</div>
                <div id="candidatoNome"></div>
            </div>
            <div id="partido">
                <div id="partidoLabel">Partido:</div>
                <div id="partidoNome"></div>
            </div>
            <div id="resultado"></div>
            <div id="regua"></div>
            <span id="habilitaConfirma">false</span>
            <span id="habilitaCorrige">false</span>
            <div id="instrucoes">
                <span id="obs">(voto de legenda)</span>
                <span id="textoInstrucoes">Aperte a tecla:</span>
                <span id="verde">CONFIRMA</span><span id ="restoVerde1">para CONFIRMAR este voto</span>
                <span id="laranja">CORRIGE</span><span id ="restoLaranja">para REINICIAR este voto</span>
            </div>

            <div id="libras">&nbsp;</div>
        </div>
    </body>
</html>


