import Header from "@/components/header/header";

import styles from "./home.module.css";
import CTAButton from "@/components/ctaButton/ctaButton";

export default function Home() {
  return (
    <>
      <Header fullHeight={true} imagePath="images/cover-home.jpg">
        <h1>Samen bouwen we aan de toekomst van Amsterdam!</h1>
        <p>Verbinden van talent, innovatie en ondernemerschap in het hart van Amsterdam</p>

        <ul className={styles.headerLinks}>
          <CTAButton href="#">Bekijk onze projecten</CTAButton>
          <CTAButton href="#" alt={true}>Contact opnemen</CTAButton>
        </ul>

      </Header>
    </>
  );
}
