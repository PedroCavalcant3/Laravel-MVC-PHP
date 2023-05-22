<?php

namespace App\Http\Controllers;
use App\Models\Candidate;
use App\Models\User;
use App\Models\voto;
use App\Models\votos;
use Carbon\Traits\ToStringFormat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class salvarVotoController extends Controller
{
    public function salvarVotos(Request $request){

       

        $voto='';
        $array = ["votos1","votos2","votos3","votos4"];

        for ($i=0; $i < 4 ; $i++) { 
            $auxiliar = $array[$i];
            $value = $request->$auxiliar;
            $voto .= $value;
        }  
        $candidate = Candidate::where('id',$voto)->first();
    
    // Verifique se o candidato foi encontrado
    if ($candidate) {
        
        // Habilite o botão "Confirmar" e desabilite o botão "Submit"
        print($candidate);
       // return view('verificar', ['candidato' => $candidate]);
    } else {
        $ocultarImagem = true; // Defina o valor da variável 
        return view('depfederal')->with('ocultarImagem', $ocultarImagem);
    }

        //$user = User::with('candidates')->first();


        //$candidate = Candidate::find($voto);
        //$user->candidates()->save($candidate);
    
        //$user->refresh();
    

       // return view('depfederal'); 
    }

    function print($data) {
        $output = $data;
        
        if (is_array($output))
            $output = implode(',', $output);
        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    }





}