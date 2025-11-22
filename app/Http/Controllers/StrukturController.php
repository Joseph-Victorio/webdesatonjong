<?php

namespace App\Http\Controllers;

use App\Models\Struktur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class StrukturController extends Controller
{
    
    public function index()
    {
        $strukturs = Struktur::paginate(5);
        return Inertia::render('struktur/index', [
            'strukturs' => $strukturs,

        ]);
    }

    public function create()
    {
        return Inertia::render('struktur/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'nama' => 'required|string|max:255',
                'jabatan' => 'required|string|max:255',
                'foto' => 'nullable|image|max:2048',
            ]
        );

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('struktur', 'public');
        }

        Struktur::create($validated);

        return redirect()->route('struktur.index')->with('success', "Anggota Berhasil Ditambahkan");
    }

  
    public function show(Struktur $struktur)
    {
        //
    }

    
    public function edit(Struktur $struktur)
    {

        return Inertia::render('struktur/edit', [
            'struktur' => $struktur
        ]);
    }

    
    public function update(Request $request, Struktur $struktur)
    {
        $validated = $request->validate(
            [
                'nama' => 'required|string|max:255',
                'jabatan' => 'required|string|max:255',
                'foto' => 'nullable|image|max:2048',
            ]
        );

        if ($request->hasFile('foto')) {
            if ($struktur->foto && Storage::disk('public')->exists($struktur->foto)) {
                Storage::disk('public')->delete($struktur->foto);
            }

            $validated['foto'] = $request->file('foto')->store('struktur', 'public');
        } else {
            $validated['foto'] = $struktur->foto;
        }
        $struktur->update($validated);

        return redirect()->route('struktur.index');
    
    }


    public function destroy(Struktur $struktur)
    {
        if ($struktur->foto && file_exists(storage_path('app/public/' . $struktur->foto))) {
            Storage::disk('public')->delete($struktur->foto);
        }

        $struktur->delete();

        return redirect()->route('struktur.index')->with('success', 'Anggota berhasil dihapus!');
    }
}
