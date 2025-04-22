import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  images: string[];
}

const milestones: MilestoneProps[] = [
  {
    year: '2002',
    title: 'Foundation',
    description: 'SADGURU SCIENCE CLASSES was established with just 15 students and 2 faculty members.',
    images: [
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
      'https://images.pexels.com/photos/256491/pexels-photo-256491.jpeg'
    ]
  },
  {
    year: '2008',
    title: 'First Major Achievement',
    description: 'Our student secured AIR 45 in IIT-JEE, putting us on the map as a serious contender in science coaching.',
    images: [
      'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg',
      'https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg'
    ]
  },
  {
    year: '2012',
    title: 'Expansion',
    description: 'Opened our second branch to accommodate growing demand, with specialized divisions for JEE and NEET.',
    images: [
      'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
      'https://images.pexels.com/photos/2982450/pexels-photo-2982450.jpeg'
    ]
  },
  {
    year: '2015',
    title: '10 Years of Excellence',
    description: 'Celebrated a decade with outstanding results - 85% selection rate in medical and engineering entrance exams.',
    images: [
      'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg',
      'https://images.pexels.com/photos/3769715/pexels-photo-3769715.jpeg'
    ]
  },
  {
    year: '2018',
    title: 'Digital Transformation',
    description: 'Launched digital learning platforms and smart classrooms to enhance the learning experience.',
    images: [
      'https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg',
      'https://images.pexels.com/photos/4144145/pexels-photo-4144145.jpeg'
    ]
  },
  {
    year: '2020',
    title: 'Pandemic Response',
    description: 'Successfully transitioned to online teaching, maintaining our quality standards despite challenges.',
    images: [
      'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg',
      'https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg'
    ]
  },
  {
    year: '2022',
    title: 'Research Center',
    description: 'Established a dedicated research center for developing innovative teaching methodologies.',
    images: [
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      'https://images.pexels.com/photos/2280572/pexels-photo-2280572.jpeg'
    ]
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Serving over 2000 students annually with a remarkable 90% success rate in competitive exams.',
    images: [
      'https://images.pexels.com/photos/3769982/pexels-photo-3769982.jpeg',
      'https://images.pexels.com/photos/3769983/pexels-photo-3769983.jpeg'
    ]
  }
];

const MilestoneCard: React.FC<MilestoneProps & { index: number }> = ({ 
  year, 
  title, 
  description, 
  images,
  index 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Year indicator (mobile) */}
      <div className="md:hidden mb-4">
        <div className="inline-block bg-primary-600 text-white font-bold py-2 px-4 rounded">
          {year}
        </div>
      </div>
      
      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
        {/* Content block */}
        <div className="md:w-1/2 p-4">
          <div className={`bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 ${
            index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
          }`}>
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${title} - Image ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        
        {/* Year indicator (desktop) */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative">
            <div className="bg-primary-600 text-white font-bold py-2 px-4 rounded z-10 relative">
              {year}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent-500 rounded-full left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Legacy</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Since our inception, we have been committed to excellence in science education. 
            Our journey is marked by continuous growth, innovation, and the success of our students.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={index} {...milestone} index={index} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Success Mantras</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-primary-600 mb-3">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Quality Education</h4>
                <p className="text-gray-600">Never compromising on the quality of education we provide.</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-primary-600 mb-3">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Student-Centric Approach</h4>
                <p className="text-gray-600">Tailoring our methods to suit diverse learning needs.</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-primary-600 mb-3">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Continuous Innovation</h4>
                <p className="text-gray-600">Evolving with changing educational trends and technologies.</p>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white mt-10 py-3 px-6 rounded-lg transition-colors duration-300">
              <span className="font-medium">Join Our Legacy</span>
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;