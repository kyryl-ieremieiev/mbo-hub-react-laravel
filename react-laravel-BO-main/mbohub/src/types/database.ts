export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  created_at: string;
}

export interface Event {
  id: number;
  title: string;
  type: string;
  description: string;
  date: string;
  location: string;
  created_at: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image_url: string;
  description: string;
}