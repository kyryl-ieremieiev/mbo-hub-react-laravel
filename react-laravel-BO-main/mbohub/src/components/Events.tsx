import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Event } from '@/types/database';

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events.php');
        setEvents(response.data);
      } catch (err) {
        setError('Er is een fout opgetreden bij het ophalen van de evenementen.');
        console.error('Error fetching events:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="w-full">
            <CardContent className="h-32" />
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="w-full bg-red-50">
        <CardContent className="p-4 text-red-600">
          {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {events.length > 0 ? (
        events.map((event) => (
          <Card key={event.id} className="w-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(event.date).toLocaleDateString('nl-NL', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {event.type}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{event.description}</p>
              {event.location && (
                <p className="text-sm text-gray-500 mt-2">
                  Locatie: {event.location}
                </p>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="p-4 text-center text-gray-500">
            Geen evenementen gevonden.
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Events;