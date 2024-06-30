<?php

namespace App\Http\Controllers;

use App\Models\BloodDonation;
use App\Models\BloodType;
use App\Models\User;
use GuzzleHttp\Psr7\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;

class BloodDonationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $donations = BloodDonation::with(['user','bloodType'])->get();
        $usersDonation = [];
        foreach ($donations as $donation) {
            if (Auth::user()->can('view', $donation))
            {
                array_push($usersDonation, $donation);
            }
        }
        return response()->json($usersDonation, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return BloodDonation::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        Gate::authorize("view", BloodDonation::class);
        return BloodDonation::with(['user', 'bloodType'])->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $entity = BloodDonation::findOrFail($id);
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
        $entity = BloodDonation::findOrFail($id);
        if (Auth::user()->can('delete', $entity))
        {
            return $entity->delete();            
        }
        return response()->json([], 403);
    }

    public function approve(Request $request, string $id)
    {
        try {
            // Find the BloodDonation record by ID
            $bloodDonation = BloodDonation::find($id);

            if (Auth::user()->cannot('update', $bloodDonation)){
                return response()->json([], 403);            
            }
            
            if (!$bloodDonation) {
                return response()->json(['error' => 'Blood donation not found'], 404);
            }

            // Check the current status
            if ($bloodDonation->status != '0') {
                return response()->json(['message' => 'Status already changed'], 400);
            }

            $validated =$request->validate([
                'status' => 'required|integer|in:1,2',
                'location' => 'nullable|string',
                'date' => 'nullable|date'
            ]);

            // Update the status field
                $bloodDonation->status = $validated['status'];

                if ($validated['status'] == '1') {
                    $bloodDonation->location = $validated['location'];
                    $bloodDonation->date = $validated['date'];
                }
                $bloodDonation->save();


            // If the requested status is 2, no further action is required
            if ($request->status == 2) {
                return response()->json(['message' => 'Status updated successfully'], 200);
            }

            // Proceed with updating the BloodType units if status is 1
            // Get the blood type from the BloodDonation record
            $bloodTypeValue = $bloodDonation->bloodtype;

            // Find the corresponding BloodType record
            $bloodType = BloodType::where('id', $bloodTypeValue)->first();

            if (!$bloodType) {
                return response()->json(['error' => 'Blood type not found'], 404);
            }

            // Increment the units field in the BloodType record by the units in BloodDonation
            $bloodType->units += $bloodDonation->units;
            $bloodType->save();

            return response()->json(['message' => 'Blood donation approved successfully'], 200);

        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['error' => 'An error occurred while approving the blood donation'], 500);
        }
    }
        
    }
