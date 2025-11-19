import { Play } from 'lucide-react';

const reels = [
  {
    id: 1,
    title: 'Perfect Pour',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    id: 2,
    title: 'Coffee Beans',
    thumbnail: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=800&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: 3,
    title: 'Latte Art',
    thumbnail: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=800&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    id: 4,
    title: 'Brewing Magic',
    thumbnail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=800&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  }
];

const CoffeeReels = () => {
  return (
    <section className="py-20 bg-muted/30 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coffee Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the art of coffee through our aesthetic reels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-coffee-light/20 to-coffee-medium/20 dark:from-coffee-dark/40 dark:to-coffee-medium/30 shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              {/* Video/Thumbnail */}
              <div className="absolute inset-0 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={reel.thumbnail}
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-glow backdrop-blur-sm">
                  <Play className="w-8 h-8 text-accent-foreground fill-current ml-1" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-lg font-bold text-cream drop-shadow-lg">
                  {reel.title}
                </h3>
              </div>

              {/* Glass Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/10 dark:border-white/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeReels;
