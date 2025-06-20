import React from "react";
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AboutPageTemplate from './AboutPageTemplate';
import SectionHeading from './SectionHeading';
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AboutSidebar from "./AboutSidebar";

const facultyData = [
  {
    name: "Dr. Anjali Mehra",
    image: "/images/my.jpg",
    description: "Head of Department – Science. With over 15 years of experience, Dr. Mehra brings innovation and depth to science education through practical, project-based learning.",
  },
  {
    name: "Mr. Rajeev Sharma",
    image: "/images/my.jpg",
    description: "Mathematics Coordinator. Known for his unique problem-solving strategies, Mr. Sharma inspires analytical thinking and logical reasoning in students.",
  },
  {
    name: "Ms. Reema Gupta",
    image: "/images/my.jpg",
    description: "Language & Literature Specialist. She is passionate about building communication skills and cultivating a love for literature in young minds.",
  },
  {
    name: "Mr. Ashok Verma",
    image: "/images/my.jpg",
    description: "Technology Integration Expert. Ashok focuses on digital transformation and integrates cutting-edge tech tools into the learning environment.",
  },
  {
    name: "Dr. Neha Rathi",
    image: "/images/my.jpg",
    description: "Wellbeing and Psychology Lead. Her empathetic approach nurtures emotional intelligence and resilience among students.",
  },
  {
    name: "Mrs. Preeti Joshi",
    image: "/images/my.jpg",
    description: "Visual Arts Mentor. She encourages creativity and innovation through various visual arts programs, exhibitions, and collaborative projects.",
  },
];

const LeadershipFacultySection = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <AboutPageTemplate
      title="Leadership Team and Faculty"
      subtitle="Empowering Minds, Inspiring Futures"
      bannerImage="/images/leadership.jpg"
    >
      <SectionHeading
        title="Leadership Team and Faculty"
        subtitle="Empowering Minds, Inspiring Futures"
      />

      {/* Faculty Cards */}
      <div className="mt-12">
        {facultyData.map((faculty, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row gap-8 mb-12 items-center ${
              index < facultyData.length - 1 ? 'pb-12 border-b' : ''
            } ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            {/* Faculty Image */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`rounded-full h-48 w-48 overflow-hidden shadow-lg border-4 ${
                isDarkMode ? 'border-primary-700' : 'border-primary-200'
              }`}>
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Description */}
            <div className="text-left">
              <h3 className={`text-xl font-semibold ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>{faculty.name}</h3>
              <p className={`mt-2 text-base max-w-3xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>{faculty.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Faculty Mission Statement */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mt-16 p-6 md:p-8 rounded-xl shadow-lg ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
            isDarkMode ? 'bg-primary-900/50' : 'bg-primary-100'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${
              isDarkMode ? 'text-primary-400' : 'text-primary-600'
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          <div>
            <h3 className={`text-xl md:text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-primary-400' : 'text-primary-600'
            }`}>Our Educational Philosophy</h3>
            
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              At Sunrise School, our leadership and faculty are the backbone of our academic excellence. Their dedication, expertise, and passion drive the success of every child. Through continuous professional development, innovation in teaching methods, and a nurturing environment, our faculty empower students to thrive in an ever-evolving world. They are mentors, guides, and lifelong learners themselves—committed to shaping the leaders of tomorrow.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Faculty Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "45+", label: "Experienced Teachers" },
          { number: "25", label: "Academic Departments" },
          { number: "18", label: "Years Average Experience" },
          { number: "96%", label: "Teacher Retention Rate" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`p-6 rounded-xl shadow-lg text-center ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-100'
            } hover:shadow-xl transition-all duration-300`}
          >
            <div className={`text-4xl font-bold mb-2 ${
              isDarkMode ? 'text-primary-400' : 'text-primary-600'
            }`}>{stat.number}</div>
            <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </AboutPageTemplate>
  );
};

export default LeadershipFacultySection;
