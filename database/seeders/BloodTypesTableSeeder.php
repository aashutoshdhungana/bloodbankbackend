<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BloodTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bloodTypes = [
            ['type' => 'A+', 'units' => 0],
            ['type' => 'A-', 'units' => 0],
            ['type' => 'AB+', 'units' => 0],
            ['type' => 'AB-', 'units' => 0],
            ['type' => 'B+', 'units' => 0],
            ['type' => 'B-', 'units' => 0],
            ['type' => 'O-', 'units' => 0],
            ['type' => 'O+', 'units' => 0],
        ];
        DB::table('blood_types')->insert($bloodTypes);
    }
}
