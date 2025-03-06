import Link from "next/link";
import styles from "./footer.module.css";
import SocialList from "../socialList/socialList";
import ContactLink from "../contactLink/contactLink";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <section className={styles.grid}>
                <div>
                    <h3>Contact</h3>

                    <ContactLink href="mailto:info@mbo-hub.amsterdam" color="white" iconColor="white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4" data-component-path="src\components\Footer.tsx" data-component-name="Mail" data-component-line="13" data-component-file="Footer.tsx" data-component-content="%7B%22className%22%3A%22h-4%20w-4%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        info@mbo-hub.amsterdam
                    </ContactLink>

                    <p>Ben je benieuwd wat mbo-studenten voor jouw project kunnen betekenen? Neem contact met ons op!</p>
                </div>

                <div>
                    <h3>Links</h3>
                    <ul>
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
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Volg ons</h3>
                    <SocialList />
                </div>
            </section>

            <hr className={styles.separator} />
            <p className={styles.copyright}>© 2025 MBO-Hub Amsterdam. Alle rechten voorbehouden.</p>
        </footer>
    );
}