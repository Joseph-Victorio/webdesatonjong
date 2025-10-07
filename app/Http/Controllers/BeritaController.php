<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $berita = Berita::query()
                ->when($search, function($query,$search){
                    $query->where('judul_berita', 'like', "%{$search}%")
                    ->orWhere('penulis', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(5)
                ->withQueryString();

        return Inertia::render('berita/BeritaIndex', [
            'beritas' => $berita,
            'filters'=>[
                'filter'=>$search,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('berita/BeritaTambah');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul_berita' => 'required|string|max:255',
            'penulis' => 'required|string|max:100',
            'isi_berita' => 'required|string',
            'foto' => 'required|image|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('berita', 'public');
        }

        Berita::create($validated);

        return redirect()->route('berita.index')->with('success', 'Berita berhasil disimpan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Berita $berita)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Berita $berita)
    {
        return Inertia::render('berita/BeritaEdit', [
            'berita' => $berita
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Berita $berita)
    {
        $validated = $request->validate([
            'judul_berita' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'isi_berita' => 'required|string',
            'foto' => 'nullable|image|max:2048',
        ]);

        // Jika upload foto baru
        if ($request->hasFile('foto')) {
            // Hapus foto lama (optional, jika ingin bersih)
            if ($berita->foto && Storage::disk('public')->exists($berita->foto)) {
                Storage::disk('public')->delete($berita->foto);
            }

            // Simpan foto baru
            $validated['foto'] = $request->file('foto')->store('berita', 'public');
        } else {
            // Tidak upload foto → tetap pakai foto lama
            $validated['foto'] = $berita->foto;
        }

        $berita->update($validated);

        return redirect()
            ->route('berita.index')
            ->with('success', 'Berita berhasil diperbarui!');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Berita $berita)
    {
        if ($berita->foto && file_exists(storage_path('app/public/' . $berita->foto))) {
            unlink(storage_path('app/public/' . $berita->foto));
        }

        $berita->delete();

        return redirect()->route('berita.index')->with('success', 'Berita berhasil dihapus!');
    }
}
