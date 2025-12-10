import { Users, Heart, Award, Target, Coffee, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const timeline = [
    { year: '2015', event: 'Founded in Mulund, Mumbai with a single roastery' },
    { year: '2017', event: 'Expanded to 5 cafés across Mumbai' },
    { year: '2019', event: 'Launched online store and delivery service' },
    { year: '2021', event: 'Opened premium training center for baristas' },
    { year: '2023', event: 'Reached 50+ locations across India' },
    { year: '2024', event: 'Partnered with 20+ international coffee estates' },
  ];

  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest single-origin beans from ethical suppliers',
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Building relationships with farmers and customers alike',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning roasts and brewing techniques',
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and fair trade',
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Master Roaster',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: '15+ years of coffee expertise',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'MBA from IIM, Coffee enthusiast',
    },
    {
      name: 'Arjun Patel',
      role: 'Lead Barista Trainer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'World Barista Championship finalist',
    },
    {
      name: 'Ananya Desai',
      role: 'Head of Sourcing',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Direct relationships with 50+ estates',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-coffee overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-cream" />
            <span className="text-sm font-semibold text-cream uppercase tracking-wide">Our Story</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream mb-6">
            Brewing Excellence Since 2015
          </h1>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto">
            From a small roastery in Mumbai to a nationwide movement, we've been on a mission to bring 
            the world's finest coffee to every cup.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that great coffee has the power to bring people together, spark conversations, 
            and create memorable moments. Our mission is to source, roast, and serve exceptional coffee 
            while supporting sustainable farming practices and empowering coffee-growing communities worldwide.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
            Our Core <span className="text-gradient-gold">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-gold transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20" />
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'text-right pr-[55%]' : 'text-left pl-[55%]'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="p-6 inline-block hover:shadow-gold transition-all duration-300">
                  <div className="font-heading text-2xl font-bold text-accent mb-2">{item.year}</div>
                  <p className="text-muted-foreground">{item.event}</p>
                </Card>
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">Meet Our Team</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              The People Behind the <span className="text-gradient-gold">Brew</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-gold transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                    <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-cream/80 mb-2">{member.role}</p>
                    <p className="text-xs text-cream/70">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're a coffee connoisseur or just beginning to explore, we invite you to 
            experience the difference that passion and quality make.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
