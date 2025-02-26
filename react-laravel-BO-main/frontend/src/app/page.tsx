import Header from "@/components/header/header";

import styles from "./home.module.css";
import CTAButton from "@/components/ctaButton/ctaButton";
import CenteredSection from "@/components/centeredSection/centeredSection";
import VideoSection from "@/components/videoSection/videoSection";
import Grid from "@/components/grid/grid";
import Card from "@/components/card/card";
import ImageCard from "@/components/imageCard/imageCard";
import ProjectCard from "@/components/projectCard/projectCard";

const featuredProjects = [
  {
      "id": 2,
      "title": "Visual Poem Project",
      "content": "<p>Hoe breng je de Amsterdamse cultuur tot leven in beeld? Een groep van 90 tweedejaars studenten Audiovisueel Mediacollege Amsterdam laten hun talent spreken en creërden inspirerende visual poems voor culturele instellingen in de stad.&nbsp;<br><br>Deze creatieve promotievideo’s, gemaakt in de stijl van een visual poem, hebben als doel jongeren aan te moedigen om de veelzijdige culturele instellingen van Amsterdam te bezoeken. Bovendien vieren de projecten het rijke 750-jarige bestaan van de stad.<br><br>De studenten doken diep in de vraag: hoe kunnen we meer jongeren betrekken bij culturele instellingen? Ze onderzochten wat cultuur voor jongeren kan betekenen en hoe deze instellingen beter kunnen aansluiten bij de leefwereld van de nieuwe generatie.&nbsp;<br><br>Studenten werden in teams gekoppeld aan toonaangevende instellingen, zoals Museum ’t Schip, IDFA, Eye Filmmuseum, FOAM, Allard Pierson, Amsterdam Museum, Carré, CJP, Concertgebouw, Stedelijk Museum, Rookvrije Generatie en Theater de Krakeling. Samen verkenden ze de rijke verhalen en mogelijkheden die deze instellingen te bieden hebben.<br><br>Bekijk hier een van de indrukwekkende resultaten. Deze video is gemaakt door studenten Roshni Harkoe, Harper Cham en Oumayra ben Abdellah met Eye Filmmuseum als inspiratiebron.<br>Video: volgt<br><br><br><br></p>",
      "image": null,
      "published_at": "2025-02-24",
      "created_at": "2025-02-24T11:08:19.000000Z",
      "updated_at": "2025-02-24T11:08:19.000000Z"
  },
  {
      "id": 3,
      "title": "Amsterdam 750 Diner in het Scheepvaartmuseum",
      "content": "<p>Tijdens het Amsterdam 750-diner op 21 november 2024, “Een culinaire reis door de eeuwen”, werkten MBO-studenten van verschillende opleidingen samen. Dit bijzondere culinaire evenement bracht de smaken van het verleden naar het heden, waarbij elke gang was geïnspireerd door een ander tijdperk uit de 750-jarige geschiedenis van Amsterdam. <br><br>Studenten van ROC Amsterdam kookten met topchefs, serveerden het diner, hielpen bij de eventproductie en zorgden voor een geweldige gastbeleving. Ook werden er mooie filmpjes gemaakt door Mediacollege en zorgde een student van de MASK-opleiding voor de visagie.<br><br><strong>𝐌𝐁𝐎-𝐇𝐮𝐛 𝐛𝐢𝐣 𝐝𝐢𝐭 𝐞𝐯𝐞𝐧𝐭:</strong></p><ul><li><strong>Culinair &amp; Gastheerschap: koken en serveren&nbsp;</strong></li><li><strong>Mask opleiding: visagie en film&nbsp;</strong></li><li><strong>MaMedia: chefkoks filmen en gerechten toelichten&nbsp;</strong></li><li><strong>Guest Experience: een onvergetelijke avond creëren</strong></li></ul><p><br><br></p>",
      "image": null,
      "published_at": "2025-02-24",
      "created_at": "2025-02-24T11:09:51.000000Z",
      "updated_at": "2025-02-24T11:09:51.000000Z"
  },
  {
      "id": 4,
      "title": "750 Amsterdamse Verhalen",
      "content": "<p>Speciaal voor het jubileumjaar worden op de website amsterdam750.nl, 750 Amsterdamse verhalen verzameld. Zo wordt niet alleen de rijke geschiedenis van de stad gevierd, maar krijgen we ook een intieme inkijk in het leven van Amsterdammers. Wij zijn er trots op dat studenten van Mediacollege Amsterdam een aantal van deze verhalen hebben gemaakt. Bekijk de verschillende video’s hieronder: <br><br><br><strong style=\"text-decoration: underline;\">\"De Smaak van Amsterdam\"</strong><br>Zoals het verhaal over \"De Smaak van Amsterdam\". In deze video neemt Isabella je mee op een culinaire reis door de stad. Ze spreekt met Greg Mon, die al negen jaar tosti’s bakt op de Albert Cuyp, waaronder het beroemde \"Amsterbammetje\" met Hollandse kazen en bosui. Vervolgens ontmoet ze Gijs de Rooij, een trotse Amsterdammer die traditionele gerechten zoals stamppot en gehaktballen serveert in zijn café. <br>Bekijk het verhaal hier👉 https://amsterdam750.nl/verhaal/de-smaak-van-amsterdam/<br>🎥: Lars Hansen (student Audiovisueel, Mediacollege Amsterdam)<br><br><strong style=\"text-decoration: underline;\">De brug over het IJ!</strong><br>Dit bijzondere verhaal gaat over de Oostbrug in Amsterdam. Al bijna 200 jaar dromen Amsterdammers van een directe verbinding over het IJ in Oost. In 2023 ontwierpen mbo-studenten Maxim en David de \"Green Line\" brug, een<br>duurzame en innovatieve oplossing die groen en stad verbindt. Toch blijven<br>Amsterdammers voorlopig afhankelijk van de pont. Hun visie is gedurfd, maar de realisatie van de brug laat nog op zich wachten. De toekomst oogt echter veelbelovend! Meer hierover weten/het hele filmpje bekijken?&nbsp; 👉 https://amsterdam750.nl/verhaal/brug-over-t-ij/<br> 🎥: Len ter Laak (student Audiovisueel, Mediacollege Amsterdam)<br><br><strong style=\"text-decoration: underline;\">A story born in Damsko</strong><br>Imrane (24) is een geboren en getogen Amsterdammer die zijn jeugd doorbracht op de pleintjes van Osdorp, waar de bal en de buurt een grote rol speelden. Voor hem is Osdorp niet zomaar een wijk, maar een hechte gemeenschap die als familie voelt. Het gaf hem levenslessen die hem hebben gevormd tot wie hij nu is.&nbsp;<br>Tegenwoordig geeft Imrane terug aan de buurt. Via jongerenorganisatie Onside inspireert hij jongeren om hun talenten te ontdekken en te benutten. Hij begeleidt hen als mentor, helpt hen verantwoordelijkheid te nemen en organiseert activiteiten die positiviteit en energie brengen in de wijk.&nbsp;<br><br>Zijn droom? Een Amsterdam waarin jongeren in élke buurt de kans krijgen om te groeien en het beste uit zichzelf te halen. Als trotse Amsterdammer gelooft hij in de kracht van de stad en haar talenten om samen een blijvende impact te maken.&nbsp;</p><p>Benieuwd naar het hele verhaal van Imrane? Bekijk de video waarin hij vertelt over zijn reis en missie! 🎥 <a href=\"https://amsterdam750.nl/verhaal/a-story-born-in-damsko/\">https://amsterdam750.nl/verhaal/a-story-born-in-damsko/</a></p><p>🎬 Deze video is gemaakt door Keori Taberima van het Mediacollege Amsterdam en geproduceerd in opdracht van de MBO-Hub Amsterdam en Amsterdam 750<br><br><strong style=\"text-decoration: underline;\">Muziek in Amsterdam</strong><br>Maak kennis met Silvester Gelderblom, DJ, producer en de man achter underground house feestjes. Terwijl hij studeert aan het Conservatorium in Haarlem, steekt hij maar liefst 80% van zijn tijd in het maken en draaien van vette beats. Silvester is een onmiskenbaar deel van de Amsterdamse elektronische dansscene, waar muziek de harten van jongeren verbindt en hen helpt hun identiteit te vormen.<br>https://amsterdam750.nl/verhaal/muziek-in-amsterdam/<br>Credits: Luca Gelderblom<br><br><strong style=\"text-decoration: underline;\">Passie voor prestatie</strong></p><p>Amsterdam ademt sport. Al 750 jaar presteren Amsterdammers op het hoogste niveau, van eeuwenoude vechtsporten tot het moderne kickboksen. Deze passie voor sport zit diep in de Amsterdamse cultuur. Kampioenen worden hier van generatie op generatie grootgebracht, klaar om de stad op de kaart te zetten. Iconische plekken zoals de Johan Cruijff Arena en het Olympisch Stadion weerspiegelen deze rijke sportgeschiedenis. Met een sterke basis en een vurige ambitie blijft Amsterdam de komende 750 jaar sportprestaties voortbrengen.</p><p>Credits: Maurits van der Raaij</p><p><a href=\"https://amsterdam750.nl/verhaal/passie-voor-prestatie/\">https://amsterdam750.nl/verhaal/passie-voor-prestatie/</a></p><p><br><br><br><br></p><p><br><br><br><br><br></p>",
      "image": null,
      "published_at": "2025-02-24",
      "created_at": "2025-02-24T11:11:47.000000Z",
      "updated_at": "2025-02-24T11:11:47.000000Z"
  },
]

