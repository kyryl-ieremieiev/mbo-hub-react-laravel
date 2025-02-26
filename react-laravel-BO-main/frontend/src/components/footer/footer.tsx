import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <section className={styles.grid}>
                <div>
                    <h3>Contact</h3>
                    <a href="mailto:info@mbo-hub.amsterdam" className={styles.email}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4" data-component-path="src\components\Footer.tsx" data-component-name="Mail" data-component-line="13" data-component-file="Footer.tsx" data-component-content="%7B%22className%22%3A%22h-4%20w-4%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        info@mbo-hub.amsterdam
                    </a>

                    <p>Ben je benieuwd wat mbo-studenten voor jouw project kunnen betekenen? Neem contact met ons op!</p>
                </div>

                <div>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <Link href="/home">Home</Link>
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
                    <ul className={styles.socials}>
                        <li>
                            <a href="https://www.linkedin.com/company/mbo-hub-amsterdam/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-6 w-6" data-component-path="src\components\Footer.tsx" data-component-name="Linkedin" data-component-line="59" data-component-file="Footer.tsx" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/mbohub.amsterdam/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram h-6 w-6" data-component-path="src\components\Footer.tsx" data-component-name="Instagram" data-component-line="68" data-component-file="Footer.tsx" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/@MBO-Hub" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube h-6 w-6" data-component-path="src\components\Footer.tsx" data-component-name="Youtube" data-component-line="77" data-component-file="Footer.tsx" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <hr className={styles.separator} />
            <p className={styles.copyright}>© 2025 MBO-Hub Amsterdam. Alle rechten voorbehouden.</p>
        </footer>
    );
}