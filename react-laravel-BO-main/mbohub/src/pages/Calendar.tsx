import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Event = {
  id: number;
  title: string;
  date: Date;
  type: string;
  description: string;
  location?: string;
};

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [eventType, setEventType] = useState<string>("all");

  const events: Event[] = [
    {
      id: 1,
      title: "Workshop Design Thinking",
      date: new Date(2025, 0, 10), // 10 januari 2025
      type: "workshop",
      description: "Leer de basics van design thinking in deze interactieve workshop.",
      location: "MBO College Zuidoost"
    },
    {
      id: 2,
      title: "Project Presentaties",
      date: new Date(2025, 0, 20), // 20 januari 2025
      type: "presentatie",
      description: "Studenten presenteren hun laatste projecten.",
      location: "ROC van Amsterdam"
    },
    {
      id: 3,
      title: "Netwerkevent met Bedrijven",
      date: new Date(2025, 0, 25), // 25 januari 2025
      type: "netwerkevent",
      description: "Ontmoet potentiële werkgevers en partners.",
      location: "House of Skills"
    },
    {
      id: 4,
      title: "Excursie Medialab",
      date: new Date(2025, 1, 5), // 5 februari 2025
      type: "excursie",
      description: "Bezoek aan een innovatief medialab om de nieuwste technologieën te ontdekken.",
      location: "MediaLab Amsterdam"
    },
    {
      id: 5,
      title: "Gastcollege Digital Marketing",
      date: new Date(2025, 1, 12), // 12 februari 2025
      type: "gastcollege",
      description: "Een expert uit het werkveld deelt zijn ervaringen en inzichten.",
      location: "MBO College Centrum"
    },
    {
      id: 6,
      title: "Project Kick-off: Smart City",
      date: new Date(2025, 1, 15), // 15 februari 2025
      type: "project",
      description: "Start van een nieuw project waarin studenten werken aan smart city oplossingen.",
      location: "Amsterdam Science Park"
    },
    {
      id: 7,
      title: "Workshop UX/UI Design",
      date: new Date(2025, 1, 18), // 18 februari 2025
      type: "workshop",
      description: "Praktische workshop over het ontwerpen van gebruiksvriendelijke interfaces.",
      location: "MBO College West"
    },
    {
      id: 8,
      title: "Excursie Tech Startup Hub",
      date: new Date(2025, 1, 22), // 22 februari 2025
      type: "excursie",
      description: "Bezoek aan verschillende innovatieve startups in Amsterdam.",
      location: "B.Amsterdam"
    },
    {
      id: 9,
      title: "Gastcollege Cybersecurity",
      date: new Date(2025, 1, 25), // 25 februari 2025
      type: "gastcollege",
      description: "Een cybersecurity expert deelt de laatste ontwikkelingen en best practices.",
      location: "ROC van Amsterdam"
    },
    {
      id: 10,
      title: "Eindpresentaties Semester",
      date: new Date(2025, 2, 1), // 1 maart 2025
      type: "presentatie",
      description: "Studenten presenteren hun eindprojecten van het semester.",
      location: "MBO College Zuidoost"
    },
    {
      id: 11,
      title: "Netwerkevent ICT Sector",
      date: new Date(2025, 2, 5), // 5 maart 2025
      type: "netwerkevent",
      description: "Netwerkevenement met ICT-bedrijven uit de regio Amsterdam.",
      location: "RAI Amsterdam"
    },
    {
      id: 12,
      title: "Project Demo Day",
      date: new Date(2025, 2, 10), // 10 maart 2025
      type: "project",
      description: "Demonstratie van studentenprojecten aan het bedrijfsleven.",
      location: "Amsterdam Science Park"
    }
  ];
  

  // Dynamisch unieke evenementtypen ophalen uit de data
  const eventTypes = Array.from(new Set(events.map((event) => event.type)));

  // Filter events based on selected date and type
  const filteredEvents = events.filter((event) => {
    const dateMatch = !date || event.date.toDateString() === date.toDateString();
    const typeMatch = eventType === "all" || event.type === eventType;
    return dateMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">Evenementenkalender</h1>
          <p className="text-lg text-gray-600">
            Bekijk en filter aankomende evenementen en activiteiten
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar and Filters */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card className="animate-fade-in" >
              <CardHeader>
                <CardTitle>Filter op Type</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecteer type evenement" />
                  </SelectTrigger>
                  <SelectContent style={{backgroundColor: "white"}}>
                    <SelectItem value="all">Alle evenementen</SelectItem>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <Card key={event.id} className="animate-fade-in-up">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{event.title}</CardTitle>
                          <p className="text-sm text-gray-500 mt-1">
                            {event.date.toLocaleDateString("nl-NL", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          {event.location && (
                            <p className="text-sm text-gray-500 mt-1">
                              Locatie: {event.location}
                            </p>
                          )}
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {event.type}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{event.description}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="animate-fade-in">
                  <CardContent className="text-center py-8">
                    <p className="text-gray-500">
                      Geen evenementen gevonden voor de geselecteerde filters.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
