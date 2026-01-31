import Layout from '@/components/layout/Layout';
import { Phone, Clock, Bed, Shield, Heart, Users, Utensils, Wifi, HandHeart, BookOpen, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bed,
    title: 'Comfortable Accommodation',
    description: 'Clean, well-maintained rooms ranging from budget-friendly non-AC options to premium AC rooms. All rooms are equipped with essential amenities for a comfortable and peaceful stay.',
    features: ['Clean Bedding', 'Attached Bathroom', 'Hot Water', 'Daily Housekeeping'],
  },
  {
    icon: Utensils,
    title: 'Satvik Food & Prasadam',
    description: 'We provide pure vegetarian satvik meals prepared with love and devotion. Fresh, hygienic, and nutritious food is served to all devotees as part of our seva to nourish both body and soul.',
    features: ['Pure Vegetarian', 'Fresh Prasadam', 'Hygienic Kitchen', 'Timely Meals'],
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Our dedicated staff is available round the clock to assist you with any needs. Early morning temple visits or late-night arrivals — we are always here to serve you.',
    features: ['24-Hour Reception', 'Night Security', 'Emergency Assistance', 'Flexible Check-in'],
  },
  {
    icon: Heart,
    title: 'Peaceful Spiritual Stay',
    description: 'Experience the divine atmosphere of Vrindavan. Our trust maintains a serene environment perfect for meditation, prayer, and spiritual contemplation.',
    features: ['Quiet Environment', 'Prayer Space', 'Spiritual Ambiance', 'Temple Proximity'],
  },
  {
    icon: HandHeart,
    title: 'Charitable Trust Services',
    description: 'As a registered charitable trust, we offer subsidized rates for genuine devotees and pilgrims. Our focus is on seva (service) rather than profit.',
    features: ['Subsidized Rates', 'Pilgrim Support', 'Group Accommodations', 'Charitable Activities'],
  },
  {
    icon: Users,
    title: 'Guest Assistance & Guidance',
    description: 'From temple darshan timings to local transportation, our knowledgeable staff helps you make the most of your pilgrimage in Vrindavan.',
    features: ['Temple Information', 'Local Guidance', 'Travel Assistance', 'Booking Help'],
  },
  {
    icon: Shield,
    title: 'Safe & Secure Environment',
    description: 'Your safety is our priority. We ensure a secure environment with proper safety measures and a trustworthy staff dedicated to your well-being.',
    features: ['Secure Premises', 'CCTV Surveillance', 'Safe Storage', 'Verified Staff'],
  },
  {
    icon: BookOpen,
    title: 'Spiritual Programs',
    description: 'Participate in daily aartis, bhajan sessions, and spiritual discourses organized by the trust. Connect with fellow devotees in a divine atmosphere.',
    features: ['Morning Aarti', 'Bhajan Sessions', 'Spiritual Talks', 'Festival Celebrations'],
  },
];

const trustHighlights = [
  { label: 'Years of Service', value: '10+' },
  { label: 'Devotees Served', value: '50,000+' },
  { label: 'Daily Meals', value: '200+' },
  { label: 'Rooms Available', value: '40+' },
];

const Services = () => {
  const whatsappMessage = encodeURIComponent(
    "Jai Shri Krishna! I would like to know more about the services at Shree Giriraj Sewa Sadan."
  );

  return (
    <Layout>
      {/* Hero Section with Reception Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/giriraj reception.jpeg"
            alt="Reception area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-white/90 font-medium text-sm uppercase tracking-widest mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              हमारी सेवा सुविधाएँ
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
              भक्ति और समर्पण के साथ सेवा
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white/50 via-white to-white/50 mx-auto rounded-full mb-8" />
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
             वृंदावन श्री गिरिराज सेवा सदन ट्रस्ट में हम केवल ठहरने की सुविधा ही नहीं देते, बल्कि उससे कहीं अधिक प्रदान करते हैं। हम आरामदायक कक्षों से लेकर पौष्टिक सात्त्विक भोजन तक, एक संपूर्ण आध्यात्मिक आतिथ्य अनुभव उपलब्ध कराते हैं—जो आपकी तीर्थयात्रा को शांत, सुखद और स्मरणीय बनाता है।
            </p>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustHighlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-serif">
                  {item.value}
                </div>
                <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-spiritual-green font-medium text-sm uppercase tracking-widest mb-4">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Trust Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and spiritually enriching stay in the holy dham of Vrindavan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-secondary/50 p-6 rounded-2xl card-hover group border border-transparent hover:border-primary/20 hover:bg-secondary"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-spiritual-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Note Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-2xl shadow-lg border border-border/50">
            <div className="flex items-start gap-6">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  सेवा के प्रति हमारी प्रतिबद्धता
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  एक धर्मार्थ ट्रस्ट संगठन के रूप में, हमारा प्रमुख उद्देश्य श्रीवृंदावन धाम में आने वाले भक्तों की सेवा करना है। हम लाभ के लिए नहीं, बल्कि श्री राधा-कृष्ण की कृपा प्राप्त करने आए तीर्थयात्रियों के आध्यात्मिक कल्याण हेतु कार्य करते हैं।
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  आरामदायक आवास से लेकर पौष्टिक सात्त्विक भोजन तक, आध्यात्मिक कार्यक्रमों से लेकर अतिथि-सेवा तक—हमारी सभी सेवाएँ प्रेम, भक्ति और निष्काम सेवा भाव के साथ प्रदान की जाती हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Booking CTAs */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for Your Spiritual Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Book your stay at Shree Giriraj Sewa Sadan and experience 
              divine hospitality in the heart of Vrindavan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/919927600017?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-spiritual-green text-white hover:bg-spiritual-green/90 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  WhatsApp Booking
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
              <a href="mailto:shreegirirajsewasadan@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
                >
                  Email Us
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-10 pt-10 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/70 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="tel:+919927600017"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>+91 99276 00017</span>
                </a>
                <a
                  href="tel:+919927600019"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>+91 99276 00019</span>
                </a>
                <a
                  href="tel:+919927600029"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>+91 99276 00029</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
