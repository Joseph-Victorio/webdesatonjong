<?php

namespace App\Http\Controllers;

use App\Models\Infografis;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Beranda extends Controller
{
       public function index(Request $request){
        $singkat = Infografis::all();

        return Inertia::render('client/beranda', [
            'singkat'=>$singkat,
        ]);
    }
}

