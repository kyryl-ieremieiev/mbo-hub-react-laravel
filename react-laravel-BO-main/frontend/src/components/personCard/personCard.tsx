import Card from "../card/card";
import styles from "./personCard.module.css";

interface Props {
    person: any;
}

export default function PersonCard({ person }: Props) {
    return(
        <Card centered={true}>
            <figure className={styles.pfp}>
                <img src={person.image ?? '/images/default_pfp.jpg'} alt="" />
            </figure>

            <h3>{person.name}</h3>
            <p>{person.role}</p>
        </Card>
    );
}