import { ReactNode } from "react";
import styles from "./centeredSection.module.css";

interface Props {
    maxWidth?: string;
    children?: ReactNode;
}

export default function CenteredSection({ maxWidth, children }: Props) {
    maxWidth = maxWidth ?? '75rem';

    return(
        <section className={styles.section} style={{maxWidth: maxWidth}}>
            {children}
        </section>
    );
}