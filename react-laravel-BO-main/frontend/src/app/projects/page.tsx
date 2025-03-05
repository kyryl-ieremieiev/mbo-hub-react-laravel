"use client";

import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import { getContent } from "@/util/content/useContent";
import CenteredSection from "@/components/centeredSection/centeredSection";
import Grid from "@/components/grid/grid";
import ProjectCard from "@/components/projectCard/projectCard";
import FlexList from "@/components/flexList/flexList";
import CTAButton from "@/components/ctaButton/ctaButton";

export default function Projects() {
  const [projects, setProjects] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getContent('projects');

      setProjects(fetchedProjects.data);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <>
      <Header fullHeight={false} imagePath="images/cover-projects.jpg">
        <h2>Onze Projecten</h2>
        <p>Ontdek de innovatieve projecten waar MBO-studenten en bedrijven samen aan werken </p>
      </Header>

      <CenteredSection maxWidth="140rem">
        <h2>Alle projecten</h2>
        <Grid columns={3}>
          {projects.map(project => <ProjectCard key={`project-${project.id}`} project={project} />)}
        </Grid>
      </CenteredSection>

      <CenteredSection>
        <h2>Interesse in samenwerken?</h2>
        <p>Wij zijn altijd op zoek naar verbinding en kijken graag hoe we samen kunnen werken. Wil je namens een bedrijf of organisatie kijken hoe je kunt samenwerken met mbo-studenten? Of ben je een student en wil je meewerken aan een project voor toonaangevende bedrijven in Amsterdam?</p>
        <FlexList>
          <li>
            <CTAButton href="mailto:info@mbo-hub.amsterdam?subject=Project voor MBO-Hub">Project aanmelden als bedrijf</CTAButton>
          </li>

          <li>
            <CTAButton href="mailto:info@mbo-hub.amsterdam?subject=Interesse deelname student" alt={true}>Aanmelden als student</CTAButton>
          </li>
        </FlexList>
      </CenteredSection>
    </>
  );
}