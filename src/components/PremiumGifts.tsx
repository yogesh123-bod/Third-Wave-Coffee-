import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, Star, TrendingUp, Heart, Sparkles, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import premiumGiftBoxes from '@/assets/premium-gift-boxes.png';

const PremiumGifts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const giftBoxes = [
    {
      id: 11,
      name: 'Luxury Signature Collection',
      price: 1290,
      image: premiumGiftBoxes,
      tag: 'Bestseller',
      icon: TrendingUp,
      description: 'Premium coffee with artisan chocolates',
      rating: 4.9,
    },
    {
      id: 12,
      name: 'Coffee Connoisseur Set',
      price: 1790,
      image: premiumGiftBoxes,
      tag: 'For Coffee Lovers',
      icon: Heart,
      description: 'Six single-origin blends with tasting notes',
      rating: 5.0,
    },
    {
      id: 13,
      name: 'Artisan Brew Kit',
      price: 1990,
      image: premiumGiftBoxes,
      tag: 'Festive Special',
      icon: Sparkles,
      description: 'Complete brewing set with premium accessories',
      rating: 4.8,
    },
  ];

  return (
    <section id="gifts" className="py-24 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
            <Gift className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Premium Gift Boxes</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary">
            Gifts That Create <span className="text-gradient-gold">Moments</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Thoughtfully curated collections for the coffee enthusiast in your life
          </p>
        </div>

        {/* Gift Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftBoxes.map((box, index) => {
            const TagIcon = box.icon;
            return (
              <Card
                key={box.id}
                className="group relative overflow-hidden border-0 shadow-soft hover:shadow-gold transition-smooth cursor-pointer bg-card"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index ? 'translateY(-8px) rotateX(5deg)' : 'translateY(0) rotateX(0)',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-accent/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <TagIcon className="w-4 h-4 text-accent-foreground animate-pulse" />
                  <span className="text-xs font-bold text-accent-foreground">{box.tag}</span>
                </div>

                {/* Sparkle Animation */}
                {hoveredCard === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gold rounded-full animate-sparkle"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Image Container */}
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  <img
                    src={box.image}
                    alt={box.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Spotlight Effect */}
                  {hoveredCard === index && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-primary group-hover:text-accent transition-smooth">
                      {box.name}
                    </h3>
                    <p className="text-muted-foreground">{box.description}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(box.rating)
                              ? 'fill-accent text-accent'
                              : 'text-border'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{box.rating}</span>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-heading text-3xl font-bold text-accent">₹{box.price}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/product/${box.id}`)}
                        className={`transition-smooth ${
                          hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                        }`}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => addToCart({ id: box.id, name: box.name, price: box.price, image: box.image })}
                        className={`transition-smooth ${
                          hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            View All Gift Boxes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumGifts;
