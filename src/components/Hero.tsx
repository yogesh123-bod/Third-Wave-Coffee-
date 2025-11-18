import { Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroProductImage from '@/assets/hero-product-display.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Animated Bokeh Lights Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-gold/20 to-gold-light/10 blur-2xl animate-float"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Coffee Steam Animation Behind Logo Area */}
      <div className="absolute top-32 left-1/4 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 bg-white/5 rounded-full blur-xl animate-steam"
            style={{
              left: `${i * 15}px`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Block */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Logo */}
            <div className="inline-flex items-center justify-center gap-3 group cursor-pointer transition-all duration-500 hover:scale-105">
              <div className="relative">
                <Coffee className="w-12 h-12 text-gold transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(200,160,70,0.6)]" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full animate-pulse-glow" />
              </div>
            </div>

            {/* Decorative Top Line */}
            <div className="relative h-px w-48 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </div>

            {/* Brand Name */}
            <div className="space-y-2">
              <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-primary">
                BREW HAVEN COFFEE
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Sparkles className="w-4 h-4 text-gold animate-sparkle" />
                <p className="font-heading text-xl md:text-2xl text-gold tracking-wide">
                  × SOMAAR
                </p>
                <Sparkles className="w-4 h-4 text-gold animate-sparkle" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Main Heading */}
            <div className="relative space-y-4">
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gradient-gold animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Best Gifts
                </span>
                <span className="block text-primary mt-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  For Your Loved Ones
                </span>
              </h2>
              
              {/* Decorative Sparks */}
              <div className="absolute -right-4 top-0">
                <Sparkles className="w-6 h-6 text-gold animate-sparkle" />
              </div>
              <div className="absolute -left-2 bottom-4">
                <Sparkles className="w-5 h-5 text-gold-light animate-sparkle" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Decorative Bottom Line */}
            <div className="relative h-px w-48 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%', animationDelay: '1s' }} />
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Curated premium coffee collections, crafted with love for moments that matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button
                size="lg"
                variant="gold"
                className="group relative overflow-hidden transition-all duration-300 hover:scale-103 hover:shadow-gold"
              >
                Shop Gifts
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-gold text-foreground hover:bg-gold/10 hover:border-gold hover:text-gold transition-all duration-300 hover:scale-103"
              >
                Explore Coffee
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Side - Product Display */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-3xl overflow-hidden group perspective-1000">
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gold rounded-full animate-float opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Product Image with 3D Hover Tilt */}
              <div className="relative overflow-hidden rounded-3xl shadow-gold transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(200,160,70,0.4)]">
                <img
                  src={heroProductImage}
                  alt="Premium coffee gift collection"
                  className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Soft Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 via-transparent to-gold/10 group-hover:from-coffee-dark/30 transition-all duration-500" />
              </div>

              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-gold-light/20 to-gold/30 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-gold rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
