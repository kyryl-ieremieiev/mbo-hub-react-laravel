import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah de Vries",
      role: "Projectleider",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      initials: "SV"
    },
    {
      name: "Mark Jansen",
      role: "Coördinator Bedrijfsrelaties",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      initials: "MJ"
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-primary">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Over MBO-Hub Amsterdam
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Onze Missie</h2>
          <p className="text-lg text-gray-700">
            MBO-Hub Amsterdam verbindt studenten, bedrijven en onderwijsinstellingen om innovatieve projecten te realiseren. 
            Wij geloven in het potentieel van MBO-talent en creëren kansen voor praktijkervaring en professionele groei.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Ontmoet ons Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-gray-600 mt-2">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;