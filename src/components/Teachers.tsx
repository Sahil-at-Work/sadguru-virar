import React, { useState } from 'react';
import { BookOpen, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface TeacherProps {
  name: string;
  role: string;
  qualifications: string[];
  experience: string;
  image: string;
}

const physicsTeachers: TeacherProps[] = [
  {
    name: 'Anshuman Singh',
    role: 'Physics Faculty',
    qualifications: ['B.Tech (VJTI)'],
    experience: '12+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/anshuman.png'
  },
  {
    name: 'Rajeshkumar Mishra',
    role: 'Physics Faculty',
    qualifications: ['M.Sc (Physics)', 'MBA'],
    experience: '10+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Rajeshkumar.png'
  },
  {
    name: 'Sahil Sawant',
    role: 'Physics Faculty',
    qualifications: ['B.Tech (VIT)', 'Researcher @ IUCAA'],
    experience: '5+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Sahil.png'
  }
];

const chemistryTeachers: TeacherProps[] = [
  {
    name: 'Shubham Gurav',
    role: 'Chemistry Faculty',
    qualifications: ['M.Sc.', 'B.Ed.'],
    experience: '10+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/shubham.png'
  },
  {
    name: 'Adityakumar Pandey',
    role: 'Chemistry Faculty',
    qualifications: ['M.Sc', 'B.Ed', 'Research @IIT-B'],
    experience: '8+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Adityakumar.png'
  },
  {
    name: 'Deepa Tiwari',
    role: 'Chemistry Faculty',
    qualifications: ['M.Sc', 'B.Ed'],
    experience: '7+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Deepa.png'
  }
];

const biologyTeachers: TeacherProps[] = [
  {
    name: 'Dr. Yogesh Kumar',
    role: 'Biology Faculty',
    qualifications: ['MBBS (GMC)'],
    experience: '4+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Yogesh.png'
  },
  {
    name: 'Suraj Jain',
    role: 'Biology Faculty',
    qualifications: ['M.Sc.'],
    experience: '5+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Suraj.png'
  },
  {
    name: 'Ronak Jha',
    role: 'Biology Faculty',
    qualifications: ['M.Sc.'],
    experience: '3+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Ronak.png'
  }
];

const mathematicsTeachers: TeacherProps[] = [
  {
    name: 'Sanjokta Sawant',
    role: 'Mathematics Faculty',
    qualifications: ['M.Sc (Physics)'],
    experience: '23+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Sanjokta.png'
  },
  {
    name: 'Chandan Maurya',
    role: 'Mathematics Faculty',
    qualifications: ['M.Sc', 'B.Ed'],
    experience: '8+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Chandan.png'
  },
  {
    name: 'Ayush Tiwari',
    role: 'Mathematics Faculty',
    qualifications: ['B.Tech (S.P)'],
    experience: '4+ years',
    image: 'https://sadguru-science-classes.vercel.app/assets/teachers/Ayush.png'
  }
];

interface DepartmentSectionProps {
  title: string;
  teachers: TeacherProps[];
}

const TeacherCard: React.FC<TeacherProps> = ({ 
  name, 
  role, 
  qualifications, 
  experience, 
  image 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
      <div className="relative w-full pt-[100%]">
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-accent-300">{role}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-accent-600 mb-4">{role}</p>
        
        <div className="flex items-center text-gray-700 mb-2">
          <BookOpen size={18} className="mr-2 text-primary-600" />
          <span className="text-sm">{experience} Experience</span>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {qualifications.map((qualification, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
              >
                <Award size={12} className="mr-1" />
                {qualification}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DepartmentSection: React.FC<DepartmentSectionProps> = ({ title, teachers }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 last:mb-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-6 py-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      
      {isExpanded && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} {...teacher} />
          ))}
        </div>
      )}
    </div>
  );
};

const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Teachers</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Meet our team of experienced educators who are passionate about teaching and dedicated to 
            helping students achieve academic excellence.
          </p>
        </div>

        <div className="space-y-6">
          <DepartmentSection title="Physics Department" teachers={physicsTeachers} />
          <DepartmentSection title="Chemistry Department" teachers={chemistryTeachers} />
          <DepartmentSection title="Biology Department" teachers={biologyTeachers} />
          <DepartmentSection title="Mathematics Department" teachers={mathematicsTeachers} />
        </div>
      </div>
    </section>
  );
};

export default Teachers;