import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    return(
        <nav className={styles.navigation}>
            <figure className={styles.figure}>
                <img src="/images/logo.webp" alt="MBO-Hub logo" />
            </figure>

            <ul className={styles.links}>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">Projecten</Link>
                </li>
                <li>
                    <Link href="#">Kalender</Link>
                </li>
                <li>
                    <Link href="#">Over Ons</Link>
                </li>
                <li>
                    <Link href="#">Onze Skills</Link>
                </li>
                <li>
                    <Link href="#">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}