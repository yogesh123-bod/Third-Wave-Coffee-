import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PremiumGifts from '@/components/PremiumGifts';
import CoffeeJourney from '@/components/CoffeeJourney';
import Bestsellers from '@/components/Bestsellers';
import CoffeeQuiz from '@/components/CoffeeQuiz';
import CafeLocator from '@/components/CafeLocator';
import CoffeeReels from '@/components/CoffeeReels';
import FloatingCart from '@/components/FloatingCart';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PremiumGifts />
        <CoffeeJourney />
        <Bestsellers />
        <CoffeeQuiz />
        <CafeLocator />
        <CoffeeReels />
      </main>
      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Index;
