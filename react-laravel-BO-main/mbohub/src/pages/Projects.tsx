import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src=""
            alt="Projects Header"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Onze Projecten
            </h1>
            <p className="text-lg md:text-xl text-white/90 animate-fade-in-up">
              Ontdek de innovatieve projecten waar MBO-studenten en bedrijven
              samen aan werken
            </p>
          </div>
        </div>
      </section>
      {/* Project Showcase Section */}
      <ProjectShowcase />
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Wil je samenwerken?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Wij zijn altijd op zoek naar verbinding en kijken graag hoe we samen kunnen werken. 
            Wil je namens een bedrijf of organisatie kijken hoe je kunt samenwerken met mbo-studenten? 
            Of ben je een student en wil je meewerken aan een project voor toonaangevende bedrijven in Amsterdam?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              asChild
              className="hover:bg-secondary-dark text-white font-semibold"
            >
              <Link to="/contact?type=business">Project Aanmelden als Bedrijf</Link>
            </Button>
            <Button 
              variant="outline"
              asChild
              className="hover:bg-accent hover:text-white font-semibold"
            >
              <Link to="/contact?type=student">Aanmelden als Student</Link>
            </Button>
          </div>
        </div>
      </section>
      <form
            className={ "flex flex-col max-w-3xl mx-auto p-4 gap-2" }
            onSubmit={ async ( e ) => {
              e.preventDefault();
              const formData = new FormData( e.target as HTMLFormElement );

              const file = formData.get( "image" ) as File;
              const title = formData.get( "title" ) as string;
              const description = formData.get( "description" ) as string;
              const tag = formData.get( "tag" ) as string;

              const fileToBase64 = ( file: File ): Promise<string> => {
                return new Promise( ( resolve, reject ) => {
                  const reader = new FileReader();
                  reader.onload = () => resolve( reader.result as string );
                  reader.onerror = ( error ) => reject( error );
                  reader.readAsDataURL( file );
                } );
              };

              try {
                const base64Image = await fileToBase64( file );

                const response = await fetch( "http://localhost:8000/api/projects/create", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                  },
                  body: JSON.stringify( {
                    title,
                    description,
                    tag,
                    image: base64Image,
                  } ),
                } );

                if ( !response.ok ) {
                  console.error( "Failed to create project" );
                  return;
                }
                console.log( "Project created successfully" );
              } catch ( error ) {
                console.error( "Error uploading file:", error );
              }
            } }
        >
          <input className={ "border border-black" } type="text" name={ "title" } placeholder={ "title" } />
          <input className={ "border border-black" } type="text" name={ "description" } placeholder={ "description" } />
          <input className={ "border border-black" } type="file" name={ "image" } placeholder={ "image" } />
          <input className={ "border border-black" } type="text" name={ "tag" } placeholder={ "tag" } />
          <button className={ "border border-black" } type="submit">Submit</button>
        </form>
    </div>
  );
};
export default Projects;