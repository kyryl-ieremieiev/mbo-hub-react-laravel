import Link from "next/link";
import styles from "./navbar.module.css";
import CTAButton from "../ctaButton/ctaButton";

export default function Navbar() {
    const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "/login"; // Fallback voor veiligheid

    return (
        <nav className={styles.navigation}>
            <figure className={styles.figure}>
                <Link href="/">
                    <img src="/images/logo.webp" alt="MBO-Hub logo" />
                </Link>
            </figure>

            <ul className={styles.links}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/projects">Projecten</Link>
                </li>
                <li>
                    <Link href="/calendar">Kalender</Link>
                </li>
                <li>
                    <Link href="/about">Over Ons</Link>
                </li>
                <li>
                    <Link href="/skills">Onze Skills</Link>
                </li>
                <li >
                    <Link href={loginUrl}>Login</Link>
                </li>
                <li className={styles.special}>
                    <CTAButton href="/contact">Contact</CTAButton>
                </li>
            </ul>
        </nav>
    );
}
