<?php

namespace App\Http\Controllers;

use App\Models\Agama;
use App\Models\Infografis;
use App\Models\Status;
use App\Models\UsiaLaki;
use App\Models\UsiaPerempuan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InfografisController extends Controller
{

    public function index() {}

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }

    public function client(Request $request)
    {
        $infografis = Infografis::all();
        $status_nikah = Status::all();
        $agama = Agama::all();
        $laki = UsiaLaki::first();
        $perempuan = UsiaPerempuan::first();

        $labels = [
            '0-4',
            '5-9',
            '10-14',
            '15-19',
            '20-24',
            '25-29',
            '30-34',
            '35-39',
            '40-44',
            '45-49',
            '50-54',
            '55-59',
            '60-64',
            '65-69',
            '70-74',
            '75+'
        ];

        $male = [
            $laki->usia_0_4,
            $laki->usia_5_9,
            $laki->usia_10_14,
            $laki->usia_15_19,
            $laki->usia_20_24,
            $laki->usia_25_29,
            $laki->usia_30_34,
            $laki->usia_35_39,
            $laki->usia_40_44,
            $laki->usia_45_49,
            $laki->usia_50_54,
            $laki->usia_55_59,
            $laki->usia_60_64,
            $laki->usia_65_69,
            $laki->usia_70_74,
            $laki->usia_75_plus,
        ];

        $female = [
            $perempuan->usia_0_4,
            $perempuan->usia_5_9,
            $perempuan->usia_10_14,
            $perempuan->usia_15_19,
            $perempuan->usia_20_24,
            $perempuan->usia_25_29,
            $perempuan->usia_30_34,
            $perempuan->usia_35_39,
            $perempuan->usia_40_44,
            $perempuan->usia_45_49,
            $perempuan->usia_50_54,
            $perempuan->usia_55_59,
            $perempuan->usia_60_64,
            $perempuan->usia_65_69,
            $perempuan->usia_70_74,
            $perempuan->usia_75_plus,
        ];

        $male = array_map(fn($v) => -$v, $male);

        $labels2 = [
            "Tidak Sekolah",
            "Tidak Tamat SD",
            "SD",
            "SMP",
            "SMA",
            "D1/D2",
            "D3",
            "S1",
            "S2",
            "S3",
        ];

        $values2 = [
            2349,
            1224,
            1825,
            2040,
            3768,
            61,
            213,
            705,
            47,
        ];

        return Inertia::render('client/infografis', [
            'infografis' => $infografis,
            'male' => $male,
            'female' => $female,
            'labels' => $labels,
            'labels2' => $labels2,
            'values2' => $values2,
            'status_nikah'=> $status_nikah,
            'agama'=> $agama,


        ]);
    }


    public function edit(Infografis $infografis)
    {
        //
    }


    public function update(Request $request, Infografis $infografis)
    {
        //
    }

    public function destroy(Infografis $infografis)
    {
        //
    }
}
