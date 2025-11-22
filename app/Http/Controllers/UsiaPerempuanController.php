<?php

namespace App\Http\Controllers;

use App\Models\UsiaPerempuan;
use Illuminate\Http\Request;

class UsiaPerempuanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UsiaPerempuan $usiaPerempuan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UsiaPerempuan $usiaPerempuan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UsiaPerempuan $usiaPerempuan)
    {
        $validated = $request->validate([
            'usia_0_4' => 'required|integer',
            'usia_5_9' => 'required|integer',
            'usia_10_14' => 'required|integer',
            'usia_15_19' => 'required|integer',
            'usia_20_24' => 'required|integer',
            'usia_25_29' => 'required|integer',
            'usia_30_34' => 'required|integer',
            'usia_35_39' => 'required|integer',
            'usia_40_44' => 'required|integer',
            'usia_45_49' => 'required|integer',
            'usia_50_54' => 'required|integer',
            'usia_55_59' => 'required|integer',
            'usia_60_64' => 'required|integer',
            'usia_65_69' => 'required|integer',
            'usia_70_74' => 'required|integer',
            'usia_75_plus' => 'required|integer'
        ]);

        $usiaPerempuan->update($validated);

        return back()->with('success', 'Data perempuan berhasil diperbarui!');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UsiaPerempuan $usiaPerempuan)
    {
        //
    }
}
