import { ReactNode } from "react";
import styles from "./centeredSection.module.css";

interface Props {
    children?: ReactNode;
}

export default function CenteredSection({ children }: Props) {
    return(
        <section className={styles.section}>
            {children}
        </section>
    );
}