import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Heart, Share2, Truck, Shield, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: Number(id) || 1,
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    price: 899,
    rating: 4.9,
    reviews: 234,
    description: 'A premium single-origin coffee with bright, floral notes and a tea-like body. Grown at high altitudes in the Yirgacheffe region, this coffee is known for its clean, crisp taste with hints of citrus and bergamot.',
    flavor: 'Floral, Citrus, Tea-like',
    roast: 'Light',
    altitude: '1,800 - 2,200m',
    process: 'Washed',
    variety: 'Heirloom Ethiopian',
    images: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop',
    ],
    inStock: true,
    reviews_data: [
      {
        name: 'Amit Sharma',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Absolutely fantastic! The floral notes are incredible. Best Ethiopian coffee I\'ve had.',
        verified: true,
      },
      {
        name: 'Priya Patel',
        rating: 5,
        date: '1 month ago',
        comment: 'Perfect for pour-over brewing. Light, clean, and refreshing.',
        verified: true,
      },
      {
        name: 'Rohan Kumar',
        rating: 4,
        date: '1 month ago',
        comment: 'Great coffee, though I prefer darker roasts. Quality is top-notch.',
        verified: true,
      },
    ],
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Breadcrumb */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 rounded-2xl overflow-hidden shadow-medium">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-4">{product.origin}</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="text-4xl font-bold text-accent mb-6">₹{product.price}</div>

            <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

            {/* Product Specs */}
            <Card className="p-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Flavor Profile</p>
                  <p className="font-bold">{product.flavor}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Roast Level</p>
                  <p className="font-bold">{product.roast}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Altitude</p>
                  <p className="font-bold">{product.altitude}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Process</p>
                  <p className="font-bold">{product.process}</p>
                </div>
              </div>
            </Card>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="text-xs font-medium">Free Shipping</p>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="text-xs font-medium">Quality Guarantee</p>
              </Card>
              <Card className="p-4 text-center">
                <Coffee className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="text-xs font-medium">Freshly Roasted</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="brewing">Brewing Guide</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">About This Coffee</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Origin</h4>
                    <p className="text-muted-foreground">Sourced from the Yirgacheffe region in Southern Ethiopia, known for producing some of the world's finest coffee.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Processing</h4>
                    <p className="text-muted-foreground">{product.process} process ensures a clean, bright cup with exceptional clarity.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="brewing" className="mt-8">
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Brewing Recommendations</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Pour Over</h4>
                    <p className="text-muted-foreground">Ratio: 1:16 | Temperature: 93°C | Time: 2:30-3:00 min</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">French Press</h4>
                    <p className="text-muted-foreground">Ratio: 1:15 | Temperature: 94°C | Time: 4:00 min</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Espresso</h4>
                    <p className="text-muted-foreground">Dose: 18g | Yield: 36g | Time: 25-30 sec</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {product.reviews_data.map((review, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold">{review.name}</p>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-accent text-accent'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
