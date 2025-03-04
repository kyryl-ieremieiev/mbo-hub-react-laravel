<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('events')->insert([
            [
                "id" => 1,
                "title" => "Skills The Finals",
                "description" => "<p>Strijd om de titel van beste vakman of -vrouw in diverse beroepen, met unieke activiteiten voor scholieren om beroepen te ervaren. <br><br>🎓 <strong>𝐌𝐁𝐎-𝐇𝐮𝐛 𝐛𝐢𝐣 𝐝𝐢𝐭 𝐞𝐯𝐞𝐧𝐭<\/strong>:&nbsp;<\/p><ul><li>Flowburo: vrijwilligersorganisatie, opbouw en uitvoering<\/li><li>flowburo WorldSkills Netherlands<\/li><\/ul><p><br><\/p>",
                "date" => "2025-03-20",
                "location" => "Amsterdam",
                "image" => null,
                "created_at" => "2025-02-24 12:02:54",
                "updated_at" => "2025-02-24 12:02:54",
                "tags" => null
            ],
            [
                "id" => 2,
                "title" => "Expo Makers van de Toekomst",
                "description" => "<p>Mediacollege Amsterdam en Hout- en Meubileringscollege Amsterdam organiseren op 12 juni in theater De Krakeling in cultuurpark Westergas een expo waar zij, als vakscholen van Amsterdam, laten zien dat hun studenten de makers, designers en kunstenaars van de toekomst zijn. De studenten presenteren op deze expo hun meest spraakmakende werk.<br><br>Met deze expo laten de vakscholen van Amsterdam zien dat zij sterke en betrouwbare partners zijn als het gaat om het vormgeven van de toekomst van de stad. Door het werk van deze jonge makers te tonen, benadrukken zij hun cruciale rol in het bouwen aan een innovatieve, duurzame en inclusieve stad van morgen. &nbsp;<\/p>",
                "date" => "2025-06-12",
                "location" => "Mediacollege Amsterdam",
                "image" => null,
                "created_at" => "2025-02-24 12:03:32",
                "updated_at" => "2025-02-24 12:03:32",
                "tags" => null
            ],
            [
                "id" => 3,
                "title" => "Open Torendag",
                "description" => "<p>Meer dan 25 iconische torens openen hun deuren voor het publiek, met spectaculaire uitzichten en bijzondere activiteiten. <br><br>🎓 <strong>𝐌𝐁𝐎-𝐇𝐮𝐛 𝐛𝐢𝐣 𝐝𝐢𝐭 𝐞𝐯𝐞𝐧𝐭:&nbsp;<\/strong><\/p><ul><li>Sport &amp; Bewegen: abseilen van de torens&nbsp;<\/li><li>Music Production: mixtrack maken van torengeluiden&nbsp;<\/li><li>Bouwkunde: ontwerpen van toekomstbestendige torens&nbsp;<\/li><li>Mediacollege A’dam: foto-expositie van de torens<\/li><\/ul><p><br><\/p><p><br><\/p>",
                "date" => "2025-06-14",
                "location" => "Amsterdam",
                "image" => null,
                "created_at" => "2025-02-24 12:04:52",
                "updated_at" => "2025-02-24 12:04:52",
                "tags" => null
            ]
        ]);
    }
}
