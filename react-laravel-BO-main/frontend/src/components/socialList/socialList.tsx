import { CSSProperties } from "react";
import styles from "./socialList.module.css";

interface Props {
    color?: string;
}

export default function SocialList({ color = "#fff" }: Props) {
    return (
        <ul className={styles.socials} style={{'--color': color} as CSSProperties}>
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
    );
}