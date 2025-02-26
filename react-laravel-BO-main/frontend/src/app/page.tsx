import Header from "@/components/header/header";

import styles from "./home.module.css";
import CTAButton from "@/components/ctaButton/ctaButton";
import CenteredSection from "@/components/centeredSection/centeredSection";
import VideoSection from "@/components/videoSection/videoSection";

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

      <VideoSection title="Ontdek MBO-Hub Amsterdam" videoUrl="https://www.youtube-nocookie.com/embed/kwZH1llzlCM?si=dKV2JShzQozA8P_B" />
    </>
  );
}
