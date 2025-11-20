import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Us Section */}
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                CONTACT US
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                We love hearing from you. Have a comment, a query or a quick question? Please fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 bg-cream/20 dark:bg-muted/30 p-8 rounded-2xl">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    NAME
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="bg-background border-border resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  SEND MESSAGE
                </Button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground">Mulund, Mumbai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">support@thirdwavecoffee.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner With Us Section */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                PARTNER WITH US
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We deeply value our wholesale partners and are always on the lookout for cafes, restaurants and other vendors that might be interested in serving our fresh and high-quality coffee. Please get in touch with us by filling out the forms below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 bg-purple-100/50 dark:bg-purple-900/20 p-8 rounded-2xl">
                <div>
                  <label htmlFor="partner-name" className="block text-sm font-medium text-foreground mb-2">
                    NAME
                  </label>
                  <Input
                    id="partner-name"
                    type="text"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="partner-email" className="block text-sm font-medium text-foreground mb-2">
                    EMAIL
                  </label>
                  <Input
                    id="partner-email"
                    type="email"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                    BUSINESS NAME
                  </label>
                  <Input
                    id="business"
                    type="text"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="partner-message" className="block text-sm font-medium text-foreground mb-2">
                    MESSAGE
                  </label>
                  <Textarea
                    id="partner-message"
                    rows={5}
                    className="bg-background border-border resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  SUBMIT PARTNERSHIP INQUIRY
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
