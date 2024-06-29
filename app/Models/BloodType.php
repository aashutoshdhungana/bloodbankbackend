<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodType extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'units'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
