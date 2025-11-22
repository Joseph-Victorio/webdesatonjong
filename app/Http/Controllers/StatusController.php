<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StatusController extends Controller
{

    public function index()
    {
        $nikah = Status::all();

        return Inertia::render('penduduk/status-nikah', [
            'nikah' => $nikah
        ]);
    }

    public function update(Request $request, Status $status)
    {
        $request->validate(
            [
                'jumlah' => 'required|numeric',
            ]
        );

        $status->update([
            'jumlah' => $request->jumlah
        ]);

        return redirect()->route('status.index')->with('success', "Data Berhasil Diperbarui");
    }
}
