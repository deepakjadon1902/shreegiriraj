import { MapPin, Navigation, Clock, Star } from 'lucide-react';
import premMandirImg from '@/assets/PremMandir.jpeg';
import bankeBihariImg from '@/assets/bihari ji.jpeg';
import vaishnodeviImg from '@/assets/Char Dham.jpeg';
import iskconImg from '@/assets/Isckon.jpeg';

const nearbyPlaces = [
  {
    name: 'Prem Mandir',
    distance: '600 meters',
    timing: '5:30 AM - 8:30 PM',
    description: 'A magnificent white marble temple dedicated to Radha Krishna, renowned worldwide for its stunning architecture and mesmerizing evening light show. The temple depicts the divine pastimes of Lord Krishna.',
    image: premMandirImg,
    highlights: ['Marble Architecture', 'Light & Sound Show', 'Krishna Leela Depictions'],
    rating: 4.9,
  },
  {
    name: 'Banke Bihari Temple',
    distance: '3.5 km',
    timing: '7:45 AM - 12:00 PM, 5:30 PM - 9:30 PM',
    description: 'One of the most sacred temples in Vrindavan, dedicated to Lord Krishna in his enchanting Banke Bihari form. The unique curtain ceremony and divine atmosphere attract millions of devotees annually.',
    image: bankeBihariImg,
    highlights: ['Curtain Ceremony', 'Ancient Heritage', 'Divine Darshan'],
    rating: 4.8,
  },
  {
    name: 'Char Dham',
    distance: '3 km',
    timing: '6:00 AM - 9:00 PM',
    description: 'A beautiful replica of the famous Vaishno Devi shrine, offering devotees a spiritual experience of the holy cave temple right here in Vrindavan. Features the sacred journey and holy darshan.',
    image: vaishnodeviImg,
    highlights: ['Cave Replica', 'Peaceful Ambiance', 'Easy Accessibility'],
    rating: 4.7,
  },
  {
    name: 'ISKCON Temple',
    subtitle: 'Krishna Balaram Mandir',
    distance: '3.5 km',
    timing: '4:30 AM - 1:00 PM, 4:00 PM - 8:30 PM',
    description: 'The famous ISKCON temple founded by Srila Prabhupada, featuring beautiful deities of Krishna-Balaram and Radha-Shyamasundara. A major pilgrimage site for devotees from around the world.',
    image: iskconImg,
    highlights: ['Srila Prabhupada Samadhi', 'Prasadam', 'Spiritual Programs'],
    rating: 4.9,
  },
];

const NearbyPlaces = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-widest mb-4">
            पावन स्थल
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            निकटवर्ती आध्यात्मिक स्थल
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-spiritual-yellow via-spiritual-red to-spiritual-yellow mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            वृंदावन के हृदय में स्थित हमारा प्रमुख स्थान आपको इस पावन धाम के सबसे पवित्र मंदिरों और आध्यात्मिक स्थलों तक सहज पहुँच प्रदान करता है।
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {nearbyPlaces.map((place, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Distance Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                  <Navigation className="w-3.5 h-3.5 text-spiritual-green" />
                  {place.distance}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-spiritual-yellow/95 text-foreground px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {place.rating}
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-lg">
                    {place.name}
                  </h3>
                  {place.subtitle && (
                    <p className="text-white/80 text-sm mt-1">{place.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Timing */}
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 text-spiritual-green" />
                  <span className="text-sm">{place.timing}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {place.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {place.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Map Link */}
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(place.name + ' Vrindavan')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-spiritual-yellow transition-colors group/link"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
