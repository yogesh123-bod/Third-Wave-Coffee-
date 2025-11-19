import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { name: 'SHOP', href: '#shop' },
    { name: 'LEARN & DO', href: '#learn' },
    { name: 'CAFES', href: '#cafes' },
    { name: 'GIFTING', href: '#gifting' },
  ];

  const rightNavLinks = [
    { name: 'CONTACT', href: '#contact' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth animate-fade-in ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-background'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-foreground tracking-wide transition-all duration-300 hover:text-accent group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <a href="#" className="flex flex-col items-center gap-1 group flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-coffee rounded-full flex items-center justify-center transition-smooth group-hover:shadow-gold">
              <span className="text-cream text-xl font-bold">☕</span>
            </div>
            <span className="font-heading text-base sm:text-lg font-bold text-foreground tracking-wide whitespace-nowrap">
              BREW MOMENTS
            </span>
          </a>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {rightNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-foreground tracking-wide transition-all duration-300 hover:text-accent group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
              <a
                href="#cart"
                className="relative text-sm font-medium text-muted-foreground hover:text-accent transition-smooth"
              >
                CART [{cartCount}]
              </a>
              
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 hover:bg-accent/10 transition-smooth"
              >
                <Search className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 hover:bg-accent/10 transition-smooth"
              >
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-up border-t border-border/50">
            <div className="flex flex-col gap-1 pt-4">
              {[...leftNavLinks, ...rightNavLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-accent hover:bg-accent/5 transition-smooth font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50 px-4">
                <a
                  href="#cart"
                  className="text-foreground hover:text-accent transition-smooth font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CART [{cartCount}]
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent/10"
                >
                  <Search className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent/10"
                >
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
