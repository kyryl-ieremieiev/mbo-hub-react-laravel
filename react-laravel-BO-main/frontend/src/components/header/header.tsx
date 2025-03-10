import { ReactNode } from "react";
import styles from "./header.module.css";


interface Props {
    fullHeight: boolean;

    imagePath?: string | null;
    color?: string;

    children?: ReactNode;
}

export default function Header({ fullHeight, imagePath, color, children }: Props) {
    const backgroundColor = imagePath ? '#00000080' : color ? color : '#5e3289';

    return(
        <header className={`${styles.header} ${fullHeight ? styles.full : styles.small }`} style={{background: backgroundColor}}>
            { imagePath &&
                <figure className={styles.background}>
                    <img src={imagePath} alt="" />
                </figure>
            }

            {children}
        </header>   
    );
}