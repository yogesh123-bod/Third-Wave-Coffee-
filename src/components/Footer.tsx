import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import thirdWaveLogo from '@/assets/third-wave-logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-dark dark:from-background dark:via-muted dark:to-background text-foreground overflow-hidden border-t border-border">
      {/* Animated Steam Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-gold rounded-full blur-2xl animate-steam"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={thirdWaveLogo} 
                alt="Third Wave Coffee" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-heading text-xl font-bold text-gold uppercase tracking-wide">
                Third Wave Coffee
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting exceptional coffee experiences since 2020. Premium beans, artisan roasting, unforgettable moments.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-gold flex items-center justify-center transition-smooth group"
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-coffee-dark transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {['Shop Coffee', 'Gift Boxes', 'About Us', 'Our Story', 'Cafes', 'Wholesale'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-gold transition-smooth inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-smooth mr-0 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-gold">Customer Care</h3>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Info', 'Returns', 'FAQ', 'Brewing Guides', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-gold transition-smooth inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-smooth mr-0 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-gold">Stay Brewing</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe for exclusive offers and coffee inspiration
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-gold"
              />
              <Button className="w-full bg-gold text-coffee-dark hover:bg-gold-light transition-smooth">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">123 Coffee Street, Bean City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Third Wave Coffee. All rights reserved. Crafted with ❤️ and coffee.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-smooth">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Coffee Cup Animation */}
      <div className="absolute bottom-4 right-4 text-6xl opacity-10 animate-float">
        ☕
      </div>
    </footer>
  );
};

export default Footer;
