import { ReactNode } from "react";
import styles from "./flexList.module.css";

interface Props {
    children?: ReactNode;
}

export default function FlexList({ children }: Props) {
    return(
        <ul className={styles.list}>
            {children}
        </ul>
    );
}