<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GaleriController extends Controller
{
    public function index()
    {
        $galeris = Galeri::latest()->paginate(8);
        return Inertia::render('galeri/index', [
            'galeris' => $galeris
        ]);
    }

    public function create()
    {
        return Inertia::render('galeri/tambah');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'foto' => 'required|image|max:2048',
        ]);

        $validated['foto'] = $request->file('foto')->store('galeri', 'public');

        Galeri::create($validated);

        return redirect()->route('galeri.index')->with('success', 'Foto berhasil diunggah!');
    }

    public function edit(Galeri $galeri)
    {
        return Inertia::render('galeri/edit', [
            'galeri' => $galeri
        ]);
    }

    public function update(Request $request, Galeri $galeri)
    {
        $validated = $request->validate([
            'foto' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            if ($galeri->foto && Storage::disk('public')->exists($galeri->foto)) {
                Storage::disk('public')->delete($galeri->foto);
            }
            $validated['foto'] = $request->file('foto')->store('galeri', 'public');
        } else {
            $validated['foto'] = $galeri->foto;
        }

        $galeri->update($validated);

        return redirect()->route('galeri.index')->with('success', 'Foto berhasil diperbarui!');
    }

    public function destroy(Galeri $galeri)
    {
        if ($galeri->foto && Storage::disk('public')->exists($galeri->foto)) {
            Storage::disk('public')->delete($galeri->foto);
        }

        $galeri->delete();

        return redirect()->route('galeri.index')->with('success', 'Foto berhasil dihapus!');
    }
}
