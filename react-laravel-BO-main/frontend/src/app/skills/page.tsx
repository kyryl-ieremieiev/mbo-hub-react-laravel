"use client";

import CenteredSection from "@/components/centeredSection/centeredSection";
import { useState, useEffect } from "react";
import { getContent } from "@/util/content/useContent";

export default function Skills() {
  const [skills, setSkills] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedSkills = await getContent('skills');

      setSkills(fetchedSkills);
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
    </>
  );
}