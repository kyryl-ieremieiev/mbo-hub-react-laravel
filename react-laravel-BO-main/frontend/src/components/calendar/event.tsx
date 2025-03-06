import { EventType } from '@/util/interface/events';
import styles from "./event.module.css";
import Tags from '../tag/tags';
interface Props {
    event: EventType,
}

export default function Event ({ event }: Props) {
    return (
        <article>
            <div>
                <h3>{ event.title }</h3>
                { 
                    event.tags && (
                        <Tags tags={event.tags}/>
                    )
                }
            </div>
            <p>{ event.date }</p>
            <p>Locatie: { event.location }</p>

            <p dangerouslySetInnerHTML={{ __html: event.description }}/>
        </article>
    )
}