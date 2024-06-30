<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BloodDonationController;
use App\Http\Controllers\BloodRequestController;
use App\Http\Controllers\BloodTypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix'=> 'auth'], function () {
    Route::post('register',[AuthController::class,'register']);
    Route::post('login',[AuthController::class,'login']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::patch('/donations/{id}/approve', [BloodDonationController::class, 'approve'])->middleware('auth:sanctum');
Route::patch('/donations/{id}/donate', [BloodRequestController::class, 'donate'])->middleware('auth:sanctum');

Route::apiResource('blooddonation', BloodDonationController::class)->middleware('auth:sanctum');
Route::apiResource('bloodrequest', BloodRequestController::class)->middleware('auth:sanctum');
Route::apiResource('bloodtype', BloodTypeController::class)->middleware('auth:sanctum');