import { Children, ReactNode } from "react";
import styles from "./card.module.css";
import Link from "next/link";

interface Props {
    link?: string;

    centered?: boolean;

    children?: ReactNode;
}

export default function Card({ link, children, centered = false }: Props) {
    return(
        <>
            { link ? 
                <Link href={link} className={`${styles.card} ${centered ? styles.centered : ''}`}>{children}</Link> :
                <article className={`${styles.card} ${centered ? styles.centered : ''}`}>{children}</article>
            }
        </>
    );
}