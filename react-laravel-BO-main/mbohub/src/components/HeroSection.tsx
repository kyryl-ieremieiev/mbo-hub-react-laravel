import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white pt-16">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 w-full h-full">
      </div>
      
       {/* Background Image */}
       <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://static01.nyt.com/images/2023/09/24/multimedia/24-36Hrs-Amsterdam-01-01-cwqt/24-36Hrs-Amsterdam-01-01-cwqt-superJumbo.jpg')",
        }}
      ></div>
      <div className="container relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Samen bouwen we aan de toekomst van Amsterdam!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Verbinden van talent, innovatie en ondernemerschap in het hart van Amsterdam
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary-dark text-white transform transition-all duration-300"
            asChild
          >
            <a href="/projects">
              Bekijk onze projecten
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white transform transition-all duration-300"
            asChild
          >
            <a href="/contact">
              Contact opnemen
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
