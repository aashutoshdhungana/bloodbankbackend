<?php

namespace App\Http\Controllers;

use App\Models\BloodType;
use App\Models\BloodRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;


class BloodRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $requests = BloodRequest::with(['user','bloodType'])->get();
        $usersRequest = [];
        foreach ($requests as $request) {
            if (Auth::user()->can('view', $request))
            {
                array_push($usersRequest, $request);
            }
        }
        return response()->json($usersRequest, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return BloodRequest::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return BloodRequest::with(['user', 'bloodType'])->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $entity = BloodRequest::findOrFail($id);
        if (Auth::user()->can('update', $entity))
        {
            return $entity->update($request->all());            
        }
        return response()->json([], 403);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $entity = BloodRequest::findOrFail($id);
        if (Auth::user()->can('delete', $entity))
        {
            return $entity->delete();            
        }
        return response()->json([], 403);
    }

    public function donate($id)
    {
        // Find the blood request by ID
        $bloodRequest = BloodRequest::find($id);

        if (Auth::user()->cannot('donate', BloodRequest::class)){
            return response()->json([], 403);            
        }

        // Check if the "received" field is true
        if ($bloodRequest->received) {
            return response()->json(['message' => 'Already received']);
        }

        // Access the units and bloodtype fields in the blood request row
        $unitsRequested = $bloodRequest->units;
        $bloodTypeRequested = $bloodRequest->bloodtype;

        // Find the corresponding blood type record in the bloodtype table
        $bloodType = BloodType::where('id', $bloodTypeRequested)->first();

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
