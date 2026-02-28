import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Facebook, Twitter, Youtube } from 'lucide-react';
import LegalModal from '@/components/modals/LegalModal';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
           <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/giriraj-logo.png" 
                  alt="Shree Giriraj Sewa Sadan Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">Shree Giriraj Sewa Sadan</h3>
                <p className="text-sm text-primary-foreground/80">बरनाला वालों की वातानुकूलित (पंजी.) धर्मशाला</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              श्रीवृंदावन धाम की पावन गोद में दिव्य आतिथ्य का अनुभव करें—जहाँ हर क्षण भक्ति, शांति और आत्मिक आनंद से भर देता है।
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919927600017"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 99276 00017</span>
              </a>
              <a
                href="tel:+919927600019"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 99276 00019</span>
              </a>
              <a
                href="tel:+919927600029"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 99276 00029</span>
              </a>
              <a
                href="mailto:shreegirirajsewasadan@gmail.com"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>shreegirirajsewasadan@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <span>24 Hours Service Available</span>
              </div>
            </div>
          </div>

          {/* Vrindavan Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Vrindavan Location</h4>
            <a
              href="https://www.google.com/maps/place/Shri+Giriraj+Sewa+Sadan/@27.5696282,77.6700429,19z/data=!3m1!4b1!4m6!3m5!1s0x39736e1a3ab83695:0xbfc876719005434e!8m2!3d27.5696282!4d77.6700429!16s%2Fg%2F11b6_7snqk?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
            >
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                Keshav Dham Road,<br />
                In front of Prem Mandir,<br />
               Vrindavan - 281121
              </address>
            </a>
            
            {/* Registered Office - Clickable to open map */}
            <div className="pt-4 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/60 font-medium mb-2">Head office</p>
              <a
                href="https://www.google.com/maps/search/Kothi+No+21+Green+Avenue+Barnala+148101"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-primary-foreground/70 leading-relaxed hover:text-accent transition-colors cursor-pointer"
              >
                Shree Giriraj Seva Sadan (Reg. - 82)<br />
                Kothi No. 21, Green Avenue,<br />
                Baranala – 148101
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
              <LegalModal type="privacy">
                <button className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </button>
              </LegalModal>
              <LegalModal type="terms">
                <button className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms & Conditions
                </button>
              </LegalModal>
            </nav>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Shree Giriraj Sewa Sadan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
