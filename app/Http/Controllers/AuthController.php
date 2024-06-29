<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Exception;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            Log::info('Register endpoint hit');
            
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
                'bloodtype'=> 'required|integer',
                'diseases' => 'nullable|array',
                'diseases.*' => 'string',
            ]);

            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => $validatedData['password'],
                'bloodtype' => $validatedData['bloodtype'],
                'diseases' => $validatedData['diseases'],
            ]);

            if ($user == null) {
                return response()->json([
                    'error' => 'Failed to create user'
                ], 400);
            }

            return response()->json([
                'message' => 'Succesfully registered'
            ], 201);
        } catch (Exception $e) {
            Log::error('Error during registration: ' . $e->getMessage());

            return response()->json([
                'error' => 'Email must be unique and Password length must at least be of 8 characters',
            ], 500);
        }
    }


    public function login(Request $request){
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        $user = User::where('email', $validatedData['email'])->first();
        
        if (Auth::attempt($validatedData)) {
            $request->session()->regenerate();
            return response()->json([
                'user' => $user
            ], 200);
        }
        return response()->json([
            'error' => 'Email and password do not match'
        ], 400);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();

        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }
}

