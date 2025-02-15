import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Share2, Users, Link as LinkIcon } from "lucide-react";

interface ProjectDetailsProps {
  project: {
    title: string;
    headerImage: string;
    description: string;
    company: {
      name: string;
      logo: string;
      website: string;
    };
    students: Array<{
      name: string;
      role: string;
    }>;
    gallery: Array<{
      type: "image" | "video";
      url: string;
      caption: string;
    }>;
  };
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={project.headerImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Project Description */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Over dit project</h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* Gallery */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Galerij</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      {item.type === "image" ? (
                        <img
                          src={item.url}
                          alt={item.caption}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={item.url}
                          controls
                          className="w-full h-full object-cover"
                        />
                      )}
                    </AspectRatio>
                    <CardContent className="p-2">
                      <p className="text-sm text-gray-600">{item.caption}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Building className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Betrokken bedrijf</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={project.company.logo}
                    alt={project.company.name}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <h4 className="font-semibold mb-2">{project.company.name}</h4>
                  <Button variant="outline" asChild>
                    <a
                      href={project.company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <LinkIcon className="h-4 w-4" />
                      Bezoek website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Students */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Betrokken studenten</h3>
                </div>
                <ul className="space-y-3">
                  {project.students.map((student, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-medium">{student.name}</span>
                      <span className="text-sm text-gray-600">
                        {student.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Share Buttons */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Share2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Deel dit project</h3>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};