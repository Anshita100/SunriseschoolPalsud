import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import StandardizedImage from '../../utils/StandardizedImage';
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AboutSidebar from "./AboutSidebar";

/**
 * AboutPageTemplate - A reusable template for all about pages with dark mode support
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the page
 * @param {string} props.subtitle - Optional subtitle
 * @param {string} props.bannerImage - Path to the banner image
 * @param {React.ReactNode} props.children - Main content to be rendered within the template
 * @returns {React.Component} About page template
 */
const AboutPageTemplate = ({ 
  title, 
  subtitle = '', 
  bannerImage, 
  children 
}) => {
  const { isDarkMode } = useTheme();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={`pt-16 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* Top Banner Image with overlay */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-black/70 to-black/50' : 'bg-gradient-to-b from-black/50 to-black/30'}`}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl mt-4 text-white/90 max-w-2xl drop-shadow-md font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Content Area with Sidebar */}
      <div className={`flex flex-col md:flex-row gap-8 px-4 md:px-10 lg:px-16 py-10 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      } transition-colors duration-300`}>
        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 lg:w-1/4 md:sticky md:top-20 md:self-start"
        >
          <AboutSidebar />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="md:w-2/3 lg:w-3/4"
        >
          <div className={`max-w-5xl space-y-6 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-800'
          } transition-colors duration-300`}>
            {children}
          </div>
        </motion.div>
      </div>

      {/* Other Sections */}
      <InfoIconsSection/>
      <ContactFormSection/>
      <FooterSection/>
      <WhatsAppFloatingIcon/>
     
    </div>
  );
};

export default AboutPageTemplate; 