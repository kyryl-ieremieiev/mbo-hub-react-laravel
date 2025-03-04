import { CSSProperties, ReactNode } from "react";
import styles from "./tags.module.css";

interface Props {
    color?: string;
    background?: string;
    hoverBackground?: string;

    tags: Array<string>;
}

export default function Tags({ color = '#5e3289', background = '#eae6ef', hoverBackground = '#d0c7db', tags }: Props) {
    if(!tags) return;
    return(
        <ul className={styles.tags} style={{'--fg': color, '--bg': background, '--bg-hover': hoverBackground} as CSSProperties}>
            {tags.map((tag, i) => <li key={`tag-${i}`} className={styles.tag}>{tag}</li>)}
        </ul>
    );
}