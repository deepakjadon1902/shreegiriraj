import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
}

const facilities: Facility[] = [
  // Trust Facilities
  {
    id: 1,
    name: 'Spacious Lawn Area',
    description: 'A beautifully maintained  lawn where devotees can sit peacefully, practice meditation, or gather for spiritual discussions in a serene natural environment.',
    image: '/assets/giriraj pooja lawn.jpeg',
  },
  {
    id: 2,
    name: 'Secure Parking Facility',
    description: 'Safe and spacious parking area for cars, bikes, and buses. Our 24/7 security ensures your vehicles are protected throughout your stay.',
    image: '/assets/giriraj parking.jpeg',
  },
  
  {
    id: 3,
    name: 'Trust Compound',
    description: 'Our well-maintained compound provides a safe and clean environment for families and groups. The entire premises is kept spotless for devotee comfort.',
    image: '/assets/giriraj main compund.jpeg',
  },
  // Food Services
  {
    id: 4,
    name: 'Satvik Food Service',
    description: 'Pure vegetarian meals prepared with love and devotion. Our kitchen serves fresh, hygienic satvik food following traditional recipes blessed for spiritual nourishment.',
    image: '/assets/giriraj satvik food.jpeg',
  },
  {
    id: 5,
    name: 'Prasadam Distribution',
    description: 'Daily prasadam is offered to all guests as a sacred blessing. Experience the divine taste of food offered to the Lord with pure devotion.',
    image: '/assets/giriraj kitchen.jpeg',
  },
  // Room Types
  {
    id: 6,
    name: 'AC Double Bed Room',
    description: 'A comfortable budget-friendly room with a double bed, ideal for  travelers or sadhus seeking a simple and peaceful stay during their pilgrimage.',
    image: '/assets/giriraj double bed rrom.jpeg',
  },
  {
    id: 7,
    name: ' AC Four Bed  Room',
    description: 'Spacious AC room with a comfortable Four bed and attached bathroom. Perfect for couples or small families on a budget pilgrimage.',
    image: '/assets/giriraj 4 bed Ac room.jpeg',
  },
  {
    id: 8,
    name: ' AC Eight Bed  Room',
    description: 'Ideal for families or groups of three, this room features Four single beds with essential amenities for a comfortable AC stay.',
    image: '/assets/giriraj 4 bed ac rrom.jpeg',
  },
 
 {
    id: 9,
    name: 'Lift Service',
    description: 'Modern elevator facility available for easy access to all floors, especially convenient for elderly devotees and families with luggage.',
    image: '/assets/giriraj lift.jpeg',
  },
  {
    id: 10,
    name: 'Attached Clean Washroom',
    description: 'Every room comes with a clean, hygienic attached bathroom with 24/7 running water supply and proper sanitation maintained daily.',
    image: '/assets/giriraj washroom.jpeg',
  },
  {
    id: 11,
    name: 'Balcony',
    description: 'Selected rooms feature private balconies offering serene views, perfect for morning prayers and evening meditation in the fresh air.',
    image: '/assets/giriraj balcony.jpeg',
  },
  {
    id: 12,
    name: 'Private TV in Room',
    description: 'Enjoy spiritual programs and devotional channels with a private television in your room, keeping you connected to divine content.',
    image: '/assets/giriraj Tv service.jpeg',
  },
  // Other Facilities
  {
    id: 13,
    name: 'Reception & Assistance',
    description: 'Friendly staff available round the clock to assist with bookings, local guidance, temple timings, and any help you need during your spiritual journey.',
    image: '/assets/giriraj reception.jpeg',
  },
  {
    id: 14,
    name: 'Common Sitting Area',
    description: 'Comfortable common areas where devotees can gather, share spiritual experiences, and build connections with fellow pilgrims from across the country.',
    image: '/assets/giriraj waiting area.jpeg',
  },
  {
    id: 15,
    name: 'Personal Almirah in Room',
    description: 'Secure storage almirah provided in each room to safely keep your belongings, clothes, and valuables during your spiritual stay.',
    image: '/assets/giriraj almirah or drawer.jpeg',
  },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/giriraj waiting area.jpeg"
            alt="Trust facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-white/90 font-medium text-sm uppercase tracking-widest mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              हमारी उपलब्ध सुविधाएँ
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
              ट्रस्ट की झलकियाँ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white/50 via-white to-white/50 mx-auto rounded-full mb-8" />
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              वृंदावन में आपके आध्यात्मिक प्रवास को आरामदायक, शांत और स्मरणीय बनाने के लिए डिज़ाइन की गई हमारी ट्रस्ट सुविधाओं का अन्वेषण करें।
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-secondary rounded-xl overflow-hidden card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Need More Information */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
              Connect with us to learn more about our trust services or to make a booking 
              for your spiritual journey to Vrindavan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/919927600017?text=${encodeURIComponent("Jai Shri Krishna! I would like to know more about booking a room at Shree Giriraj Sewa Sadan.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-spiritual-green text-white hover:bg-spiritual-green/90 text-lg px-8 py-6 w-full sm:w-auto shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919927600017">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;