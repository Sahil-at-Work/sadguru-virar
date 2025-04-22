import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg" 
          alt="Students in classroom" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            SADGURU SCIENCE CLASSES
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">
            Our Guidance, Student's Hardwork, Parents' Satisfaction
          </p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-200 mb-10 max-w-2xl mx-auto">
            Empowering students with knowledge, skills, and confidence to excel in science and beyond.
            Join our community of achievers today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#courses"
              className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-8 rounded-full transition-all duration-300 flex items-center space-x-2 text-lg"
            >
              <span>Explore Courses</span>
              <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white py-3 px-8 rounded-full transition-all duration-300 text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;