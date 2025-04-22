import React, { useState } from 'react';
import { Star, Award, Medal, ChevronRight, ChevronLeft } from 'lucide-react';

interface StudentResult {
  id: number;
  name: string;
  image: string;
  year: string;
  percentage: number;
  school: string;
  achievement?: string;
}

const studentResults: StudentResult[] = [
  {
    id: 1,
    name: 'Aarav Sharma',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    year: '2023',
    percentage: 98.8,
    school: 'St. Xavier\'s High School',
    achievement: 'AIR 34 in JEE Advanced'
  },
  {
    id: 2,
    name: 'Priya Patel',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    year: '2023',
    percentage: 97.6,
    school: 'Delhi Public School',
    achievement: 'AIR 56 in NEET'
  },
  {
    id: 3,
    name: 'Rahul Singh',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    year: '2022',
    percentage: 96.4,
    school: 'Ryan International School',
    achievement: 'International Physics Olympiad Silver Medalist'
  },
  {
    id: 4,
    name: 'Ananya Gupta',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    year: '2022',
    percentage: 95.8,
    school: 'Modern School',
    achievement: 'AIR 128 in JEE Mains'
  }
];

const Results: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const resultsPerPage = 3;
  const totalPages = Math.ceil(studentResults.length / resultsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentResults = studentResults.slice(
    currentPage * resultsPerPage,
    (currentPage + 1) * resultsPerPage
  );

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Results</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our students' achievements are a testament to our teaching methodology and their dedication.
            Here are some of our recent top performers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentResults.map((result) => (
            <div 
              key={result.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={result.image} 
                  alt={result.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{result.name}</h3>
                  <p className="text-gray-200">{result.school}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-600">
                    <span className="font-semibold">Year:</span> {result.year}
                  </div>
                  <div className="text-accent-600 font-bold text-lg">
                    {result.percentage}%
                  </div>
                </div>
                {result.achievement && (
                  <div className="mt-4 flex items-center">
                    <Medal className="text-accent-500 mr-2" size={20} />
                    <p className="text-primary-600 font-medium">{result.achievement}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        <div className="mt-16 bg-primary-900 rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Join Our Success Story?</h3>
          <p className="max-w-2xl mx-auto mb-8">
            Join us and be a part of our legacy of academic excellence and achievement.
            Let us help you reach your full potential.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Enroll Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;