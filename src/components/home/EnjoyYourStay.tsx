import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnjoyYourStay = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to inquire about rooms at  Shree Giriraj Sewa Sadan."
  );

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-spiritual-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-spiritual-green rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-spiritual-red font-medium text-sm uppercase tracking-wider mb-3">
           दिव्य अनुभव
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            पावन भूमि में अपने प्रवास का आनंद लें
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-spiritual-red via-spiritual-yellow to-spiritual-red mx-auto rounded-full mb-8" />

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              <span className="font-serif text-2xl text-foreground"></span> Step into a world 
              where spirituality and comfort intertwine. At  Shree Giriraj Sewa Sadan, 
              every morning begins with the melodious sounds of temple bells and the fragrance 
              of incense wafting through the air.
            </p>
            <p>
              Wake up to the divine energy of Vrindavan, take leisurely walks through the 
              sacred ghats, visit the magnificent temples, and return to the comfort of 
              your room for peaceful rest. Our location, just steps away from Prem Mandir, 
              ensures you're always close to the heart of devotion.
            </p>
            <p>
              Whether you're here for a short pilgrimage or an extended spiritual retreat, 
              we ensure your stay is filled with peace, comfort, and the blessings of 
              the divine land of Lord Krishna.
            </p>
          </div>

          {/* Decorative Quote */}
          <blockquote className="font-serif text-2xl md:text-3xl text-primary italic mb-10">
            "वृन्दावन धाम की जय"
            <span className="block text-base text-muted-foreground mt-2 not-italic">
              Glory to Vrindavan Dham
            </span>
          </blockquote>

          {/* CTA */}
          <a
            href={`https://wa.me/919809802980?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Enquire Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnjoyYourStay;
