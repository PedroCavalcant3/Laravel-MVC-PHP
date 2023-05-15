<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\voto;
use App\Models\votos;
use Carbon\Traits\ToStringFormat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Collection;

class salvarVotoController extends Controller
{
    public function salvarVotos(Request $request){

        $votos='';
        $array = ["votos1","votos2","votos3","votos4"];

        for ($i=0; $i < 4 ; $i++) { 
            $auxiliar = $array[$i];
            $value = $request->$auxiliar;
            $votos .= $value;
        }  

        // first CREATE the news (not just an empty instance, but a full model with own unique id)
        voto::create([ 
        'id_usuario' => 1,   // there might be a better solution, but this works 100%
        'id_votos' => 7771,
]);
 
        return view('depfederal');

   
}

}