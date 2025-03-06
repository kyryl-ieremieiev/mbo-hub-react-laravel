import { EventType } from '@/util/interface/events';
import Event from '@/components/calendar/event'

interface Props {
    content: EventType[]
}

export default function ContentSection ({ content }: Props) {

    return (
        <>
            {
                content.map(event => (
                    <Event event={event}></Event>
                ))
            }
        </>
    )
}