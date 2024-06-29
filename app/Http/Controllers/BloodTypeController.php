<?php

namespace App\Http\Controllers;

use App\Models\BloodType;
use Illuminate\Http\Request;

class BloodTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BloodType::get();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return BloodType::findOrFail($id);
    }
}
