<?php

use App\Http\Controllers\CandidatoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\salvarVotoController;
use App\Models\Candidate;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/depfederal', function () {
    $ocultarImagem = false; // Defina o valor da variável 
    return view('depfederal')->with('ocultarImagem', $ocultarImagem);
})->middleware(['auth', 'verified'])->name('depfederal');

Route::get('/depestadual', function () {
    return view('depestadual');
})->middleware(['auth', 'verified'])->name('depestadual');

Route::get('/senador', function () {
    return view('senador');
})->middleware(['auth', 'verified'])->name('senador');

Route::get('/governador', function () {
    return view('governador');
})->middleware(['auth', 'verified'])->name('governador');

Route::get('/presidente', function () {
    return view('presidente');
})->middleware(['auth', 'verified'])->name('presidente');

Route::post('/verificar-candidato', 'CandidatoController@verificarCandidato');
Route::post('/salvarvotorota', [salvarVotoController::class, 'salvarVotos'])->middleware(['auth', 'verified'])->name('salvarvoto');

Route::post('/verificar-candidato', [CandidatoController::class, 'verificarCandidato'])->name('verificar-candidato');

Route::get('/salvar-candidato', function () {

	//dd(Candidate::create(['id'=>7771,'nome'=>'joao lucas','partido'=>'partido no meio', 'cargo'=>'deputado federal']));

    //dd(Candidate::create(['id'=>77771,'nome'=>'matheus henrik','partido'=>'unidos da vila maria', 'cargo'=>'deputado estadual']));

    //dd(Candidate::create(['id'=>771,'nome'=>'marlon dos Santos','partido'=>'partido no meio', 'cargo'=>'senador']));
    
    //dd(Candidate::create(['id'=>71,'nome'=>'gostavo fring','partido'=>'unidos da vila maria', 'cargo'=>'governador']));

    //dd(Candidate::create(['id'=>17,'nome'=>'Pedro Cavalcante','partido'=>'partido no meio', 'cargo'=>'presidente']));

    /*
    $user = User::with('candidates')->first();
    $candidate = Candidate::find(7771);
    $user->candidates()->save($candidate);
    $user->refresh();
	dd($user->candidates);  */
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';

