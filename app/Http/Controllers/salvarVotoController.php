<?php

namespace App\Http\Controllers;
use App\Models\Candidate;
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

        $voto='';
        $array = ["votos1","votos2","votos3","votos4"];

        for ($i=0; $i < 4 ; $i++) { 
            $auxiliar = $array[$i];
            $value = $request->$auxiliar;
            $voto .= $value;
        }  

        $user = User::with('candidates')->first();


        $candidate = Candidate::find($voto);
        $user->candidates()->save($candidate);
    
        $user->refresh();
    

        return view('depfederal'); 
    }

}