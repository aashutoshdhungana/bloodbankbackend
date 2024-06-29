<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blood_donations', function (Blueprint $table) {
            $table->id('id')->primary()->autoIncrement();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('bloodtype')->constrained('blood_types');
            $table->enum('status', ['0','1','2'])->default('0');
            $table->integer('units');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blood_donations');
    }
};
