<?php

namespace App\Http\Controllers;

use App\Models\Pendidikan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PendidikanController extends Controller
{

    public function index()
    {
        $pendidikan = Pendidikan::first();

        return Inertia::render('penduduk/pendidikan', [
            'pendidikan' => $pendidikan
        ]);
    }

    public function update(Request $request, Pendidikan $pendidikan)
    {
        $request->validate([
            'tidak_belum_sekolah' => 'required|integer|min:0',
            'tidak_tamat_sd' => 'required|integer|min:0',
            'sd_sederajat' => 'required|integer|min:0',
            'sltp_sederajat' => 'required|integer|min:0',
            'slta_sederajat' => 'required|integer|min:0',
            'diploma_i_ii' => 'required|integer|min:0',
            'diploma_iii' => 'required|integer|min:0',
            'strata_i' => 'required|integer|min:0',
            'strata_ii' => 'required|integer|min:0',
            'strata_iii' => 'required|integer|min:0',
        ]);

        $pendidikan->update($request->all());

        return back()->with('success', 'Data pendidikan berhasil diperbarui!');
    }
}
