<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use App\Models\Infografis;
use App\Models\Struktur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Beranda extends Controller
{
    public function index(Request $request)
    {
        $singkat = Infografis::all();
        $anggota = Struktur::get()->take(4);
        $heros = Hero::all();

        return Inertia::render('client/beranda', [
            'singkat' => $singkat,
            'anggota' => $anggota,
            'heros' => $heros
        ]);
    }
}
