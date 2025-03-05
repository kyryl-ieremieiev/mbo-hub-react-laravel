<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Team;
use Carbon\Carbon;

class TeamsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $teams = [
            [
                'name' => 'Nicolette Aschermann',
                'role' => 'Mediacollege Amsterdam',
                'image' => null,
                'created_at' => Carbon::parse('2025-02-25 11:31:27'),
                'updated_at' => Carbon::parse('2025-02-27 10:39:36'),
            ],
            [
                'name' => 'Jolijn Ursem',
                'role' => 'ROC van Amsterdam',
                'image' => null,
                'created_at' => Carbon::parse('2025-02-27 10:39:56'),
                'updated_at' => Carbon::parse('2025-02-27 10:39:56'),
            ],
        ];

        foreach ($teams as $team) {
            Team::create($team);
        }
    }
}
