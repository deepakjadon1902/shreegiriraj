import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    // Reset to dark background assumption on route change
    setIsOverDark(true);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position - hero sections are typically first ~500-600px
      // When scrolled past hero, switch to dark text
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.6; // 60vh hero sections
      setIsOverDark(scrollY < heroHeight - 80); // 80px offset for navbar height
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  // Dynamic text colors based on background
  const textColor = isOverDark ? 'text-white' : 'text-foreground';
  const textColorMuted = isOverDark ? 'text-white/70' : 'text-foreground/70';
  const bgHover = isOverDark ? 'hover:bg-white/10' : 'hover:bg-foreground/5';
  const bgActive = isOverDark ? 'bg-white/10' : 'bg-foreground/10';
  const underlineColor = isOverDark ? 'bg-white' : 'bg-foreground';
  const buttonBg = isOverDark ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-foreground/5 border-foreground/10 hover:bg-foreground/10';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${buttonBg}`}>
              <img 
                src="/assets/giriraj logo.jpeg" 
                alt="Shree Giriraj Sewa Sadan Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-serif text-lg font-bold leading-tight transition-colors duration-300 ${textColor}`}>
                Shree Giriraj Sewa Sadan
              </h1>
              <p className={`text-xs tracking-wider uppercase transition-colors duration-300 ${textColorMuted}`}>
                बरनाला वालों की (पंजी.) धर्मशाला
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                  isActive(link.path)
                    ? `${textColor} ${bgActive}`
                    : `${textColorMuted} hover:${textColor} ${bgHover}`
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${underlineColor} ${
                    isActive(link.path) ? 'w-6' : 'w-0 group-hover:w-4'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${buttonBg}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={textColor} size={24} />
            ) : (
              <Menu className={textColor} size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-xl rounded-xl border border-foreground/10 p-4 space-y-1 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-foreground/10 text-foreground'
                    : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;