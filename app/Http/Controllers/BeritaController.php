<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BeritaController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $berita = Berita::query()
            ->when($search, function ($query, $search) {
                $query->where('judul_berita', 'like', "%{$search}%")
                    ->orWhere('penulis', 'like', "%{$search}%");
            })
            ->orderBy('created_at', 'desc')
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('berita/BeritaIndex', [
            'beritas' => $berita,
            'filters' => [
                'filter' => $search,
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('berita/BeritaTambah');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul_berita' => 'required|string|max:255',
            'penulis' => 'required|string|max:100',
            'isi_berita' => 'required|string',
            'foto' => 'required|image|max:2048',
        ]);
          $validated['slug'] = Str::slug($validated['judul_berita']);

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('berita', 'public');
        }

        Berita::create($validated);

        return redirect()->route('berita.index')->with('success', 'Berita berhasil disimpan!');
    }

    public function edit(Berita $berita)
    {
        return Inertia::render('berita/edit', [
            'berita' => $berita
        ]);
    }

    public function update(Request $request, Berita $berita)
    {
        $validated = $request->validate([
            'judul_berita' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'isi_berita' => 'required|string',
            'foto' => 'nullable|image|max:2048',
        ]);
        $validated['slug'] = Str::slug($validated['judul_berita']);

        if ($request->hasFile('foto')) {
            if ($berita->foto && Storage::disk('public')->exists($berita->foto)) {
                Storage::disk('public')->delete($berita->foto);
            }

            $validated['foto'] = $request->file('foto')->store('berita', 'public');
        } else {
            $validated['foto'] = $berita->foto;
        }

        $berita->update($validated);

        return redirect()
            ->route('berita.index')
            ->with('success', 'Berita berhasil diperbarui!');
    }

    public function destroy(Berita $berita)
    {
        if ($berita->foto && file_exists(storage_path('app/public/' . $berita->foto))) {
            Storage::disk('public')->delete($berita->foto);
        }

        $berita->delete();

        return redirect()->route('berita.index')->with('success', 'Berita berhasil dihapus!');
    }

    public function news(Request $request)
{
    $beritas = Berita::orderBy('created_at', 'desc')
        ->paginate(9) 
        ->through(function ($item) {
            $item->foto = $item->foto ? asset('storage/' . $item->foto) : null;
            return $item;
        });

    return Inertia::render('client/berita', [
        'beritas' => $beritas
    ]);
}
public function detail(Berita $berita){
    $berita->increment('viewer') ;
    $terkini = Berita::where('id', '!=', $berita->id)
                ->orderBy('created_at', 'desc')
                ->take(5)
                ->get();

    $berita->foto = $berita->foto ? asset('storage/'. $berita->foto): null;
   

    return Inertia::render('client/detail-berita',[
        'berita'=>$berita,
        'terkini'=>$terkini,
    ]);
}
}
