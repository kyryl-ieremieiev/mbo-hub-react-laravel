import { ReactNode } from "react";
import Card from "../card/card";
import styles from "./imageCard.module.css";

interface Props {
    imagePath?: string | null;
    alt?: string;

    link?: string;

    banner?: boolean;

    children?: ReactNode;
}

export default function ImageCard({ imagePath, alt = "", children, link = "#", banner = false }: Props) {
    return(
        <a href={link} className={styles.card}>
            <figure className={`${styles.imageWrapper} ${imagePath ?? styles.empty}`}>
                { imagePath &&
                    <img className={styles.image} src={imagePath} alt={alt} />
                }

                { banner ?
                    <img className={styles.banner} src="/images/banner.png" alt="" /> : null
                }
            </figure>

            <div className={styles.content}>
                {children}
            </div>
        </a>
    );
}