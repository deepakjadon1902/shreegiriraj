import heroImage from '@/assets/giriraj main home.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 4K HD Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Spiritual temple in Vrindavan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle Blur Overlay for Text Clarity */}
      <div className="absolute inset-0 z-10 bg-black/30 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Organization Name */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-in-up delay-100 tracking-tight drop-shadow-2xl">
            Shree Giriraj <span className="text-accent">Sewa Sadan</span>
          </h1>

          {/* Subtitle - Trust Identity */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <span className="inline-block px-6 py-2 border-2 border-white rounded-full text-sm md:text-base font-medium tracking-widest uppercase drop-shadow-2xl bg-white/5 backdrop-blur-sm">
              अति आधुनिक एवं वातानुकूलित बरनाला वालों की पंजीकृत धर्मशाला
            </span>
          </div>

          {/* Motto */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-0 animate-fade-in-up delay-300 font-serif italic drop-shadow-2xl">
            "प्रेम और भक्ति के साथ भक्तों की सेवा"
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-400 leading-relaxed drop-shadow-2xl">
            श्रीवृंदावन धाम की पावन भूमि पर दिव्य और भक्तिमय आतिथ्य का अनुभव करें. 
            प्रेम मंदिर से केवल 200 मीटर दूर स्थित आपका शांत, पावन और आध्यात्मिक विश्राम स्थल |
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;