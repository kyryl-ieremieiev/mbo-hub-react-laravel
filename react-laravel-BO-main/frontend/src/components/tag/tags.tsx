import { CSSProperties, ReactNode } from "react";
import styles from "./tags.module.css";

interface Props {
    color?: string;

    tags: Array<{name: string, color?: string}>;
}

export default function Tags({ color = '#c4a9df', tags }: Props) {
    if(!tags) return;

    return(
        <ul className={styles.tags}>
            {tags.map((tag, i) => <li key={`tag-${i}`} className={styles.tag} style={{'--color': tag.color ?? color} as CSSProperties}>{tag.name}</li>)}
        </ul>
    );
}