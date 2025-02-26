import CenteredSection from "@/components/centeredSection/centeredSection";
import Header from "@/components/header/header";

export default function About() {
  return (
    <>
      <Header fullHeight={false} color="#2f1944">
        <h2>Over MBO-Hub Amsterdam</h2>
      </Header>

      <CenteredSection>
        <h2>Onze Missie</h2>
        <p>MBO-Hub Amsterdam verbindt studenten, bedrijven en onderwijsinstellingen om innovatieve projecten te realiseren. Wij geloven in het potentieel van MBO-talent en creëren kansen voor praktijkervaring en professionele groei.MBO-Hub Amsterdam verbindt studenten, bedrijven en onderwijsinstellingen om innovatieve projecten te realiseren. Wij geloven in het potentieel van MBO-talent en creëren kansen voor praktijkervaring en professionele groei.</p>
      </CenteredSection>
    </>
  );
}