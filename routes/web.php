<?php

use App\Http\Controllers\AgamaController;
use App\Http\Controllers\Beranda;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\InfografisController;
use App\Http\Controllers\PendidikanController;

use App\Http\Controllers\ProfilDesaController;
use App\Http\Controllers\SotkController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\StrukturController;
use App\Http\Controllers\UsiaLakiController;
use App\Http\Controllers\UsiaPerempuanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [Beranda::class, 'index'])->name('home');

Route::get('/berita', [BeritaController::class, 'news'])->name('berita');
Route::get('/berita/{berita:slug}', [BeritaController::class, 'detail'])->name('berita.detail');
Route::get('/infografis', [InfografisController::class, 'client'])->name('infografis.client');
Route::get('/usia-penduduk', [InfografisController::class, 'usia'])->name('usia.penduduk');
Route::get('/profil', [ProfilDesaController::class, 'index'])->name('profil');

Route::get('/struktur', [SotkController::class, 'index'])->name('sotk.index');
Route::get('/galeri', [GaleriController::class, 'client']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/admin/kelola-berita', [BeritaController::class, 'index'])->name('berita.index');
    Route::get('/admin/tambah-berita', [BeritaController::class, 'create'])->name('berita.create');
    Route::get('/berita/edit/{berita}', [BeritaController::class, 'edit'])->name('berita.edit');
    Route::put('/berita/{berita}', [BeritaController::class, 'update'])->name('berita.update');
    Route::delete('/berita/delete/{berita}', [BeritaController::class, 'destroy'])->name('berita.destroy');
    Route::post('/admin/tambah-berita', [BeritaController::class, 'store'])->name('berita.store');


    Route::get('/admin/kelola-galeri', [GaleriController::class, 'index'])->name('galeri.index');
    Route::get('/admin/tambah-galeri', [GaleriController::class, 'create'])->name('galeri.create');
    Route::get('/admin/galeri-edit/{galeri}', [GaleriController::class, 'edit'])->name('galeri.edit');
    Route::put('/galeri/{galeri}', [GaleriController::class, 'update'])->name('galeri.update');
    Route::post('/admin/tambah-galeri', [GaleriController::class, 'store'])->name('galeri.store');
    Route::delete('/galeri/{galeri}', [GaleriController::class, 'destroy'])->name('galeri.destroy');

    Route::get('/admin/kelola-struktur', [StrukturController::class, 'index'])->name('struktur.index');
    Route::get('/admin/tambah-struktur', [StrukturController::class, 'create'])->name('struktur.create');
    Route::post('/admin/tambah-struktur', [StrukturController::class, 'store'])->name('struktur.store');
    Route::get('/struktur/edit/{struktur}', [StrukturController::class, 'edit'])->name('struktur.edit');
    Route::put('/struktur/{struktur}', [StrukturController::class, 'update'])->name('struktur.update');
    Route::delete('/struktur/delete/{struktur}', [StrukturController::class, 'destroy'])->name('struktur.destroy');

    Route::get('/admin/kelola-penduduk/', [InfografisController::class, 'index'])->name('penduduk.index');
    Route::put('/infografis/update/{infografis}', [InfografisController::class, 'update']);

    Route::get('/admin/umur/{umur}', [UsiaLakiController::class, 'edit']);
    Route::put('/penduduk/usia-laki/{usiaLaki}', [UsiaLakiController::class, 'update'])
        ->name('usia.laki.update');

    Route::put('/penduduk/usia-perempuan/{usiaPerempuan}', [UsiaPerempuanController::class, 'update'])
        ->name('usia.perempuan.update');

    Route::get('/admin/pendidikan', [PendidikanController::class, 'index'])->name('pendidikan.index');
    Route::put('/admin/pendidikan/{pendidikan}', [PendidikanController::class, 'update'])->name('pendidikan.update');

    Route::get('/admin/status-nikah', [StatusController::class, 'index'])->name('status.index');
    Route::put('/nikah/update/{status}', [StatusController::class, 'update'])->name('status.update');

    Route::get('/admin/agama', [AgamaController::class, 'index'])->name('agama.index');
    Route::put('/agama/update/{agama}', [AgamaController::class, 'update'])->name('agama.update');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/admin/add-hero', [DashboardController::class, 'create'])->name('hero.create');
    Route::post('/admin/tambah-hero', [DashboardController::class, 'store'])->name('hero.store');
    Route::get('/admin/edit/{hero}', [DashboardController::class, 'edit'])->name('hero.edit');
    Route::put('/admin/update/{hero}', [DashboardController::class, 'update'])->name('hero.update');
    Route::delete('/admin/hero/{hero}', [DashboardController::class, 'destroy'])->name('hero.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
