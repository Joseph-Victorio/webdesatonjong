<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Infografis extends Model
{
    protected $fillable = [
        'jumlah',
        'jumlah_total',
        'jumlah_laki',
        'jumlah_perempuan',
        'jumlah_keluarga',
        'luas_wilayah',
        'kepadatan_penduduk',
    ];
}
