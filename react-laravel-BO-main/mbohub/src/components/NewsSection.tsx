import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { NewsItem } from "@/types/database";
import { useToast } from "./ui/use-toast";

interface NewsSectionProps {
  limit?: number;
}

export const NewsSection = ({ limit }: NewsSectionProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://mbo-hub.mostafanasar.com/api/news.php"
        );
        console.log("Raw API Response:", response);
        console.log("Response data:", response.data);

        if (Array.isArray(response.data)) {
          const updatedNews = response.data.map((item, index) => {
            const images = [
              "https://mbo-hub.amsterdam/images/mbo-hub-home.png",
              "https://mbo-hub.amsterdam/images/mbo-hub-home.png",
              "https://mbo-hub.amsterdam/images/mbo-hub-home.png",
            ];
            return {
              ...item,
              image_url: images[index % images.length], // Assign images cyclically
            };
          });
          setNews(limit ? updatedNews.slice(0, limit) : updatedNews);
        } else {
          console.error("Invalid data format:", response.data);
          throw new Error("Invalid data format received from API");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        toast({
          title: "Error",
          description: "Er is een fout opgetreden bij het laden van het nieuws.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [toast, limit]);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Laatste Nieuws
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
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
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {limit ? "Laatste Nieuws" : "Alle Nieuws"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image_url} // Use dynamically assigned images
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-secondary text-white">
                    {new Date(item.date).toLocaleDateString("nl-NL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
