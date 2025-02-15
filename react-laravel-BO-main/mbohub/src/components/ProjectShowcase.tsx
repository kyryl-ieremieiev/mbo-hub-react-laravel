import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Project } from "@/types/database";
import { useToast } from "./ui/use-toast";

interface ProjectShowcaseProps {
  limit?: number;
}

export const ProjectShowcase = ({ limit }: ProjectShowcaseProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/projects');
        if (Array.isArray(response.data)) {
          setProjects(limit ? response.data.slice(0, limit) : response.data);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        toast({
          title: "Error",
          description: "Er is een fout opgetreden bij het laden van de projecten.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [toast, limit]);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Uitgelichte Projecten
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-80 animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {limit ? "Uitgelichte Projecten" : "Alle Projecten"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image_path}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2 bg-secondary text-white">
                  {project.tag}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section> );
};