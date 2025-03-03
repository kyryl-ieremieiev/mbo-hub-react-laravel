"use client";

import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import { getContent } from "@/util/content/useContent";
import CenteredSection from "@/components/centeredSection/centeredSection";
import Grid from "@/components/grid/grid";
import ProjectCard from "@/components/projectCard/projectCard";

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
    </>
  );
}