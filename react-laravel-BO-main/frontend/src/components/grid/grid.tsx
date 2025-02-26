import { CSSProperties, ReactNode } from "react";
import styles from "./grid.module.css";

interface Props {
    columns: number;

    children: ReactNode;
}

export default function Grid({ columns, children }: Props) {
    return(
        <div className={styles.grid} style={{'--columns': columns} as CSSProperties}>
            {children}
        </div>
    );
}