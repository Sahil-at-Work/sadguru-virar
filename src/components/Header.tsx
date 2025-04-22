import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Vision & Mission', href: '#vision' },
  { name: 'Our Courses', href: '#courses' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Our Teachers', href: '#teachers' },
  { name: 'Results', href: '#results' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="flex items-center gap-2"
          >
            <img 
              src="https://sadguru-science-classes.vercel.app/assets/logo.png" 
              alt="Sadguru Science Classes" 
              className="h-20 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg transition-colors duration-300 hover:text-accent-500 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-accent-500 hover:bg-accent-600 text-white py-3 px-6 rounded-full transition-all duration-300 flex items-center space-x-2 text-lg font-medium"
            >
              <span>Enroll Now</span>
              <ChevronRight size={20} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={32} className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={32} className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white w-full py-6 px-4 shadow-md mt-2 rounded-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-accent-500 transition-colors duration-300 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center justify-center space-x-2 text-lg font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Enroll Now</span>
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;