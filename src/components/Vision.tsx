import React from 'react';
import { Eye, Target } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision & Mission</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Our guiding principles that shape our approach to education and student development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-primary-800/50 p-8 rounded-lg border border-primary-700 transform transition-transform hover:-translate-y-2 duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-accent-500 p-3 rounded-full mr-4">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300 mb-6">
              To be a beacon of excellence in science education, consistently nurturing and empowering 
              secondary and higher secondary students to achieve their academic and personal goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Establishing ourselves as a recognized and respected institution throughout Virar</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Creating lasting positive impact on students' lives</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Maintaining enduring quality in education delivery</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-800/50 p-8 rounded-lg border border-primary-700 transform transition-transform hover:-translate-y-2 duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-accent-500 p-3 rounded-full mr-4">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-300 mb-6">
              To provide high-quality, structured classroom coaching that fosters a deep understanding 
              of scientific concepts while creating a supportive learning environment.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Creating a supportive and encouraging learning environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Empowering students with knowledge, skills, and confidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Maintaining continuous improvement and adaptation to evolving educational needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Establishing strong teacher-student-parent bonds for holistic development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;