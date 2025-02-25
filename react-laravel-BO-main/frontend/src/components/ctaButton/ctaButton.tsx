import Link from "next/link";
import styles from "./ctaButton.module.css";
import { ReactNode } from "react";

interface Props {
    href: string;

    alt?: boolean;
    
    children?: ReactNode
}

export default function CTAButton({ href, alt, children }: Props) {
    return(
        <Link href={href} className={`${styles.cta} ${alt? styles.alt : styles.normal}`}>{children}</Link>
    );
}