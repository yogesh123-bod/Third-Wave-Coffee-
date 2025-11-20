import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop',
    title: 'Cozy Coffee Shop Interior'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&h=800&fit=crop',
    title: 'Coffee Beans Macro'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop',
    title: 'Minimal Workspace With Coffee'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
    title: 'Nature Morning Coffee'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=800&fit=crop',
    title: 'Latte Art Perfection'
  },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream/30 via-background to-gold-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coffee Moments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the beauty and art of coffee through our curated gallery
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-elegant">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-cream">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-2 border-border hover:border-primary flex items-center justify-center shadow-soft transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-2 border-border hover:border-primary flex items-center justify-center shadow-soft transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-4 ring-primary scale-105 shadow-gold'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
