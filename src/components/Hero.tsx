import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-coffee-gifts.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Brew Moments. Gift Happiness.',
      subtitle: 'Premium Coffee Curated For the Ones You Love.',
      image: heroImage,
    },
    {
      title: 'Artisan Roasted Perfection',
      subtitle: 'Single-origin beans from the finest estates.',
      image: heroImage,
    },
    {
      title: 'Luxury Gift Collections',
      subtitle: 'Thoughtfully curated for every occasion.',
      image: heroImage,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-coffee-dark rounded-full animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Steam Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-white/5 rounded-full blur-xl animate-steam"
            style={{
              left: `${20 + Math.random() * 60}%`,
              bottom: '10%',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Premium Collection 2025</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-gradient-gold animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {slides[currentSlide].title.split('.')[0]}.
              </span>
              <span className="block text-primary mt-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {slides[currentSlide].title.split('.')[1]}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-gradient-coffee text-cream hover:shadow-gold transition-smooth text-lg px-8 py-6"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth text-lg px-8 py-6"
              >
                Explore Gifts
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-smooth ${
                    index === currentSlide ? 'w-12 bg-accent' : 'w-6 bg-border'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-medium group">
              <img
                src={slides[currentSlide].image}
                alt="Premium coffee gifts"
                className="w-full h-[500px] object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-smooth shadow-medium"
              >
                <ChevronLeft className="w-6 h-6 text-coffee-dark" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-smooth shadow-medium"
              >
                <ChevronRight className="w-6 h-6 text-coffee-dark" />
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-accent rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
