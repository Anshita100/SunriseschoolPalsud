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

const governors = [
  { name: "Dr. Rajeev Khanna", title: "Chairman", image: "/images/my1.jpg" },
  { name: "Meera Sharma", title: "Financial Consultant", image: "/images/my1.jpg" },
  { name: "Prof. Aman Yadav", title: "Senior Professor", image: "/images/my1.jpg" },
  { name: "Sonal Batra", title: "Educationist", image: "/images/my1.jpg" },
  { name: "Ravi Gupta", title: "Strategy Advisor", image: "/images/my2.jpg" },
  { name: "Anita Deshmukh", title: "Psychologist", image: "/images/my2.jpg" },
  { name: "Mohit Jain", title: "Academic Director", image: "/images/my2.jpg" },
  { name: "Neha Roy", title: "HR Consultant", image: "/images/my2.jpg" },
  { name: "Deepak Verma", title: "Legal Advisor", image: "/images/my2.jpg" },
  { name: "Dr. Sushmita Reddy", title: "Public Relations", image: "/images/my1.jpg" },
  { name: "Naveen Malhotra", title: "Technology Consultant", image: "/images/my1.jpg" },
  { name: "Poonam Khurana", title: "Counsellor", image: "/images/my1.jpg" },
  { name: "Abhay Sharma", title: "Principal Mentor", image: "/images/my1.jpg" },
  { name: "Jyoti Joshi", title: "Curriculum Advisor", image: "/images/my2.jpg" },
  { name: "Sanjay Das", title: "Operations Head", image: "/images/my2.jpg" },
  { name: "Dr. Anita Rao", title: "School Director", image: "/images/my2.jpg" },
];

const BoardOfGovernorsSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <AboutPageTemplate
      title="Board of Governors"
      subtitle="Our Leadership and Governance"
      bannerImage="/images/boardofgovernors.jpg"
    >
      <SectionHeading
        title="Board of Governors"
        subtitle="The board of Sunrise school"
      />
      
      {/* Grid of Governors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {governors.map((gov, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`rounded-lg overflow-hidden shadow-lg ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-100'
            } transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <div className="h-56 overflow-hidden">
              <img
                src={gov.image}
                alt={gov.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className={`p-4 text-center ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`font-semibold text-lg ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>{gov.name}</h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>{gov.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Governance Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mt-16 p-6 md:p-8 rounded-xl shadow-lg ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
        }`}
      >
        <h3 className={`text-xl md:text-2xl font-bold mb-4 ${
          isDarkMode ? 'text-primary-400' : 'text-primary-600'
        }`}>Our Governance Philosophy</h3>
        
        <p className={`${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        } mb-4`}>
          The Board of Governors at Sunrise School provides strategic direction and oversight, ensuring the school's mission and values remain at the forefront of all decisions. With diverse expertise spanning education, finance, psychology, technology, and more, our governors bring valuable insights that strengthen our institution.
        </p>
        
        <p className={`${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Working collaboratively with school leadership, the Board guides policy development, financial planning, and long-term strategic initiatives. Their unwavering commitment to excellence in education ensures that Sunrise School continues to thrive as a leading institution dedicated to student success and holistic development.
        </p>
      </motion.div>
    </AboutPageTemplate>
  );
};

export default BoardOfGovernorsSection;
