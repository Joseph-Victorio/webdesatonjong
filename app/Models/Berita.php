<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    protected $fillable = [
        'judul_berita',
        'penulis',
        'viewer',
        'isi_berita',
        'foto',

    ];
}
