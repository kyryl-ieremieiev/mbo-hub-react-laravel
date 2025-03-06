"use client";

import CenteredSection from "@/components/centeredSection/centeredSection";
import { useState, useEffect, useCallback } from "react";
import { getContent } from "@/util/content/useContent";
import { parseDate } from "@/util/date/parseDate";
import ContentSection from "@/components/calendar/contentSection";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styles from './calendar.module.css'

export default function CalendarPage() {
  const [events, setEvents] = useState<any>([]);
  const [date, setDate] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      let params
      if(date) {
        params = new URLSearchParams({ date: date })
      }
      const { data } = await getContent('events', params);

      setEvents(data);
      setLoading(false);
    }
    fetchData();
  }, [date])

  const changeDate = useCallback((newDate) => {
    if(date === null || date !== parseDate(newDate)) {
      setDate(parseDate(newDate));
      return
    }
    setDate(null);
  }, [date]);

  return (
    <>
      <CenteredSection>
        <h2>Evenementenkalender</h2>
        <p>Bekijk en filter aankomende evenementen en activiteiten</p>
      </CenteredSection>
      <section className={styles.main}>
        <Calendar value={date} onChange={changeDate}/>
        <div>
          {
            !loading ? (
              <ContentSection content={ events }/>
            )
            :
            (
              <>
              </>
            )
          }
        </div>
      </section>
    </>
  );
}