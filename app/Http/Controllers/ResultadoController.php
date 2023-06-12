<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ResultadoController extends Controller
{
    public function resultado()
    {
        // Obtenha os votos do usuário
        $user = User::with('candidates')->first();

        // Retorne a visão 'resultado' com a variável $user
        return view('resultado', compact('user'));
    }
}
