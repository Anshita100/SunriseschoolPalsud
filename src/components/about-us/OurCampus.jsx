import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';
import { Plus, Minus } from "lucide-react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AboutSidebar from "./AboutSidebar";
import AboutPageTemplate from './AboutPageTemplate';
import SectionHeading from './SectionHeading';
import StandardizedImage from '../../utils/StandardizedImage';

const accordionData = [
  { title: "Modern Classrooms", description: "Equipped with smart boards, ergonomic seating, and natural lighting to create a student-centric environment." },
  { title: "Science & Tech Labs", description: "State-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science." },
  { title: "Library & Resource Center", description: "Vast collections of books, digital media, and peaceful reading zones." },
  { title: "Auditorium", description: "Fully air-conditioned with advanced sound and lighting systems for events and presentations." },
  { title: "Sports Complex", description: "Indoor and outdoor sports facilities including swimming pool, courts, and gym." },
  { title: "Creative Arts Studio", description: "Dedicated spaces for music, dance, painting, drama and photography." },
  { title: "Green Campus", description: "Eco-friendly infrastructure with lush green zones and sustainable practices." },
];

const OurCampus = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { isDarkMode } = useTheme();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AboutPageTemplate
      title="Our Campus"
      subtitle="Experience Excellence in Infrastructure"
      bannerImage="/images/ourcampus.jpg"
    >
      <SectionHeading
        title="Our Campus"
        subtitle="Experience the Spirit of Our School Through Photos"
      />

      {/* Accordion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 my-10"
      >
        {accordionData.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`border rounded-lg shadow-sm transition-all ${
              isDarkMode 
                ? 'border-gray-700' 
                : 'border-primary-100'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`flex justify-between items-center w-full p-4 text-lg font-medium text-left focus:outline-none ${
                isDarkMode 
                  ? openIndex === index 
                    ? 'bg-gray-800 text-primary-400' 
                    : 'hover:bg-gray-800/50 text-gray-200' 
                  : openIndex === index 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'hover:bg-primary-50/50 text-primary-600'
              } transition-colors duration-200 rounded-lg`}
            >
              <span>{item.title}</span>
              {openIndex === index 
                ? <Minus size={20} className={isDarkMode ? 'text-primary-400' : 'text-primary-500'} /> 
                : <Plus size={20} className={isDarkMode ? 'text-primary-400' : 'text-primary-500'} />
              }
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden ${
                    isDarkMode ? 'bg-gray-800/50' : 'bg-primary-50'
                  }`}
                >
                  <div className={`p-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {item.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Campus Images Section */}
      <div className="mt-12">
        <SectionHeading
          title="Campus Gallery" 
          subtitle="A glimpse of our world-class facilities"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={`/images/imagecampus-${i + 1}.png`}
                  alt={`Campus ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Virtual Tour Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mt-16 p-6 md:p-8 rounded-xl shadow-lg text-center ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
        }`}
      >
        <h3 className={`text-2xl font-bold mb-4 ${
          isDarkMode ? 'text-primary-400' : 'text-primary-600'
        }`}>
          Take a Virtual Tour
        </h3>
        
        <p className={`mb-6 max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Can't visit us in person? Explore our campus through our immersive virtual tour and discover the exceptional facilities and spaces where our students learn, create, and grow.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`px-6 py-3 rounded-lg font-medium ${
            isDarkMode 
              ? 'bg-primary-600 hover:bg-primary-500 text-white' 
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          } transition-colors duration-200`}
        >
          Start Virtual Tour
        </motion.button>
      </motion.div>
    </AboutPageTemplate>
  );
};

export default OurCampus;
