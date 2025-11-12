<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pendidikan extends Model
{
    protected $fillable = [
        'tidak_belum_sekolah',
        'tidak_tamat_sd',
        'sd_sederajat',
        'sltp_sederajat',
        'slta_sederajat',
        'diploma_i_ii',
        'diploma_iii',
        'strata_i',
        'strata_ii',
        'strata_iii',
    ];
}
