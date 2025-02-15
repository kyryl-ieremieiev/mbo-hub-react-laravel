import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import type { Event, Project, NewsItem } from "@/types/database";

const API_BASE_URL = "https://mbo-hub.mostafanasar.com/api";

const Admin = () => {
  const [event, setEvent] = useState<Partial<Event>>({
    title: "",
    type: "",
    description: "",
    location: "",
    date: new Date().toISOString().split('T')[0],
  });

  const [project, setProject] = useState<Partial<Project>>({
    title: "",
    category: "",
    image: "",
    description: "",
  });

  const [newsItem, setNewsItem] = useState<Partial<NewsItem>>({
    title: "",
    date: new Date().toISOString().split('T')[0],
    image_url: "",
    description: "",
  });

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/events.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      
      if (response.ok) {
        toast.success("Evenement succesvol toegevoegd!");
        setEvent({
          title: "",
          type: "",
          description: "",
          location: "",
          date: new Date().toISOString().split('T')[0],
        });
      } else {
        toast.error("Er is iets misgegaan bij het toevoegen van het evenement.");
      }
    } catch (error) {
      toast.error("Er is een fout opgetreden bij het verbinden met de database.");
      console.error("Error submitting event:", error);
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });
      
      if (response.ok) {
        toast.success("Project succesvol toegevoegd!");
        setProject({
          title: "",
          category: "",
          image: "",
          description: "",
        });
      } else {
        toast.error("Er is iets misgegaan bij het toevoegen van het project.");
      }
    } catch (error) {
      toast.error("Er is een fout opgetreden bij het verbinden met de database.");
      console.error("Error submitting project:", error);
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/news.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsItem),
      });
      
      if (response.ok) {
        toast.success("Nieuwsitem succesvol toegevoegd!");
        setNewsItem({
          title: "",
          date: new Date().toISOString().split('T')[0],
          image_url: "",
          description: "",
        });
      } else {
        toast.error("Er is iets misgegaan bij het toevoegen van het nieuwsitem.");
      }
    } catch (error) {
      toast.error("Er is een fout opgetreden bij het verbinden met de database.");
      console.error("Error submitting news item:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="events" className="space-y-4">
        <TabsList>
          <TabsTrigger value="events">Evenementen</TabsTrigger>
          <TabsTrigger value="projects">Projecten</TabsTrigger>
          <TabsTrigger value="news">Nieuws</TabsTrigger>
        </TabsList>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Voeg Evenement Toe</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="event-title">Titel</Label>
                  <Input
                    id="event-title"
                    value={event.title}
                    onChange={(e) => setEvent({ ...event, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="event-type">Type</Label>
                  <Select
                    onValueChange={(value) => setEvent({ ...event, type: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer type" />
                    </SelectTrigger>
                    <SelectContent style={{backgroundColor: "white"}}>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="seminar">Seminar</SelectItem>
                      <SelectItem value="excursie">Excursie</SelectItem>
                      <SelectItem value="gastcollege">Gastcollege</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-date">Datum</Label>
                  <Input
                    id="event-date"
                    type="date"
                    value={event.date}
                    onChange={(e) => setEvent({ ...event, date: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-location">Locatie</Label>
                  <Input
                    id="event-location"
                    value={event.location}
                    onChange={(e) => setEvent({ ...event, location: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-description">Beschrijving</Label>
                  <Textarea
                    id="event-description"
                    value={event.description}
                    onChange={(e) => setEvent({ ...event, description: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit">Evenement Toevoegen</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Voeg Project Toe</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Titel</Label>
                  <Input
                    id="project-title"
                    value={project.title}
                    onChange={(e) => setProject({ ...project, title: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-category">Categorie</Label>
                  <Select
                    onValueChange={(value) => setProject({ ...project, category: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer categorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Logistiek">Logistiek</SelectItem>
                      <SelectItem value="ICT">ICT</SelectItem>
                      <SelectItem value="Techniek">Techniek</SelectItem>
                      <SelectItem value="Media">Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-image">Afbeelding URL</Label>
                  <Input
                    id="project-image"
                    value={project.image}
                    onChange={(e) => setProject({ ...project, image: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Beschrijving</Label>
                  <Textarea
                    id="project-description"
                    value={project.description}
                    onChange={(e) => setProject({ ...project, description: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit">Project Toevoegen</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news">
          <Card>
            <CardHeader>
              <CardTitle>Voeg Nieuwsitem Toe</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="news-title">Titel</Label>
                  <Input
                    id="news-title"
                    value={newsItem.title}
                    onChange={(e) => setNewsItem({ ...newsItem, title: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="news-date">Datum</Label>
                  <Input
                    id="news-date"
                    type="date"
                    value={newsItem.date}
                    onChange={(e) => setNewsItem({ ...newsItem, date: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="news-image">Afbeelding URL</Label>
                  <Input
                    id="news-image"
                    value={newsItem.image_url}
                    onChange={(e) => setNewsItem({ ...newsItem, image_url: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="news-description">Beschrijving</Label>
                  <Textarea
                    id="news-description"
                    value={newsItem.description}
                    onChange={(e) => setNewsItem({ ...newsItem, description: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit">Nieuwsitem Toevoegen</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
