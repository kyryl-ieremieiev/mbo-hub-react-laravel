import { ReactNode } from "react";
import Card from "../card/card";
import styles from "./imageCard.module.css";

interface Props {
    imagePath?: string | null;
    alt?: string;

    link?: string;

    children?: ReactNode;
}

export default function ImageCard({ imagePath, alt = "", children, link = "#" }: Props) {
    return(
        <a href={link} className={styles.card}>
            <figure className={`${styles.image} ${imagePath ?? styles.empty}`}>
                { imagePath &&
                    <img src={imagePath} alt={alt} />
                }
            </figure>

            <div className={styles.content}>
                {children}
            </div>
        </a>
    );
}