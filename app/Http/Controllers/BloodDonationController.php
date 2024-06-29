<?php

namespace App\Http\Controllers;

use App\Models\BloodDonation;
use App\Models\BloodType;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;

class BloodDonationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return BloodDonation::with('user')->get();
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
        return BloodDonation::with('user')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return BloodDonation::findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        BloodDonation::findOrFail($id)->delete();   
    }

    public function approve(Request $request, string $id)
    {
        try {

            // Find the BloodDonation record by ID
            $bloodDonation = BloodDonation::find($id);
            
            if (!$bloodDonation) {
                return response()->json(['error' => 'Blood donation not found'], 404);
            }

            // Check the current status
            if ($bloodDonation->status != 0) {
                return response()->json(['message' => 'Status already changed'], 200);
            }

            $request->validate([
                'status' => 'required|integer|in:1,2',
            ]);

            // Update the status field
            $bloodDonation->status = $request->status;
            $bloodDonation->save();

            // If the requested status is 2, no further action is required
            if ($request->status == 2) {
                return response()->json(['message' => 'Status updated successfully'], 200);
            }

            // Proceed with updating the BloodType units if status is 1
            // Get the blood type from the BloodDonation record
            $bloodTypeValue = $bloodDonation->bloodtype;

            // Find the corresponding BloodType record
            $bloodType = BloodType::where('type', $bloodTypeValue)->first();

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
            return response()->json(['error' => 'An error occurred while approving the blood donation'], 500);
        }
    }
        
    }
