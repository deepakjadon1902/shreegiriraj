import { Heart, MapPin, Users, HandHeart, Sparkles, Home } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-widest mb-4">
            हमारे ट्रस्ट के बारे में
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            जहाँ हर तीर्थयात्री को घर जैसा सुकून मिले
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-spiritual-yellow via-spiritual-red to-spiritual-yellow mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe every devotee deserves a peaceful, affordable place to stay while 
            visiting the sacred land of Vrindavan — without worrying about comfort or cost.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Story & Problem We Solve */}
          <div className="space-y-8">
            {/* The Problem We Solve */}
            <div className="relative">
              <Sparkles className="absolute -left-8 -top-4 w-6 h-6 text-spiritual-yellow/50 hidden lg:block" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                The Challenge Pilgrims Face
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every year, thousands of devotees travel to Vrindavan seeking spiritual peace 
                and divine blessings. But many struggle to find <strong className="text-foreground">clean, 
                safe, and affordable accommodation</strong> — especially families, elderly pilgrims, 
                and those on tight budgets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Commercial hotels often charge high prices, while cheaper options lack basic 
                amenities. This forces devotees to worry about logistics instead of focusing 
                on their spiritual journey.
              </p>
            </div>

            {/* Our Solution */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                How We Help
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground"> Shree Giriraj Sewa Sadan</strong> is 
                a registered charitable trust that provides comfortable rooms, fresh satvik meals, 
                and round-the-clock support — all at subsidized rates that every pilgrim can afford.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located just <strong className="text-foreground">200 meters from Prem Mandir</strong>, 
                we take care of your stay so you can focus entirely on darshan, prayer, and 
                spiritual growth.
              </p>
            </div>
            
            {/* Trust Commitment */}
            <div className="bg-gradient-to-r from-spiritual-yellow/10 to-transparent p-6 rounded-xl border-l-4 border-spiritual-yellow">
              <p className="text-foreground font-medium italic">
                "We don't run a business — we perform seva. Every rupee goes back into 
                serving more devotees and maintaining our facilities."
              </p>
            </div>
          </div>

          {/* Right - Who We Serve & Values */}
          <div className="space-y-6">
            {/* Who We Serve */}
            <div className="bg-secondary p-6 rounded-2xl border border-transparent hover:border-spiritual-yellow/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-spiritual-yellow/20 to-spiritual-yellow/5 flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-spiritual-yellow" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Who We Serve</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-green mt-2 flex-shrink-0" />
                  <span>Families visiting Vrindavan for darshan and festivals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-green mt-2 flex-shrink-0" />
                  <span>Elderly pilgrims needing comfortable, accessible stays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-green mt-2 flex-shrink-0" />
                  <span>Solo devotees seeking peaceful spiritual retreat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-green mt-2 flex-shrink-0" />
                  <span>Groups from temples and organizations across India</span>
                </li>
              </ul>
            </div>

            {/* What Makes Us Different */}
            <div className="bg-secondary p-6 rounded-2xl border border-transparent hover:border-spiritual-green/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-spiritual-green/20 to-spiritual-green/5 flex items-center justify-center mb-5">
                <Heart className="w-7 h-7 text-spiritual-green" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">What Makes Us Different</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-yellow mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Non-profit trust</strong> — not a commercial hotel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-yellow mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Subsidized rates</strong> accessible to all budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-yellow mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Fresh satvik meals</strong> prepared with devotion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-spiritual-yellow mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">24/7 staff</strong> for early darshan & late arrivals</span>
                </li>
              </ul>
            </div>

            {/* Our Mission */}
            <div className="bg-secondary p-6 rounded-2xl border border-transparent hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
                <HandHeart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To serve every devotee who comes to Vrindavan with love, respect, and care — 
                ensuring that no pilgrim ever has to compromise their spiritual journey due 
                to lack of affordable, dignified accommodation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
