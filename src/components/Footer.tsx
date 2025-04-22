import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">SADGURU SCIENCE CLASSES</h3>
            <p className="text-gray-300 mb-4">
              Empowering students with knowledge, skills, and confidence to excel in science and beyond.
              Join our community of achievers today.
            </p>
            <div className="flex space-x-4">
              <a href="https://sadguru-science-classes.vercel.app/[Your%20Facebook%20Link]" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#https://www.instagram.com/sadguruacademy2025/" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/c/SadguruScienceClasses" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Courses', href: '#courses' },
                { name: 'Our Teachers', href: '#teachers' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Results', href: '#results' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-accent-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Sadguru Science Classes,<br />
                  Manvelpada Road, Virar (E)<br />
                  near St. Peter's High School,<br />
                  Virar - 401305, India
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-accent-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 880 683 2965</span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-accent-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">sadguruscienceclasses2002@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on events, results, and admissions.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-primary-800 text-white border border-primary-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-accent-500"
                />
                <button
                  type="submit"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SADGURU SCIENCE CLASSES. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors duration-300">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;