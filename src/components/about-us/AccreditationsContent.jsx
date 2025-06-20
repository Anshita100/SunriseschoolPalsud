import React from "react";
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AboutPageTemplate from './AboutPageTemplate';
import SectionHeading from './SectionHeading';
import StandardizedImage from '../../utils/StandardizedImage';
import AboutSidebar from "./AboutSidebar"; // make sure this path is correct
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';

const accreditations = [
  {
    logo: "/images/logo1.jpg",
    title: "CBSE Affiliation",
    subtitle: "Central Board of Secondary Education",
    description:
      "Our school is affiliated with CBSE, ensuring a curriculum that balances academic rigor with creative and critical thinking. We follow all CBSE norms for examination, teacher training, and holistic development.",
  },
  {
    logo: "/images/logo1.jpg",
    title: "ISO 9001 Certified",
    subtitle: "Quality Management System",
    description:
      "We are ISO 9001 certified, reflecting our commitment to structured administration, quality teaching standards, and continuous improvement in all operations across the school.",
  },
  {
    logo: "/images/logo1.jpg",
    title: "British Council Partner",
    subtitle: "Global Cultural Exchange",
    description:
      "As a partner with the British Council, we offer our students international exposure through language immersion programs, creative arts, and cross-cultural learning opportunities.",
  },
];

const AccreditationsContent = () => {
  const { isDarkMode } = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <AboutPageTemplate
      title="Affiliations & Accreditations"
      subtitle="Recognized by Leading Educational Boards & Quality Systems"
      bannerImage="/images/accreditation.jpg"
    >
      <SectionHeading
        title="Affiliations & Accreditations"
        subtitle="Recognized by Leading Educational Boards & Quality Systems"
      />

      {/* Accreditation Blocks */}
      {accreditations.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`flex flex-col md:flex-row items-center gap-8 mb-12 pb-12 ${
            index < accreditations.length - 1 ? `border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}` : ''
          }`}
        >
          {/* Logo */}
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`p-6 rounded-xl shadow-lg ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
            }`}>
              <img
                src={item.logo}
                alt={item.title}
                className="w-64 h-auto object-contain"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="w-full md:w-2/3">
            <motion.h3 
              className={`text-2xl font-bold mb-1 ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.h3>
            
            <motion.h4 
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-primary-300' : 'text-primary-500'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.subtitle}
            </motion.h4>
            
            <motion.p 
              className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
      
      {/* Additional Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mt-10 p-6 md:p-8 rounded-xl shadow-lg ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
        }`}
      >
        <SectionHeading
          title="Benefits of Our Accreditations"
          alignment="center"
          withAccent={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            "Recognition of educational standard and excellence",
            "Access to global exchange and partnership opportunities",
            "Structured quality management processes",
            "Enhanced teacher professional development",
            "Regular external assessment and improvement",
            "Transparent and standardized evaluation systems"
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-primary-900/50 text-primary-400' : 'bg-primary-100 text-primary-600'
              }`}>
                <span className="font-bold">{index + 1}</span>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AboutPageTemplate>
  );
};

export default AccreditationsContent;
