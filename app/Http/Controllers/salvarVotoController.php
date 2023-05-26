<?php

namespace App\Http\Controllers;
use App\Models\Candidate;


use App\Models\User;
use Illuminate\Http\Request;


class salvarVotoController extends Controller
{
    public function salvarVotos(Request $request){

       

        $digito1 = $request->input('digito1');
        $digito2 = $request->input('digito2');
        $digito3 = $request->input('digito3');
        $digito4 = $request->input('digito4');
    
        // Forme o ID do candidato a partir dos dígitos
        $voto = $digito1 . $digito2 . $digito3 . $digito4;
        $voto = str_replace(' ', '', $voto);

    
        // Consulte o banco de dados para verificar se o candidato existe
        $candidate = Candidate::find($voto);
    
    // Verifique se o candidato foi encontrado
    if ($candidate) {

        $user = User::with('candidates')->first();
        $candidate = Candidate::find($voto);
        $user->candidates()->save($candidate);
        $user->refresh();
    
        return view('depestadual'); 
            
    } else {
        return view('depfederal'); 
    }

      
    }
}