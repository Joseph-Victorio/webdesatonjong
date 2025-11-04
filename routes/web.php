<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\GaleriController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('client/beranda');
})->name('home');

Route::get('/berita', [BeritaController::class, 'news'])->name('berita');
Route::get('/berita/{berita:slug}', [BeritaController::class, 'detail'])->name('berita.detail');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/admin/kelola-berita', [BeritaController::class, 'index'])->name('berita.index');
    Route::get('/admin/tambah-berita', [BeritaController::class, 'create'])->name('berita.create');
    Route::get('/berita/edit/{berita}', [BeritaController::class, 'edit'])->name('berita.edit');
    Route::put('/berita/{berita}', [BeritaController::class, 'update'])->name('berita.update');
    Route::delete('/berita/{berita}', [BeritaController::class, 'destroy'])->name('berita.destroy');
    Route::post('/admin/tambah-berita', [BeritaController::class, 'store'])->name('berita.store');
    

    Route::get('/admin/kelola-galeri', [GaleriController::class, 'index'])->name('galeri.index');
    Route::get('/admin/tambah-galeri', [GaleriController::class, 'create'])->name('galeri.create');
    Route::get('/admin/galeri-edit/{galeri}', [GaleriController::class, 'edit'])->name('galeri.edit');
    Route::put('/galeri/{galeri}', [GaleriController::class, 'update'])->name('galeri.update');
    Route::post('/admin/tambah-galeri', [GaleriController::class, 'store'])->name('galeri.store');
    Route::delete('/galeri/{galeri}', [GaleriController::class, 'destroy'])->name('galeri.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
