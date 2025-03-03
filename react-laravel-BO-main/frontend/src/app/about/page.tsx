"use client";

import CenteredSection from "@/components/centeredSection/centeredSection";
import Header from "@/components/header/header";
import { useState, useEffect } from "react";
import { getContent } from "@/util/content/useContent";

export default function About() {
  const [team, setTeam] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedTeam = await getContent('teams');

      setTeam(fetchedTeam);
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

      {
        loading && (
          <div>
            { team }
          </div>
        )
      }
    </>
  );
}