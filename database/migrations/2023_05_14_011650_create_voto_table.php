<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('voto', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_votos');
            $table->timestamps();
        });

            Schema::table('voto', function (Blueprint $table){
                
                $table->foreign('id_usuario')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('id_votos')->references('id')->on('voto')->onDelete('cascade');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voto');
    }
};