export default function Home() {
  return (
    <>
      <Header fullHeight={true} imagePath="images/cover-home.jpg">
        <h1>Samen bouwen we aan de toekomst van Amsterdam!</h1>
        <p>Verbinden van talent, innovatie en ondernemerschap in het hart van Amsterdam</p>

        <ul className={styles.headerLinks}>
          <li>
            <CTAButton href="#">Bekijk onze projecten</CTAButton>
          </li>

          <li>
            <CTAButton href="#" alt={true}>Contact opnemen</CTAButton>
          </li>
        </ul>
      </Header>

      <CenteredSection>
        <h2>MBO-Hub Amsterdam is van start!</h2>
        <p>MBO-Hub Amsterdam is een samenwerking tussen ROC van Amsterdam, Mediacollege Amsterdam en HMC, opgericht in het kader van Amsterdam 750. Wij zijn dé plek waar mbo-studenten, bedrijven, de Gemeente Amsterdam en initiatieven samenkomen om te werken aan de toekomst van onze stad.</p>
        <p>De MBO-Hub biedt studenten een kans om hun talenten in de praktijk te brengen, door ze te betrekken bij projecten, evenementen en initiatieven rondom het 750-jarig jubileum van Amsterdam.</p>
        <p>We verbinden bedrijven en organisaties met mbo-studenten, die meewerken aan diverse opdrachten zoals evenementenorganisatie, videoproducties, groenprojecten en nog veel meer. Hierdoor doen de studenten waardevolle praktijkervaring op, door middel van stages, projecten en leerwerkopdrachten, en dragen ze bij aan de ontwikkeling van Amsterdam.</p>
        <p className="stylized">Mbo-studenten vormen het kloppende hart van de stad. Door hen te betrekken bij belangrijke projecten zorgen we voor nieuwe ideeën, jonge energie en een sterkere verbinding tussen onderwijs en de maatschappij.</p>
      </CenteredSection>
      
      <CenteredSection maxWidth="unset">
        <Grid columns={3}>
          <Card link="/about">
            <h3>MBO-Hub Team & Partner</h3>
            <p>Ontdek ons team en de toonaangevende partners waarmee we samenwerken om innovatie in het MBO mogelijk te maken.</p>
          </Card>

          <Card link="/projects">
            <h3>Projecten</h3>
            <p>Bekijk de innovatieve projecten waar MBO-studenten en bedrijven samen aan werken.</p>
          </Card>

          <Card link="/calendar">
            <h3>Kalender</h3>
            <p>Blijf op de hoogte van de laatste ontwikkelingen en aankomende events.</p>
          </Card>
        </Grid>
      </CenteredSection>

      <VideoSection title="Ontdek MBO-Hub Amsterdam" videoUrl="https://www.youtube-nocookie.com/embed/kwZH1llzlCM?si=dKV2JShzQozA8P_B" />
    
      <CenteredSection maxWidth="unset">
        <h2>Uitgelichte projecten</h2>
        <Grid columns={3}>
          {featuredProjects.map(project => <ProjectCard project={project} key={`featured-project-${project.id}`} />)}
        </Grid>
      </CenteredSection>
    </>
  );
}
