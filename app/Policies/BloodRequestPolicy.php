<?php

namespace App\Policies;

use App\Models\BloodDonation;
use App\Models\BloodRequest;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BloodRequestPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, BloodRequest $bloodRequest): bool
    {
        //
        return $bloodRequest->user_id == $user->id || $user->isAdmin();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, BloodRequest $bloodRequest): bool
    {
        //
        return $bloodRequest->user_id == $user->id || $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, BloodRequest $bloodRequest): bool
    {
        //
        return $bloodRequest->user_id == $user->id || $user->isAdmin();
    }

    public function donate(User $user): bool
    {
        return $user->isAdmin();        
    }
}
