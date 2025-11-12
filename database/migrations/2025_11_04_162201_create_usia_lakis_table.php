<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('usia_lakis', function (Blueprint $table) {
            $table->id();
            $table->integer('usia_0_4')->default(0);
            $table->integer('usia_5_9')->default(0);
            $table->integer('usia_10_14')->default(0);
            $table->integer('usia_15_19')->default(0);
            $table->integer('usia_20_24')->default(0);
            $table->integer('usia_25_29')->default(0);
            $table->integer('usia_30_34')->default(0);
            $table->integer('usia_35_39')->default(0);
            $table->integer('usia_40_44')->default(0);
            $table->integer('usia_45_49')->default(0);
            $table->integer('usia_50_54')->default(0);
            $table->integer('usia_55_59')->default(0);
            $table->integer('usia_60_64')->default(0);
            $table->integer('usia_65_69')->default(0);
            $table->integer('usia_70_74')->default(0);
            $table->integer('usia_75_plus')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Batalkan migrasi.
     */
    public function down(): void
    {
        Schema::dropIfExists('usia_lakis');
    }
};
