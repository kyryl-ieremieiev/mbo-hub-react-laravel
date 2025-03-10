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
  const [eventTypes, setEventTypes] = useState<any>([]);
  const [date, setDate] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEventTypes = async () => {
      const { data } = await getContent('event-types');
      setEventTypes(data);
    }
    const fetchData = async () => {
      let params
      if(date) {
        params = new URLSearchParams({ date: date })
      }

      let { data } = await getContent('events', params);

      setEvents(data);
      setLoading(false);
    }
    fetchEventTypes();
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
        <h2>Kalender</h2>
        <p>Bekijk en filter aankomende evenementen en activiteiten</p>
      </CenteredSection>
      
      <section className={styles.main}>
        <div className={styles.filters}>
          <Calendar value={date} onChange={changeDate}/>
          
        </div>
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