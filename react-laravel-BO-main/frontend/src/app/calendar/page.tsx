"use client";

import CenteredSection from "@/components/centeredSection/centeredSection";
import { useState, useEffect } from "react";
import { getContent } from "@/util/content/useContent";

export default function Calendar() {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedEvents = await getContent('events');

      setEvents(fetchedEvents);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <>
      <CenteredSection>
        <h2>Evenementenkalender</h2>
        <p>Bekijk en filter aankomende evenementen en activiteiten</p>
      </CenteredSection>
      {
        loading && (
          <div>
            { events }
          </div>
        )
      }
    </>
  );
}