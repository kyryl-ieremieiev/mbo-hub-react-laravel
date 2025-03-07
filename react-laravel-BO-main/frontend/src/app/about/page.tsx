"use client";

import CenteredSection from "@/components/centeredSection/centeredSection";
import Header from "@/components/header/header";
import { useState, useEffect } from "react";
import { getContent } from "@/util/content/useContent";
import Grid from "@/components/grid/grid";
import PersonCard from "@/components/personCard/personCard";

export default function About() {
  const [team, setTeam] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getContent('teams');

      setTeam(data);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <>
      <Header fullHeight={false} color="#2f1944">
        <h2>Over MBO-Hub Amsterdam</h2>
      </Header>

      <CenteredSection>
        <h2>Onze Missie</h2>
        <p>MBO-Hub Amsterdam verbindt studenten, bedrijven en onderwijsinstellingen om innovatieve projecten te realiseren. Wij geloven in het potentieel van MBO-talent en creëren kansen voor praktijkervaring en professionele groei.MBO-Hub Amsterdam verbindt studenten, bedrijven en onderwijsinstellingen om innovatieve projecten te realiseren. Wij geloven in het potentieel van MBO-talent en creëren kansen voor praktijkervaring en professionele groei.</p>
      </CenteredSection>

      <CenteredSection maxWidth="140rem">
        <h2>Ontmoet ons Team</h2>
        <Grid columns={3}>
          {
            team.map(member => <PersonCard key={`team-${member.id}`} person={member} />)
          }
        </Grid>
      </CenteredSection>
    </>
  );
}