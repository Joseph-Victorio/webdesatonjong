<?php

namespace App\Http\Controllers;

use App\Models\Struktur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SotkController extends Controller
{
    public function index(){
        $sotk = Struktur::all();
        return Inertia::render('client/sotk', [
            'sotk' => $sotk
        ]);
    }
}
