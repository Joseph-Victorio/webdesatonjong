<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    protected $fillable = [
        'judul_berita',
         'slug',
        'penulis',
        'viewer',
        'isi_berita',
        'foto',
       
    ];

      public function getRouteKeyName()
    {
        return 'slug';
    }
}
