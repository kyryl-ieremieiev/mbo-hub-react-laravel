"use client";

import Header from "@/components/header/header";

import styles from "./home.module.css";
import CTAButton from "@/components/ctaButton/ctaButton";
import CenteredSection from "@/components/centeredSection/centeredSection";
import VideoSection from "@/components/videoSection/videoSection";
import Grid from "@/components/grid/grid";
import Card from "@/components/card/card";
import ImageCard from "@/components/imageCard/imageCard";
import ProjectCard from "@/components/projectCard/projectCard";
import { useEffect, useState } from "react";
import { getContent } from "@/util/content/useContent";

export default function Home() {
    const [projects, setProjects] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
      const fetchData = async () => {
        const fetchedProjects = await getContent('projects', 6, new URLSearchParams({home: 'true'}));
        console.log(fetchedProjects)
        setProjects(fetchedProjects.data);
        setLoading(false);
      }
      fetchData();
    }, []);

  return (
    <>
      <Header fullHeight={true} imagePath="images/cover-home.jpg">
        <h1>Met studentenkracht naar de toekomst van Amsterdam</h1>
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
          {projects.map(project => <ProjectCard project={project} key={`featured-project-${project.id}`} />)}
        </Grid>
      </CenteredSection>
    </>
  );
}
