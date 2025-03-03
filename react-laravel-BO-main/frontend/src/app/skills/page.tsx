"use client";

import CenteredSection from "@/components/centeredSection/centeredSection";
import { useState, useEffect } from "react";
import { getContent } from "@/util/content/useContent";
import Grid from "@/components/grid/grid";
import SkillCard from "@/components/skillCard/skillCard";

export default function Skills() {
  const [skills, setSkills] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedSkills = await getContent('skills');

      setSkills(fetchedSkills.data);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <>
      <CenteredSection>
        <h2>Onze Skills</h2>
        <p>Ontdek de diverse vaardigheden van onze MBO-studenten en zie hoe zij kunnen bijdragen aan jouw project</p>
      </CenteredSection>

      <Grid columns={3}>
        {skills.map(skill => <SkillCard key={`skill-${skill.id}`} skill={skill}></SkillCard>)}
      </Grid>
    </>
  );
}