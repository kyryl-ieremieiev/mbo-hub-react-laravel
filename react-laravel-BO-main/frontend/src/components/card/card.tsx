import { Children, ReactNode } from "react";
import styles from "./card.module.css";
import Link from "next/link";

interface Props {
    link?: string;

    children?: ReactNode;
}

export default function Card({ link, children }: Props) {
    return(
        <>
            { link ? 
                <Link href={link} className={styles.card}>{children}</Link> :
                <article className={styles.card}>{children}</article>
            }
        </>
    );
}