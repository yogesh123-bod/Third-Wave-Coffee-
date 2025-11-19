import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PremiumGifts from '@/components/PremiumGifts';
import CoffeeJourney from '@/components/CoffeeJourney';
import Bestsellers from '@/components/Bestsellers';
import CoffeeQuiz from '@/components/CoffeeQuiz';
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
