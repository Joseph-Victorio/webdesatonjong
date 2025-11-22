<?php

namespace App\Http\Controllers;

use App\Models\Agama;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgamaController extends Controller
{

    public function index()
    {
        $agama = Agama::all();

        return Inertia::render('penduduk/agama',[
            'agama' => $agama,
        ]);
    }

    public function update(Request $request, Agama $agama)
    {
        $request->validate([
            'jumlah'=> 'required'
        ]);

        $agama->update(['jumlah'=>$request->jumlah]);

        return back()->with('success', 'Berhasil diperbarui.');
    }

   }
