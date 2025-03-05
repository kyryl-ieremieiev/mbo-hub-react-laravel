import styles from "./skillCard.module.css";

import Card from "../card/card";
import CTAButton from "../ctaButton/ctaButton";

interface Props {
    skill: any;
}

export default function SkillCard({ skill }: Props) {
    return(
        <Card>
            <h3>{skill.title}</h3>
            <div dangerouslySetInnerHTML={{__html: skill.description}} />
            { skill.email &&
                <div className={styles.cta}>
                    <CTAButton alt={true} href={`mailto:${skill.email}?subject=${skill.email_subject ?? ''}`}>Interesse?</CTAButton>
                </div>
            }
        </Card>
    );
}