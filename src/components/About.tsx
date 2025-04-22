import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-accent-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            SADGURU SCIENCE CLASSES has been a beacon of excellence in science education since 2002.
            We specialize in preparing students for competitive exams and building a strong foundation in scientific concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Feature
            icon={<BookOpen size={48} />}
            title="Expert Guidance"
            description="Our experienced faculty members provide specialized coaching in Physics, Chemistry, Biology, and Mathematics with proven teaching methodologies."
          />
          <Feature
            icon={<Users size={48} />}
            title="Personalized Attention"
            description="We maintain small batch sizes to ensure individual attention, regular assessments, and personalized feedback to improve student performance."
          />
          <Feature
            icon={<Award size={48} />}
            title="Track Record of Excellence"
            description="Our students consistently achieve top ranks in competitive exams including JEE, NEET, and Olympiads year after year."
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Message from Our Founders</h3>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">Dear Parents,</p>
            <p className="mb-6">Warm greetings from the entire Sadguru team!</p>
            <p className="mb-4">We are very pleased to announce that Sadguru Science Classes was founded in 2002 with a vision to provide the best quality education to the secondary and higher secondary students of Virar. 22 years later, it remains one of the best institutions among the organised classroom coaching centres in Virar.</p>
            <p className="mb-4">It is not easy to achieve success. One has to put one's best efforts to achieve the purpose of life & I am sure that 'Sadguru Science Classes' is the right place where students can achieve their goals with the able guidance of committed teachers.</p>
            <p className="mb-4">If an institute remains in the same place for a long time, it proves its excellence. Our institute is no exception to it. Every year our students come with flying colours.</p>
            <p className="mb-4">The Sadguru Science Classes strives to spread its fragrance to every nook and corner of the city.</p>
            <p className="mb-6">We seek your blessings in our endeavour.</p>
            <p className="mb-6">With warm regards...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <img
                src="https://sadguru-science-classes.vercel.app/assets/AboutUs/madam.png"
                alt="Mrs. Sanjokta A. Sawant"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">Mrs. Sanjokta A. Sawant</h4>
              <p className="text-gray-600">Founder & Proprietor</p>
              <p className="text-accent-600">M.Sc. Physics</p>
            </div>
            <div className="text-center">
              <img
                src="https://sadguru-science-classes.vercel.app/assets/AboutUs/sahil.png"
                alt="Mr. Sahil A. Sawant"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">Mr. Sahil A. Sawant</h4>
              <p className="text-accent-600">B.Tech (VIT)</p>
              <p className="text-gray-600">Jr. Researcher, IUCAA</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://sadguru-science-classes.vercel.app/assets/AboutUs/vision.png" 
              alt="Sadguru Science Classes Building" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Journey</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2002 by Mrs. Sanjokta A. Sawant (M.Sc. Physics) and Mr. Ashok R. Sawant (B.A. Economics), 
              SADGURU SCIENCE CLASSES began with a vision to provide the best quality education to secondary and 
              higher secondary students in Virar.
            </p>
            <p className="text-gray-600 mb-6">
              For over 22 years, we have remained one of the best institutions among organized classroom coaching 
              centers in Virar. Our longevity and consistent results are a testament to our excellence in education.
            </p>
            <p className="text-gray-600">
              Under the leadership of Mrs. Sanjokta A. Sawant as Proprietor and Mr. Ashok Sawant sir as our visionary, we continue to strive for excellence and spread our influence throughout the city.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;