<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Hero;
use App\Models\Infografis;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class DashboardController extends Controller
{
    public function index()
    {
        $heros = Hero::latest()->paginate(3);
        $views = Berita::sum('viewer');
        $berita = Berita::count();
        $totalPenduduk = Infografis::where('nama', 'Total Penduduk')->value('jumlah');

        return Inertia::render('dashboard', [
            'heros' => $heros,
            'views'=> $views,
            'berita'=>$berita,
            'totalPenduduk'=>$totalPenduduk,
        ]);
    }

    public function create()
    {
        return Inertia::render('hero/create');
    }
    public function edit(Hero $hero)
    {
        return Inertia::render('hero/edit', [
            'hero' => $hero
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'subtitle' => 'required',
            'foto' => 'required'
        ]);

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('hero', 'public');
        }

        Hero::create($validated);
        return redirect()->route('dashboard')->with('success', 'Hero berhasil disimpan!');
    }
    public function update(Request $request, Hero $hero)
    {
        $validated = $request->validate([
            'title' => 'required',
            'subtitle' => 'required',
            'foto' => 'nullable|image'
        ]);

        if ($request->hasFile('foto')) {
            if ($hero->foto && Storage::disk('public')->exists($hero->foto)) {
                Storage::disk('public')->delete($hero->foto);
            }

            $validated['foto'] = $request->file('foto')->store('hero', 'public');
        } else {
            $validated['foto'] = $hero->foto;
        }

        $hero->update($validated);
        return redirect()->route('dashboard')->with('success', 'Hero berhasil disimpan!');
    }

    public function destroy(Hero $hero){
        if ($hero->foto && file_exists(storage_path('app/public/' . $hero->foto))) {
            Storage::disk('public')->delete($hero->foto);
        }

        $hero->delete();

        return redirect()->route('dashboard')->with('success', 'Berita berhasil dihapus!');
    }
}
