import { ProjectDetails } from "@/components/ProjectDetails";

// Example project data - in a real application, this would come from an API or database
const exampleProject = {
  title: "Duurzame Mode Collectie 2024",
  headerImage: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1",
  description: `Een innovatief project waarbij MBO-studenten samenwerken met lokale modemerken om een duurzame collectie te ontwikkelen.

Dit project richt zich op het creëren van mode die niet alleen stijlvol is, maar ook rekening houdt met het milieu. Studenten hebben gewerkt met gerecyclede materialen en innovatieve productietechnieken.`,
  company: {
    name: "EcoFashion Amsterdam",
    logo: "https://mbo-hub.amsterdam/images/mbo-hub-poppetje-05.png",
    website: "https://example.com",
  },
  students: [
    {
      name: "Emma de Vries",
      role: "Mode Design",
    },
    {
      name: "Lucas Bakker",
      role: "Duurzaamheidsspecialist",
    },
    {
      name: "Sophie Chen",
      role: "Productie Coördinator",
    },
  ],
  gallery: [
    {
      type: "image" as const,
      url: "https://mbo-hub.amsterdam/images/mbo-hub-poppetje-08.png",
      caption: "Duurzame materialen selectie",
    },
    {
      type: "image" as const,
      url: "https://mbo-hub.amsterdam/images/mbo-hub-poppetje-06.png",
      caption: "Design proces",
    },
    {
      type: "video" as const,
      url: "https://example.com/video.mp4",
      caption: "Behind the scenes",
    },
    {
      type: "image" as const,
      url: "https://mbo-hub.amsterdam/images/mbo-hub-poppetje-01.png",
      caption: "Eindresultaat",
    },
  ],
};

const ProjectDetail = () => {
  return <ProjectDetails project={exampleProject} />;
};

export default ProjectDetail;