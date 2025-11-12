<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('pendidikans', function (Blueprint $table) {
            $table->id();
            $table->integer('tidak_belum_sekolah')->default(0);
            $table->integer('tidak_tamat_sd')->default(0);
            $table->integer('sd_sederajat')->default(0);
            $table->integer('sltp_sederajat')->default(0);
            $table->integer('slta_sederajat')->default(0);
            $table->integer('diploma_i_ii')->default(0);
            $table->integer('diploma_iii')->default(0);
            $table->integer('strata_i')->default(0);
            $table->integer('strata_ii')->default(0);
            $table->integer('strata_iii')->default(0);

            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('pendidikans');
    }
};
