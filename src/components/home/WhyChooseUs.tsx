import { TreePine, Heart, Bed, MapPin, Users, Award } from 'lucide-react';

const features = [
  {
    icon: TreePine,
    title: 'Tranquil Environment',
    description: 'Escape the chaos of daily life and immerse yourself in the serene atmosphere of Vrindavan.',
    color: 'spiritual-green',
  },
  {
    icon: Heart,
    title: 'Inclusive Atmosphere',
    description: 'We welcome all devotees with open hearts, regardless of background or belief.',
    color: 'spiritual-red',
  },
  {
    icon: Bed,
    title: 'Comfortable Stay',
    description: 'Clean, well-maintained rooms with modern amenities for a restful spiritual retreat.',
    color: 'spiritual-yellow',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Just 200 meters from Prem Mandir and close to all major temples of Vrindavan.',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Dedicated Staff',
    description: 'Our caring team is available 24/7 to assist you with any needs during your stay.',
    color: 'spiritual-green',
  },
  {
    icon: Award,
    title: 'Trusted Reputation',
    description: 'Serving devotees for years with consistent quality and heartfelt hospitality.',
    color: 'spiritual-yellow',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-spiritual-green font-medium text-sm uppercase tracking-wider mb-3">
            हमें क्यों चुनें
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            आपके लिए सर्वश्रेष्ठ आध्यात्मिक विश्राम स्थल
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-spiritual-green via-spiritual-yellow to-spiritual-green mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">
            Discover what makes  Shree Giriraj Sewa Sadan the preferred choice 
            for pilgrims visiting the holy land of Vrindavan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-sm card-hover group"
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors ${
                  feature.color === 'spiritual-green'
                    ? 'bg-spiritual-green/10 group-hover:bg-spiritual-green'
                    : feature.color === 'spiritual-red'
                    ? 'bg-spiritual-red/10 group-hover:bg-spiritual-red'
                    : feature.color === 'spiritual-yellow'
                    ? 'bg-spiritual-yellow/10 group-hover:bg-spiritual-yellow'
                    : 'bg-primary/10 group-hover:bg-primary'
                }`}
              >
                <feature.icon
                  className={`w-7 h-7 transition-colors ${
                    feature.color === 'spiritual-green'
                      ? 'text-spiritual-green group-hover:text-spiritual-green-foreground'
                      : feature.color === 'spiritual-red'
                      ? 'text-spiritual-red group-hover:text-spiritual-red-foreground'
                      : feature.color === 'spiritual-yellow'
                      ? 'text-spiritual-yellow group-hover:text-spiritual-yellow-foreground'
                      : 'text-primary group-hover:text-primary-foreground'
                  }`}
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
