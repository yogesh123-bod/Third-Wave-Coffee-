import { MapPin, Star, Phone, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MapLocator = () => {
  const cafes = [
    {
      id: 1,
      name: 'Third Wave Mulund West',
      address: 'Shop 12, MG Road, Mulund West, Mumbai - 400080',
      phone: '+91 98765 43210',
      rating: 4.8,
      reviews: 523,
      hours: '7 AM - 11 PM',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Third Wave Bandra',
      address: 'Linking Road, Bandra West, Mumbai - 400050',
      phone: '+91 98765 43211',
      rating: 4.9,
      reviews: 892,
      hours: '8 AM - 12 AM',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Third Wave Powai',
      address: 'Hiranandani Gardens, Powai, Mumbai - 400076',
      phone: '+91 98765 43212',
      rating: 4.7,
      reviews: 456,
      hours: '7 AM - 11 PM',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Third Wave Andheri',
      address: 'SV Road, Andheri West, Mumbai - 400058',
      phone: '+91 98765 43213',
      rating: 4.8,
      reviews: 678,
      hours: '8 AM - 11 PM',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="cafes" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Visit Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Find Your Nearest <span className="text-gradient-gold">Café</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit us at any of our premium locations for an unforgettable coffee experience
          </p>
        </div>

        {/* Map Image with Pins */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-gold">
          <div className="relative h-[500px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571420583!2d72.74109995!3d19.08219785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647502851234!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Cafe Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cafes.map((cafe, index) => (
            <Card
              key={cafe.id}
              className="overflow-hidden hover:shadow-gold transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent-foreground text-accent-foreground" />
                  <span className="text-sm font-bold text-accent-foreground">{cafe.rating}</span>
                  <span className="text-xs text-accent-foreground">({cafe.reviews})</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">{cafe.name}</h3>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                    <p>{cafe.address}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4 text-accent" />
                    <a href={`tel:${cafe.phone}`} className="hover:text-accent transition-colors">
                      {cafe.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{cafe.hours}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(cafe.address)}`, '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="premium">
            <MapPin className="w-5 h-5 mr-2" />
            Find More Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapLocator;
