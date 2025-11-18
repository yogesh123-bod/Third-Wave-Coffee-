import { useState } from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Bestsellers = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe',
      origin: 'Ethiopia',
      price: '$24',
      rating: 4.9,
      reviews: 234,
      flavor: 'Floral, Citrus, Tea-like',
      roast: 'Light',
    },
    {
      id: 2,
      name: 'Colombian Supremo',
      origin: 'Colombia',
      price: '$22',
      rating: 4.8,
      reviews: 189,
      flavor: 'Caramel, Nutty, Balanced',
      roast: 'Medium',
    },
    {
      id: 3,
      name: 'Sumatra Mandheling',
      origin: 'Indonesia',
      price: '$26',
      rating: 4.7,
      reviews: 156,
      flavor: 'Earthy, Chocolate, Herbal',
      roast: 'Dark',
    },
    {
      id: 4,
      name: 'Costa Rican Tarrazu',
      origin: 'Costa Rica',
      price: '$23',
      rating: 4.9,
      reviews: 201,
      flavor: 'Clean, Bright, Crisp',
      roast: 'Medium',
    },
  ];

  return (
    <section id="shop" className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary">
            Bestselling <span className="text-gradient-gold">Blends</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our most-loved coffees, sourced from the world's finest estates
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-0 shadow-soft hover:shadow-gold transition-smooth bg-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'translateY(-12px)' : 'translateY(0)',
              }}
            >
              {/* Product Image Area */}
              <div className="relative h-64 bg-gradient-coffee rounded-t-2xl flex items-center justify-center overflow-hidden">
                {/* Coffee Bag Illustration */}
                <div className="text-8xl animate-float">☕</div>
                
                {/* Origin Badge */}
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-accent-foreground">{product.origin}</span>
                </div>

                {/* Hover Actions */}
                <div
                  className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-3 transition-smooth ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full shadow-medium hover:scale-110 transition-smooth"
                      >
                        <Eye className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-2xl">{product.name}</DialogTitle>
                        <DialogDescription>
                          <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-semibold text-foreground">Origin</p>
                                <p className="text-muted-foreground">{product.origin}</p>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-foreground">Roast Level</p>
                                <p className="text-muted-foreground">{product.roast}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground mb-1">Flavor Profile</p>
                              <p className="text-muted-foreground">{product.flavor}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(product.rating)
                                        ? 'fill-accent text-accent'
                                        : 'text-border'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                ({product.reviews} reviews)
                              </span>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                              <span className="font-heading text-3xl font-bold text-accent">
                                {product.price}
                              </span>
                              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <Button
                    size="icon"
                    className="rounded-full shadow-medium hover:scale-110 transition-smooth bg-accent text-accent-foreground"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-smooth">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.flavor}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-accent text-accent'
                            : 'text-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-heading text-2xl font-bold text-accent">{product.price}</span>
                  <span className="text-sm text-muted-foreground capitalize">{product.roast} Roast</span>
                </div>
              </div>

              {/* Add to Cart Slide Up */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 transition-smooth ${
                  hoveredCard === index ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Quick Add
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
