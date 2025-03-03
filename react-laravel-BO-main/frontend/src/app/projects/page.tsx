"use client";

import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import { getContent } from "@/util/content/useContent";

export default function Projects() {
  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getContent('projects');

      setProjects(fetchedProjects);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <>
      <Header fullHeight={false} imagePath="images/cover-projects.jpg">
        <h2>Onze Projecten</h2>
        <p>Ontdek de innovatieve projecten waar MBO-studenten en bedrijven samen aan werken </p>
        {
          loading && (
            <div>
              { projects }
            </div>
          )
        }
      </Header>
    </>
  );
}