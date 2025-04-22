import React, { useState } from 'react';
import { Clock, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseProps {
  title: string;
  description: string;
  duration: string;
  batchSize: string;
  features: string[];
  image: string;
}

const courseData: CourseProps[] = [
  {
    title: 'JEE Advanced Preparation',
    description: 'Crack JEE with comprehensive preparation and targeted practice for engineering aspirants.',
    duration: '2 Years',
    batchSize: '30 Students',
    features: [
      'In-depth coverage of Physics, Chemistry, and Mathematics',
      'Regular mock tests modeled on JEE pattern',
      'One-on-one doubt clearing sessions',
      'Special problem-solving techniques',
      'Advanced study materials and question banks'
    ],
    image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg'
  },
  {
    title: 'MHT-CET',
    description: 'Prepare for MHT-CET with expert guidance and rigorous practice tailored for state-level exams.',
    duration: '1 Year',
    batchSize: '30 Students',
    features: [
      'Comprehensive coverage of state board syllabus',
      'Regular practice tests based on CET pattern',
      'Detailed performance analysis and feedback',
      'Special focus on important topics',
      'Previous year question paper discussion'
    ],
    image: 'https://images.pexels.com/photos/3769621/pexels-photo-3769621.jpeg'
  },
  {
    title: 'NEET Preparation',
    description: 'Achieve your dream of becoming a doctor with focused NEET coaching and subject mastery.',
    duration: '2 Years',
    batchSize: '30 Students',
    features: [
      'Comprehensive coverage of Biology, Physics, and Chemistry',
      'Regular practice tests and evaluations',
      'Special focus on NCERT curriculum',
      'Detailed study materials and notes',
      'One-on-one mentoring sessions'
    ],
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg'
  },
  {
    title: 'Class 11-12 Science',
    description: 'Master advanced science topics to excel in competitive exams like JEE and NEET.',
    duration: '2 Years',
    batchSize: '25 Students',
    features: [
      'Comprehensive coverage of PCM/PCB subjects',
      'Regular tests and assignments',
      'Doubt clearing sessions',
      'Study material and notes',
      'Parent-teacher meetings'
    ],
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg'
  },
  {
    title: 'Class 8-10 (SSC)',
    description: 'Build a strong foundation in science and mathematics with personalized guidance and conceptual clarity.',
    duration: '1 Year',
    batchSize: '25 Students',
    features: [
      'Focus on fundamental concepts',
      'Regular practice tests',
      'Personalized attention',
      'Board exam preparation',
      'Parent-teacher interaction'
    ],
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg'
  },
  {
    title: 'Class 9-10 Foundation',
    description: 'Excel in advanced topics with expert coaching tailored for higher secondary success.',
    duration: '2 Years',
    batchSize: '25 Students',
    features: [
      'Early preparation for competitive exams',
      'Strong foundation in basic concepts',
      'Regular assessment tests',
      'Special focus on problem-solving',
      'Comprehensive study material'
    ],
    image: 'https://images.pexels.com/photos/3769982/pexels-photo-3769982.jpeg'
  }
];

const CourseCard: React.FC<CourseProps> = ({ 
  title, 
  description, 
  duration, 
  batchSize, 
  features, 
  image 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1 text-primary-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users size={16} className="mr-1 text-primary-600" />
            <span>{batchSize}</span>
          </div>
        </div>
        
        <button
          className="flex items-center justify-between w-full text-left text-accent-600 font-medium mt-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Course Features</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Award size={16} className="mr-2 text-accent-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="mt-6 inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Enroll Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            We offer a variety of specialized courses designed to help students excel in various 
            competitive examinations and build strong foundations in science and mathematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;