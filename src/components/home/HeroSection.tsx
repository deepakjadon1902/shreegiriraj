import heroImage from '@/assets/giriraj main home.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Spiritual temple in Vrindavan"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-overlay" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
         

          {/* Organization Name */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-in-up delay-100 tracking-tight">Shree Giriraj <span className="text-accent">Sewa Sadan</span></h1>

          {/* Subtitle - Trust Identity */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <span className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm md:text-base font-medium tracking-widest uppercase backdrop-blur-sm bg-white/5">
             अति आधुनिक एवं वातानुकूलित बरनाला वालों की पंजीकृत धर्मशाला
            </span>
          </div>

          {/* Motto */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-0 animate-fade-in-up delay-300 font-serif italic">
            "प्रेम और भक्ति के साथ भक्तों की सेवा"
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-400 leading-relaxed">
            श्रीवृंदावन धाम की पावन भूमि पर दिव्य और भक्तिमय आतिथ्य का अनुभव करें. 
            प्रेम मंदिर से केवल 200 मीटर दूर स्थित आपका शांत, पावन और आध्यात्मिक विश्राम स्थल.
          </p>

          {/* Decorative Bottom Element */}
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
