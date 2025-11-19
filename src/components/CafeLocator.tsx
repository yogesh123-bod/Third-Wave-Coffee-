import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cafes = [
  {
    id: 1,
    name: 'Third Wave - MG Road',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
    position: { top: '40%', left: '35%' }
  },
  {
    id: 2,
    name: 'Third Wave - Indiranagar',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    position: { top: '25%', left: '55%' }
  },
  {
    id: 3,
    name: 'Third Wave - Koramangala',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1559496417-e7f25c2d9334?w=400&h=300&fit=crop',
    position: { top: '60%', left: '45%' }
  },
  {
    id: 4,
    name: 'Third Wave - Whitefield',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop',
    position: { top: '35%', left: '70%' }
  }
];

const CafeLocator = () => {
  const [hoveredCafe, setHoveredCafe] = useState<number | null>(null);

  return (
    <section id="cafes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Nearest Café
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us at any of our premium locations for an unforgettable coffee experience
          </p>
        </div>

        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-muted via-background to-muted">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-light/20 to-coffee-medium/20 dark:from-coffee-dark/40 dark:to-coffee-medium/30">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Animated Pins */}
          {cafes.map((cafe) => (
            <div
              key={cafe.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={cafe.position}
              onMouseEnter={() => setHoveredCafe(cafe.id)}
              onMouseLeave={() => setHoveredCafe(null)}
            >
              {/* Pin */}
              <div className="relative">
                <MapPin 
                  className={`w-10 h-10 transition-all duration-300 ${
                    hoveredCafe === cafe.id 
                      ? 'text-accent scale-125 drop-shadow-glow' 
                      : 'text-coffee-dark dark:text-accent/80'
                  }`}
                  fill="currentColor"
                />
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-coffee-dark/30 dark:bg-accent/30 rounded-full blur-sm transition-all duration-300 ${
                  hoveredCafe === cafe.id ? 'scale-150' : 'scale-100'
                }`} />
              </div>

              {/* Cafe Card */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ${
                hoveredCafe === cafe.id 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}>
                <div className="bg-background dark:bg-card border border-border rounded-xl shadow-elegant p-4 w-64">
                  <img 
                    src={cafe.image} 
                    alt={cafe.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-heading font-bold text-foreground mb-2">{cafe.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-sm ${i < Math.floor(cafe.rating) ? 'text-accent' : 'text-muted-foreground'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{cafe.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="premium" size="lg" className="gap-2">
            <Navigation className="w-5 h-5" />
            Find Nearest Café
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CafeLocator;
