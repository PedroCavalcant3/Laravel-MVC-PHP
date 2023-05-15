<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FuncionariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {  DB::table('candidatos')->insert([  
        'id' => 7771,
        'nome'=>'joao lucas',
        'partido'=>'partido das bicicletas',
        'cargo'=>'deputado federal',

    ]);
    }
}
