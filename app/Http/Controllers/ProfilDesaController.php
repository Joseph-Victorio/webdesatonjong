<?php

namespace App\Http\Controllers;

use App\Models\Infografis;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilDesaController extends Controller
{
    public function index(){
        $kepadatan = Infografis::where('nama','Kepadatan Penduduk')->first()->jumlah;
        $wilayah = Infografis::where('nama','Luas Wilayah')->first()->jumlah;

        return Inertia::render('client/profil-desa',[
            'kepadatan'=>$kepadatan,
            'wilayah'=>$wilayah,
        ]);
    }
}
