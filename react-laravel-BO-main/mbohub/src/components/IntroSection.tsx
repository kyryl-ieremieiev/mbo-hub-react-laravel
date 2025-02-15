import { Card } from "./ui/card";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export const IntroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      title: "MBO-Hub Team & Partners",
      description: "Ontdek ons team en de toonaangevende partners waarmee we samenwerken om innovatie in het MBO mogelijk te maken.",
      link: "/about"
    },
    {
      title: "Projecten",
      description: "Bekijk de innovatieve projecten waar MBO-studenten en bedrijven samen aan werken.",
      link: "/projects"
    },
    {
      title: "Nieuws",
      description: "Blijf op de hoogte van de laatste ontwikkelingen, succesverhalen en aankomende events.",
      link: "/news"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
          <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            MBO-Hub Amsterdam is van start!
          </h2>
          <div className={`space-y-6 text-lg leading-relaxed text-gray-600 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <p className="text-xl">
              MBO-Hub Amsterdam is een samenwerking tussen ROC van Amsterdam, Mediacollege Amsterdam en HMC, 
              opgericht in het kader van Amsterdam 750. Wij zijn dé plek waar mbo-studenten, bedrijven, 
              de Gemeente Amsterdam en initiatieven samenkomen om te werken aan de toekomst van onze stad.
            </p>
            <p>
              De MBO-Hub biedt studenten een kans om hun talenten in de praktijk te brengen, door ze te betrekken 
              bij projecten, evenementen en initiatieven rondom het 750-jarig jubileum van Amsterdam.
            </p>
            <p>
              We verbinden bedrijven en organisaties met mbo-studenten, die meewerken aan diverse opdrachten 
              zoals evenementenorganisatie, videoproducties, groenprojecten en nog veel meer. Hierdoor doen 
              de studenten waardevolle praktijkervaring op, door middel van stages, projecten en leerwerkopdrachten, 
              en dragen ze bij aan de ontwikkeling van Amsterdam.
            </p>
            <p className="text-xl font-semibold text-primary">
              Mbo-studenten vormen het kloppende hart van de stad. Door hen te betrekken bij belangrijke projecten 
              zorgen we voor nieuwe ideeën, jonge energie en een sterkere verbinding tussen onderwijs en de maatschappij.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {sections.map((section, index) => (
            <Link to={section.link} key={section.title}>
              <Card 
                className={`p-8 hover:shadow-xl transition-all duration-300 h-full bg-white hover:bg-gray-50 group ${
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-secondary transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{section.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};