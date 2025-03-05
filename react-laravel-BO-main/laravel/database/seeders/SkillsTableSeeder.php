<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SkillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('skills')->insert([
            [
                'title' => '🏨Hospitality',
                'description' => '<p>Gastvrijheid en service op het hoogste niveau<br><br></p><ul><li>Hotel service project</li><li>Restaurant management</li><li>Event hosting</li></ul>',
                'created_at' => Carbon::parse('2025-02-25 09:53:21'),
                'updated_at' => Carbon::parse('2025-02-25 09:53:21'),
            ],
            [
                'title' => '📱Media',
                'description' => '<p>Digitale media en communicatie<br><br></p><ul><li>Social media campagnes</li><li>Content creation</li><li>Digital marketing</li></ul>',
                'created_at' => Carbon::parse('2025-02-25 09:54:54'),
                'updated_at' => Carbon::parse('2025-02-25 09:54:54'),
            ],
            [
                'title' => '🎨Vormgeving',
                'description' => '<p>Creatief design en visuele communicatie<br><br></p><ul><li>Brand identity</li><li>UI/UX design</li><li>Print media</li></ul>',
                'created_at' => Carbon::parse('2025-02-25 09:55:22'),
                'updated_at' => Carbon::parse('2025-02-25 09:55:22'),
            ],
            [
                'title' => '🎪Events',
                'description' => '<p>Organisatie en uitvoering van evenementen<br><br></p><ul><li>Conferenties</li><li>Festivals</li><li>Bedrijfsevenementen</li></ul>',
                'created_at' => Carbon::parse('2025-02-25 09:55:46'),
                'updated_at' => Carbon::parse('2025-02-25 09:55:46'),
            ],
            [
                'title' => '🪑Hout en Meubilering',
                'description' => '<p>Vakmanschap in houtbewerking en meubelmaking<br><br></p><ul><li>Custom furniture</li><li>Interieur design</li><li>Restauratie</li></ul>',
                'created_at' => Carbon::parse('2025-02-25 09:56:09'),
                'updated_at' => Carbon::parse('2025-02-25 09:56:09'),
            ],
            [
                'title' => '📸Video/fotoproductie',
                'description' => '<p>Professionele beeld- en videoproductie<br><br></p><ul><li>Bedrijfsvideo\'s</li><li>Fotoreportages</li><li>Documentaires</li></ul>',
                'created_at' => Carbon::parse('2025-02-25 09:56:35'),
                'updated_at' => Carbon::parse('2025-02-25 09:56:35'),
            ],
        ]);
    }
}
