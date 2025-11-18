import { useEffect, useRef, useState } from 'react';
import { Leaf, Flame, Loader, Coffee, Wine } from 'lucide-react';

const CoffeeJourney = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const journeySteps = [
    {
      icon: Leaf,
      title: 'Bean Selection',
      description: 'Handpicked from the finest coffee estates across the globe',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: Flame,
      title: 'Artisan Roasting',
      description: 'Carefully roasted to unlock unique flavor profiles',
      color: 'from-orange-600 to-orange-400',
    },
    {
      icon: Loader,
      title: 'Precision Grinding',
      description: 'Ground to perfection for optimal extraction',
      color: 'from-coffee-medium to-coffee-light',
    },
    {
      icon: Coffee,
      title: 'Expert Brewing',
      description: 'Crafted with precision pour-over techniques',
      color: 'from-coffee-dark to-coffee-medium',
    },
    {
      icon: Wine,
      title: 'Perfect Serving',
      description: 'Presented with care, ready to create moments',
      color: 'from-gold to-gold-light',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = sectionRef.current?.querySelectorAll('.journey-step');
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-24 px-4 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary">
            The <span className="text-gradient-gold">Coffee Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From bean to cup, every step is a story of craftsmanship
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-coffee opacity-20 hidden lg:block" />

          <div className="space-y-24">
            {journeySteps.map((step, index) => {
              const StepIcon = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`journey-step flex items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center transition-smooth ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-heading text-3xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-gold transition-smooth ${
                        isVisible
                          ? 'scale-100 rotate-0'
                          : 'scale-0 rotate-180'
                      }`}
                      style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
                    >
                      <StepIcon className="w-12 h-12 text-white" />
                    </div>

                    {/* Animated Ring */}
                    {isVisible && (
                      <>
                        <div className="absolute inset-0 rounded-full border-4 border-accent animate-pulse-glow" />
                        <div className="absolute -inset-4 rounded-full border-2 border-accent/30 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                      </>
                    )}
                  </div>

                  {/* Empty Space for Layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-2xl font-heading text-primary mb-4">
            Experience the journey in every cup
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoffeeJourney;
