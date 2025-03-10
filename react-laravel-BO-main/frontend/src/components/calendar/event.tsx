import { EventType } from '@/util/interface/events';
import styles from "./event.module.css";
import Tags from '../tag/tags';
import { useMemo } from 'react';
import { formatDateDutch } from '@/util/date/parseDate';
interface Props {
    event: EventType,
}

export default function Event ({ event }: Props) {
    const tags = useMemo(() => {
        if(!event.tags) return []
        if(typeof event.tags[0] === 'string') {
            return event.tags.map((tag: string) => {return {name: tag, color: undefined}});
        }
        return event.tags
    }, [event])
    
    const description = useMemo(() => {
        const regex = /((\s*\S+){15})([\s\S]*)/;
        const subst = `$1...`;

        return event.description.replace(regex, subst);
    }, [event])

    return (
        <article className={styles.event__card}>
            <div className={styles.event__heading}>
                <h3 className={styles.event__title}>{ event.title }</h3>
                { 
                    event.tags && (
                        <Tags tags={tags}/>
                    )
                }
            </div>
            <p className={styles.event__underTitle}>{ event.date ? formatDateDutch(event.date):null }</p>
            <p className={styles.event__underTitle}>Locatie: { event.location }</p>

            <div className={styles.event__desc}>
                <p dangerouslySetInnerHTML={{ __html: description }}/>
            </div>
        </article>
    )
}