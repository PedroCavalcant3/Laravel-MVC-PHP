<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/inicio.css">
    <script src="https://kit.fontawesome.com/e16bb94231.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <title>Urna Eletrônica - Login</title>
</head>

<body>
    <header>
        <div class="header-wrapper secondary">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <span><img src="imagem/govbr-logo-large.png" alt="gov-br logotipo"></span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Órgãos do Governo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Acesso à Informação </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Acessibilidade</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown language" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    PT
                                    <span class="fas fa-chevron-down" aria-hidden="true"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">PT</a></li>
                                    <li><a class="dropdown-item" href="#">EN</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">ES</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <span class="fas fa-adjust" id="a" aria-hidden="true"></span>
                            </li>
                        </ul>
                        
                       
                    </div>
                </div>
            </nav>
        </div>

    </header>

    <main>
        <!--Sub Header-->
        <div class="main">
            <div class="subheader">
                <div class="site-name-wrapper">
                    <a class="ico-navegacao toggle-main-navigation" href="#">
                        <span class="fa fa-bars" aria-hidden="true"></span>
                    </a>

                    <h1 class="site-name">
                        <a href="https://www.gov.br/pt-br">Serviços e Informações do Brasil</a>
                    </h1>
                </div>
            </div>


        </div>


    </main>

    <!--Bread Crumbs-->
    <div id="portal-breadcrumbs-wrapper">
        <nav id="breadcrumbs" aria-label="Histórico de navegação (Breadcrumbs)">
            <div class="content">
                <span class="sr-only">Você está aqui:</span>

                <span class="home">
                    <a href="https://www.gov.br/pt-br">
                        <span class="fas fa-home" aria-hidden="true"></span>
                        <span class="sr-only">Página Inicial</span>
                    </a>
                </span>
                <span dir="ltr" id="breadcrumbs-1">

                    <a href="https://www.gov.br/pt-br/servicos">Justiça Eleitoral</a>
                </span>
                <span dir="ltr" id="breadcrumbs-2">
                    <span id="breadcrumbs-current">Eleições Gerais (Brasil)</span>
                </span>
            </div>
        </nav>
        <h1 id="page-title-alt" class="sr-only">Declarar meu imposto de renda</h1>
    </div>

    <section id="content-votation">
        <section class="content">
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Eleição Federal</h5>
                <p class="card-text">As eleições federais (presidente, senadores e deputados federais) atualmente coincidem com as estaduais 
                    (governadores e deputados estaduais).</p>
                <a href="depEstadual.php" id="f" class="btn btn-primary">Votar</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Resultados Anteriores</h5>
                <p class="card-text">Verifique o resultado das eleições passadas, votações, ordem de candidatos e muito mais! <br><br><br> </p>
                <a href="municipais/vereador.php"id="s" class="btn btn-primary">Consultar</a>
            </div>
        </div>
        </section>
    </section>


</body>

</html>