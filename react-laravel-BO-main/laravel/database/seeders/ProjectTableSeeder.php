<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectTableSeeder extends Seeder
{
    public function run()
    {
        $projects = [
            [
                'id' => 1,
                'title' => 'Visual Poem Project',
                'content' => '<p>Hoe breng je de Amsterdamse cultuur tot leven in beeld? Een groep van 90 tweedejaars studenten Audiovisueel Mediacollege Amsterdam laten hun talent spreken en creërden inspirerende visual poems voor culturele instellingen in de stad.&nbsp;<br><br>Deze creatieve promotievideo’s, gemaakt in de stijl van een visual poem, hebben als doel jongeren aan te moedigen om de veelzijdige culturele instellingen van Amsterdam te bezoeken. Bovendien vieren de projecten het rijke 750-jarige bestaan van de stad.<br><br>De studenten doken diep in de vraag: hoe kunnen we meer jongeren betrekken bij culturele instellingen? Ze onderzochten wat cultuur voor jongeren kan betekenen en hoe deze instellingen beter kunnen aansluiten bij de leefwereld van de nieuwe generatie.&nbsp;<br><br>Studenten werden in teams gekoppeld aan toonaangevende instellingen, zoals Museum ’t Schip, IDFA, Eye Filmmuseum, FOAM, Allard Pierson, Amsterdam Museum, Carré, CJP, Concertgebouw, Stedelijk Museum, Rookvrije Generatie en Theater de Krakeling. Samen verkenden ze de rijke verhalen en mogelijkheden die deze instellingen te bieden hebben.<br><br>Bekijk hier een van de indrukwekkende resultaten. Deze video is gemaakt door studenten Roshni Harkoe, Harper Cham en Oumayra ben Abdellah met Eye Filmmuseum als inspiratiebron.<br>Video: volgt<br><br><br><br><\/p>',
                'image' => null,
                'published_at' => '2025-02-24',
                'created_at' => '2025-02-24 11:08:19',
                'updated_at' => '2025-03-04 09:31:26',
                'links' => '[{"name":"Test link","url":"http://localhost:8000/admin/projects/2/edit"}]',
                'show_on_homepage' => 1,
                'tags' => '["evenement"]',
                'slug' => 'visual-poem-project'
            ],
            [
                'id' => 2,
                'title' => 'Amsterdam 750 Diner in het Scheepvaartmuseum',
                'content' => '<p>Tijdens het Amsterdam 750-diner op 21 november 2024, “Een culinaire reis door de eeuwen”, werkten MBO-studenten van verschillende opleidingen samen. Dit bijzondere culinaire evenement bracht de smaken van het verleden naar het heden, waarbij elke gang was geïnspireerd door een ander tijdperk uit de 750-jarige geschiedenis van Amsterdam. <br><br>Studenten van ROC Amsterdam kookten met topchefs, serveerden het diner, hielpen bij de eventproductie en zorgden voor een geweldige gastbeleving. Ook werden er mooie filmpjes gemaakt door Mediacollege en zorgde een student van de MASK-opleiding voor de visagie.<br><br><strong>𝐌𝐁𝐎-𝐇𝐮𝐛 𝐛𝐢𝐣 𝐝𝐢𝐭 𝐞𝐯𝐞𝐧𝐭:<\/strong><\/p><ul><li><strong>Culinair & Gastheerschap: koken en serveren&nbsp;<\/strong><\/li><li><strong>Mask opleiding: visagie en film&nbsp;<\/strong><\/li><li><strong>MaMedia: chefkoks filmen en gerechten toelichten&nbsp;<\/strong><\/li><li><strong>Guest Experience: een onvergetelijke avond creëren<\/strong><\/li></ul><p><br><br><\/p>',
                'image' => '01JNG3M0SA8DM732XJW7675E6J.jpg',
                'published_at' => '2025-02-24',
                'created_at' => '2025-02-24 11:09:51',
                'updated_at' => '2025-03-04 09:31:39',
                'links' => '[]',
                'show_on_homepage' => 0,
                'tags' => '["evenement"]',
                'slug' => 'amsterdam-750-diner-in-het-scheepvaartmuseum'
            ],
            [
                "id" => 3,
                "title" => "750 Amsterdamse Verhalen",
                "content" => "<p>Speciaal voor het jubileumjaar worden op de website amsterdam750.nl, 750 Amsterdamse verhalen verzameld. Zo wordt niet alleen de rijke geschiedenis van de stad gevierd, maar krijgen we ook een intieme inkijk in het leven van Amsterdammers. Wij zijn er trots op dat studenten van Mediacollege Amsterdam een aantal van deze verhalen hebben gemaakt. Bekijk de verschillende video’s hieronder: <br><br><br><strong style=\"text-decoration: underline;\">\"De Smaak van Amsterdam\"<\/strong><br>Zoals het verhaal over \"De Smaak van Amsterdam\". In deze video neemt Isabella je mee op een culinaire reis door de stad. Ze spreekt met Greg Mon, die al negen jaar tosti’s bakt op de Albert Cuyp, waaronder het beroemde \"Amsterbammetje\" met Hollandse kazen en bosui. Vervolgens ontmoet ze Gijs de Rooij, een trotse Amsterdammer die traditionele gerechten zoals stamppot en gehaktballen serveert in zijn café. <br>Bekijk het verhaal hier👉 https:\/\/amsterdam750.nl\/verhaal\/de-smaak-van-amsterdam\/<br>🎥: Lars Hansen (student Audiovisueel, Mediacollege Amsterdam)<br><br><strong style=\"text-decoration: underline;\">De brug over het IJ!<\/strong><br>Dit bijzondere verhaal gaat over de Oostbrug in Amsterdam. Al bijna 200 jaar dromen Amsterdammers van een directe verbinding over het IJ in Oost. In 2023 ontwierpen mbo-studenten Maxim en David de \"Green Line\" brug, een<br>duurzame en innovatieve oplossing die groen en stad verbindt. Toch blijven<br>Amsterdammers voorlopig afhankelijk van de pont. Hun visie is gedurfd, maar de realisatie van de brug laat nog op zich wachten. De toekomst oogt echter veelbelovend! Meer hierover weten\/het hele filmpje bekijken?&nbsp; 👉 https:\/\/amsterdam750.nl\/verhaal\/brug-over-t-ij\/<br> 🎥: Len ter Laak (student Audiovisueel, Mediacollege Amsterdam)<br><br><strong style=\"text-decoration: underline;\">A story born in Damsko<\/strong><br>Imrane (24) is een geboren en getogen Amsterdammer die zijn jeugd doorbracht op de pleintjes van Osdorp, waar de bal en de buurt een grote rol speelden. Voor hem is Osdorp niet zomaar een wijk, maar een hechte gemeenschap die als familie voelt. Het gaf hem levenslessen die hem hebben gevormd tot wie hij nu is.&nbsp;<br>Tegenwoordig geeft Imrane terug aan de buurt. Via jongerenorganisatie Onside inspireert hij jongeren om hun talenten te ontdekken en te benutten. Hij begeleidt hen als mentor, helpt hen verantwoordelijkheid te nemen en organiseert activiteiten die positiviteit en energie brengen in de wijk.&nbsp;<br><br>Zijn droom? Een Amsterdam waarin jongeren in élke buurt de kans krijgen om te groeien en het beste uit zichzelf te halen. Als trotse Amsterdammer gelooft hij in de kracht van de stad en haar talenten om samen een blijvende impact te maken.&nbsp;<\/p><p>Benieuwd naar het hele verhaal van Imrane? Bekijk de video waarin hij vertelt over zijn reis en missie! 🎥 <a href=\"https:\/\/amsterdam750.nl\/verhaal\/a-story-born-in-damsko\/\">https:\/\/amsterdam750.nl\/verhaal\/a-story-born-in-damsko\/<\/a><\/p><p>🎬 Deze video is gemaakt door Keori Taberima van het Mediacollege Amsterdam en geproduceerd in opdracht van de MBO-Hub Amsterdam en Amsterdam 750<br><br><strong style=\"text-decoration: underline;\">Muziek in Amsterdam<\/strong><br>Maak kennis met Silvester Gelderblom, DJ, producer en de man achter underground house feestjes. Terwijl hij studeert aan het Conservatorium in Haarlem, steekt hij maar liefst 80% van zijn tijd in het maken en draaien van vette beats. Silvester is een onmiskenbaar deel van de Amsterdamse elektronische dansscene, waar muziek de harten van jongeren verbindt en hen helpt hun identiteit te vormen.<br>https:\/\/amsterdam750.nl\/verhaal\/muziek-in-amsterdam\/<br>Credits: Luca Gelderblom<br><br><strong style=\"text-decoration: underline;\">Passie voor prestatie<\/strong><\/p><p>Amsterdam ademt sport. Al 750 jaar presteren Amsterdammers op het hoogste niveau, van eeuwenoude vechtsporten tot het moderne kickboksen. Deze passie voor sport zit diep in de Amsterdamse cultuur. Kampioenen worden hier van generatie op generatie grootgebracht, klaar om de stad op de kaart te zetten. Iconische plekken zoals de Johan Cruijff Arena en het Olympisch Stadion weerspiegelen deze rijke sportgeschiedenis. Met een sterke basis en een vurige ambitie blijft Amsterdam de komende 750 jaar sportprestaties voortbrengen.<\/p><p>Credits: Maurits van der Raaij<\/p><p><a href=\"https:\/\/amsterdam750.nl\/verhaal\/passie-voor-prestatie\/\">https:\/\/amsterdam750.nl\/verhaal\/passie-voor-prestatie\/<\/a><\/p><p><br><br><br><br><\/p><p><br><br><br><br><br><\/p>",
                "image" => null,
                "published_at" => "2025-02-24",
                "created_at" => "2025-02-24 11:11:47",
                "updated_at" => "2025-03-04 09:31:49",
                "links" => "[]",
                "show_on_homepage" => 0,
                "tags" => '["evenement"]',
                "slug" => "750-amsterdamse-verhalen"
            ],
            [
                "id" => 4,
                "title" => "Vaarplezier in De La Mar Theater",
                "content" => "<p><strong>𝐕𝐚𝐚𝐫𝐩𝐥𝐞𝐳𝐢𝐞𝐫 (𝟏𝟏 𝐣𝐚𝐧𝐮𝐚𝐫𝐢)<\/strong><br>Een recordpoging op 11 januari 2025, waarbij een grote groep mensen de cursus Klein Vaarbewijs 1 volgden in het DeLaMar Theater. <br><br>🎓 𝐌𝐁𝐎-𝐇𝐮𝐛 𝐛𝐢𝐣 𝐝𝐢𝐭 𝐞𝐯𝐞𝐧𝐭:&nbsp;<\/p><ul><li>Flowburo: eventmanagement en fotografie\/film<\/li><li>Vaarplezier Arjen Bergijk flowburo<\/li><\/ul><p><br><\/p>",
                "image" => null,
                "published_at" => "2025-02-24",
                "created_at" => "2025-02-24 11:13:22",
                "updated_at" => "2025-03-04 09:32:06",
                "links" => "[]",
                "show_on_homepage" => 0,
                "tags" => '["evenement"]',
                "slug" => "vaarplezier-in-de-la-mar-theater"
            ],
            [
                "id" => 5,
                "title" => "Sint in Amsterdam",
                "content" => "<p>Op 17 november 2024 stond Amsterdam in het teken van de jaarlijkse Sinterklaasintocht. Een evenement waar duizenden Amsterdammers, jong en oud, van genoten. Dankzij de inzet van <strong>200 MBO-Studenten<\/strong> was deze dag niet alleen feestelijk, maar ook vlekkeloos uitgevoerd!&nbsp;<br><br>Onze studenten namen verschillende belangrijke taken op zich:&nbsp;<\/p><ul><li><strong>𝐁𝐞𝐯𝐞𝐢𝐥𝐢𝐠𝐢𝐧𝐠<\/strong>: Studenten Beveiliging zorgden voor een veilige omgeving.&nbsp;<\/li><li><strong>𝐏𝐢𝐞𝐭𝐞𝐧<\/strong>: Studenten Leisure brachten met veel enthousiasme de magie van Sinterklaas tot leven.&nbsp;<\/li><li><strong>𝐒𝐜𝐡𝐦𝐢𝐧𝐤<\/strong>:MASK-studenten verzorgden de roetvegen.&nbsp;<\/li><li><strong>𝐆𝐚𝐬𝐭𝐯𝐫𝐢𝐣𝐡𝐞𝐢𝐝<\/strong>: Studenten van College Airport Hostesses ontvingen medewerkers en VIP-gasten.&nbsp;<\/li><li><strong>𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐢𝐭𝐞𝐢𝐭<\/strong>: Studenten van het Mediacollege Amsterdam ontwierpen een unieke vlag ter ere van Amsterdam 750 jaar.&nbsp;<\/li><li><strong>𝐅𝐨𝐭𝐨𝐠𝐫𝐚𝐟𝐢𝐞<\/strong>: Twee getalenteerde studenten legden alle mooie momenten vast.&nbsp;<\/li><li><strong>𝐌𝐮𝐳𝐢𝐞𝐤<\/strong>: Bands van de Music Production opleiding PACT+ gaven het feest een extra muzikaal tintje.&nbsp;<\/li><\/ul><p>Het evenement bracht niet alleen de stad samen, maar bood onze studenten ook een unieke kans om hun talenten in de praktijk te laten zien. Wat een geweldige samenwerking en prestatie! 👏&nbsp;<\/p><p><br><\/p>",
                "image" => "01JNG4AWKPW48JHJG7AT6J793T.png",
                "published_at" => "2025-02-24",
                "created_at" => "2025-02-24 11:15:10",
                "updated_at" => "2025-03-04 08:49:38",
                "links" => "[]",
                "show_on_homepage" => 0,
                "tags" => '["evenement"]',
                "slug" => "sint-in-amsterdam"
            ],
            [
                "id" => 6,
                "title" => "Showcase eventconcepten voor een betere toekomst",
                "content" => "<p>Op 8 november was MBO-Hub Amsterdam aanwezig op MBO College Centrum, waar derdejaars Business Events-studenten hun innovatieve event concepten presenteerden voor het 'Event op de Ring' dat gepland staat op 21 juni 2025, onderdeel van de ToekomstTiendaagse Maaike van Groenestyn. Deze studenten hebben wekenlang in groepsverband aan hun concepten gewerkt tijdens lessen waarin ze hun ideeën verder hebben ontwikkeld. In de 'Dragons' Den' kregen de deelnemers de kans om hun concepten voor maatschappelijke thema’s die Amsterdam vandaag de dag bezighouden te presenteren.&nbsp;<br><br><br>Thema's die aan bod kwamen, waren onder andere:<\/p><ul><li>Vrouwenemancipatie op de werkvloer<\/li><li>Eenzame ouderen<\/li><li>Woningnood<\/li><li>Verkeersveiligheid voor fietsers<\/li><li>Geluidsoverlast<\/li><li>Gelijkheid voor MBO-studenten vs. HBO &amp; WO<\/li><li>De kloof tussen lokale bewoners en expats<\/li><li>Ongelijkheid voor vrouwen<\/li><\/ul><p>De studenten pitchten hun ideeën met enthousiasme voor een ervaren jury uit de evenementenbranche, marketing en conceptontwikkeling. De jury - Jolijn Ursem, Jans Budding, Anna-Maria Giannattasio, Eva Gransier, Arine van Heeswijk en Leonoor Ruigrok - beoordeelde de projecten op relevantie, doelgroepgerichtheid, haalbaarheid, duurzaamheid en creativiteit.<\/p><p><br>Het team achter het ‘Unite Festival’ - Fleur Koetje, Jamie Sieben, Robin van Rossen, Marieke Stam &amp; Elize Julia Medema – was verantwoordelijk voor het winnende concept, dat zich richt op het verkleinen van de kloof tussen lokale bewoners en expats in Amsterdam. Dit evenement bevordert verbinding en begrip in de stad. 👏🎉<br><br><br><\/p>",
                "image" => "01JNG4CCZ8Q4J292518E2EJQH6.jpg",
                "published_at" => "2025-02-24",
                "created_at" => "2025-02-24 11:16:11",
                "updated_at" => "2025-03-04 09:34:39",
                "links" => "[]",
                "show_on_homepage" => 0,
                "tags" => '["evenement"]',
                "slug" => "showcase-eventconcepten-voor-een-betere-toekomst"
            ],
            [
                "id" => 7,
                "title" => "Theaterstuk ‘Waar wonen Saidjah en Adinda’",
                "content" => "<p>Op 10 januari vond bij Mediacollege Amsterdam de try-out plaats van de theatervoorstelling ‘Waar wonen Saidjah en Adinda’. <br><br>Deze voorstelling is gebaseerd op het iconische en tragische liefdesverhaal uit Multatuli’s beroemde boek ‘Max Havelaar’. De spelers zijn o.a. studenten van onze opleiding Filmacteur, zij spelen de voorstelling in het kader van hun stage. De groep jonge acteurs brengt het verhaal op een nieuwe, eigentijdse manier tot leven. Na de try-outs zal de voorstelling door heel Nederland te zien zijn.<br><br><span style=\"text-decoration: underline;\">Onze acteurs:<\/span><\/p><ul><li>Deniz Tüzüntürk<\/li><li>Noortje van Rossem<\/li><li>Gilliam Löw<\/li><li>Prosper Janssen<\/li><li>Kai Reijnaert<\/li><li>Annick Heidema<\/li><\/ul><p><br><br><\/p>",
                "image" => "01JNG48DAKY2C3MJTKXXMPBK3N.png",
                "published_at" => "2025-02-24",
                "created_at" => "2025-02-24 11:17:10",
                "updated_at" => "2025-03-04 08:51:05",
                "links" => "[]",
                "show_on_homepage" => 0,
                "tags" => '["evenement"]',
                "slug" => "theaterstuk-waar-wonen-saidjah-en-adinda"
            ],
            [
                "id" => 8,
                "title" => "Fotografie Paleis Mysteries",
                "content" => "<p>In het kader van het jubileumjaar biedt het Paleis op de Dam een speciaal educatief programma voor leerlingen uit groep 7 en 8: ‘<strong>𝐏𝐚𝐥𝐞𝐢𝐬 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐞𝐬<\/strong>’, ontwikkeld in samenwerking met Sherlocked. In de historische kelder zijn drie mysterieuze kisten ontdekt. Welke verhalen uit 350 jaar geschiedenis zullen zij onthullen? 🕰️✨&nbsp;<br><br>Op 6 november werd de lancering feestelijk gevierd, waarbij kinderen uit verschillende stadsdelen van Amsterdam als eersten op avontuur gingen door het Paleis. In totaal mogen maar liefst 750 kinderen kosteloos deelnemen aan dit programma, een kans om geschiedenis op een nieuwe manier te ervaren en te beleven!<br><br>De MBO-Hub was aanwezig om deze bijzondere dag vast te leggen. 📸 Onze talentvolle stagiair Martina Fagel, die zich specialiseert in fotografie, had de opening op beeld vastgelegd en bracht het enthousiasme en de verwondering van de kinderen prachtig in kaart. 🎉<\/p>",
                "image" => "01JNG4DK5T2GS0QYK1X6K7J68T.jpg",
                "published_at" => "2025-02-24",
                "created_at" => "2025-02-24 11:17:45",
                "updated_at" => "2025-03-04 09:34:56",
                "links" => "[]",
                "show_on_homepage" => 0,
                "tags" => '["evenement"]',
                "slug" => "fotografie-paleis-mysteries"
            ],
            [
                "id" => 9,
                "title" => "Scholencongres over Veiligheid op school ",
                "content" => "<p>Tijdens het Scholencongres Zuid (een samenwerking tussen de Gemeente Amsterdam, Team Jeugd en Veiligheid Stadsdeel Zuid en Amsterdam750) op 7 november, was de MBO-Hub aanwezig met een getalenteerde groep studenten van het Mediacollege Amsterdam. Het congres stond in het teken van veiligheid op scholen en bracht inspirerende gesprekken en inzichten samen.<br>Onze studenten Niniveh, Rosela, Jay, Destiano, Malak en Leshaira hebben keihard gewerkt aan de productie van de aftermovie en het interviewen van de gasten. <br><br>Tijdens dit project hebben ze belangrijke mediaskills ontwikkeld, zoals:<br>🎤 Professioneel interviewen<br>🎥 Videoproductie en montage<br>📋 Werken in een dynamische, real-life omgeving<br>Dank aan deze toppers voor hun inzet en de mooie productie die zij hebben neergezet! 👏<br>Benieuwd naar meer informatie over het evenement? Bekijk het <a href=\"https:\/\/activiteiten.amsterdam.nl\/activiteiten\/2024\/11\/scholencongres-zuid\/\">hier<\/a><br><br><br><\/p>",
                "image" => null,
                "published_at" => "2025-02-24",
                "created_at" => "2025-02-24 11:18:33",
                "updated_at" => "2025-03-04 09:35:29",
                "links" => "[]",
                "show_on_homepage" => 0,
                "tags" => '["evenement"]',
                "slug" => "scholencongres-over-veiligheid-op-school" 
            ]
            
        ];
        foreach ($projects as $project) {
            DB::table('projects')->updateOrInsert(
                ['id' => $project['id']],
                $project
            );
        }
    }
}
