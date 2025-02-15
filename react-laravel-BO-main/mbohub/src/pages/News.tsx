import { NewsSection } from "@/components/NewsSection";

const News = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-secondary">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Nieuws & Updates
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <NewsSection />
      </div>
    </div>
  );
};

export default News;