<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;

class CandidatoController extends Controller
{
    /**
     * Summary of verificarCandidato
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verificarCandidato(Request $request)
    {
        $digito1 = $request->input('digito1');
        $digito2 = $request->input('digito2');
        $digito3 = $request->input('digito3');
        $digito4 = $request->input('digito4');
        $digito5 = $request->input('digito5');
    
        // Forme o ID do candidato a partir dos dígitos
        $idCandidato = $digito1 . $digito2 . $digito3 . $digito4 . $digito5;
        $idCandidato = str_replace(' ', '', $idCandidato);

    
        // Consulte o banco de dados para verificar se o candidato existe
        $candidato = Candidate::find($idCandidato);
    
        if ($candidato) {
            $resposta = [
                'existeCandidato' => true,
                'tipo'=>$candidato->cargo,
                'src' => 'imagem/candidatos/' . $candidato->id . '.png',
                'nome'=>$candidato->nome,
                'partido'=>$candidato->partido

            ];
        } else {
            $resposta = [
                'existeCandidato' => false,
                'src' => null
            ];
        }
    
        return response()->json($resposta);
    }
}
