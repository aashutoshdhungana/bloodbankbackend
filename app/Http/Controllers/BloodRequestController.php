<?php

namespace App\Http\Controllers;

use App\Models\BloodRequest;
use App\Models\BloodType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;


class BloodRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        Gate::authorize("viewAny", BloodRequest::class);
        return BloodRequest::with('user')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        Gate::authorize("create", BloodRequest::class);
        return BloodRequest::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        Gate::authorize("view", BloodRequest::class);
        return BloodRequest::with('user')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        Gate::authorize("update", BloodRequest::class);
        return BloodRequest::findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        Gate::authorize("delete", BloodRequest::class);
        return BloodRequest::findOrFail($id)->delete();
    }

    public function donate($id)
    {
        Gate::authorize("update", BloodRequest::class);
        // Find the blood request by ID
        $bloodRequest = BloodRequest::find($id);

        // Check if the "received" field is true
        if ($bloodRequest->received) {
            return response()->json(['message' => 'Already received']);
        }

        // Access the units and bloodtype fields in the blood request row
        $unitsRequested = $bloodRequest->units;
        $bloodTypeRequested = $bloodRequest->bloodtype;

        // Find the corresponding blood type record in the bloodtype table
        $bloodType = BloodType::where('type', $bloodTypeRequested)->first();

        // Check if there are enough units available in the bloodtype table
        if ($unitsRequested > $bloodType->units) {
            return response()->json(['message' => 'Not enough blood units in the bank']);
        }

        // Reduce the units in the bloodtype table
        $bloodType->units -= $unitsRequested;
        $bloodType->save();

        // Turn the "received" field in the blood request table to true
        $bloodRequest->received = true;
        $bloodRequest->save();

        return response()->json(['message' => 'Blood donation processed successfully']);
    }
}
