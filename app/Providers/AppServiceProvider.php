<?php

namespace App\Providers;

use App\Models\BloodDonation;
use App\Policies\BloodDonationPolicy;
use App\Models\BloodRequest;
use App\Policies\BloodRequestPolicy;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AppServiceProvider extends ServiceProvider
{
   
    protected $policies = [
        BloodDonation::class => BloodDonationPolicy::class,
    ];

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Gate::policy(BloodDonation::class, BloodDonationPolicy::class);
        Gate::policy(BloodRequest::class, BloodRequestPolicy::class);
    }
}
