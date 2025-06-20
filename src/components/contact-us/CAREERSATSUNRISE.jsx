import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import ContactusSidebar from "./ContactusSidebar";

const VisionMissionSection = () => {
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
    <div className={`pt-16 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      {/* Top Full-Width Image with overlay */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="/images/visionandmission.jpg"
          alt="Vision and Mission"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/60' : 'bg-black/40'}`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
          >
            Vision & Mission
          </motion.h1>
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
          className="md:w-1/4"
        >
          <ContactusSidebar/>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="md:w-3/4"
        >
          <div className="max-w-4xl">
            <motion.h2 
              variants={fadeIn}
              className={`text-3xl font-bold ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              } mb-4 transition-colors duration-300`}
            >
              Working with Sunrise
            </motion.h2>

            <motion.p 
              variants={fadeIn}
              className={`text-lg italic mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700' 
              } transition-colors duration-300`}
            >
              Nurturing Global Citizens for a Dynamic Future
            </motion.p>

            {/* Vision Section */}
            <motion.div 
              variants={fadeIn}
              className={`mb-12 p-8 rounded-xl shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
              } transition-colors duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-primary-900/50' : 'bg-primary-50'
                } mr-4 transition-colors duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } transition-colors duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-600'
                } transition-colors duration-300`}>Vision</h3>
              </div>
              
              <p className={`text-base md:text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } transition-colors duration-300`}>
                Pathways aims to build and nurture a community of thinking and compassionate
                global citizens, who are committed to living with responsibility, learning and
                innovating with enthusiasm, and balancing a strong work ethos with a sense of play.
              </p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              variants={fadeIn}
              className={`p-8 rounded-xl shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
              } transition-colors duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-primary-900/50' : 'bg-primary-50'
                } mr-4 transition-colors duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } transition-colors duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-600'
                } transition-colors duration-300`}>Mission</h3>
              </div>
              
              <ul className={`space-y-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } transition-colors duration-300`}>
                {[
                  "Imbibe universal values of oneness",
                  "Create & nurture a holistic community through multiple paths and approaches to learning",
                  "Acquire habits of curiosity, reflection, adaptability, resilience and self-discipline",
                  "Commit to promoting and safeguarding a healthy, sustainable and aesthetic environment",
                  "Maintain respect for diversity, equality and equity"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                    className="flex items-center"
                  >
                    <div className={`mr-3 w-5 h-5 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-primary-700' : 'bg-primary-100'
                    } transition-colors duration-300`}>
                      <div className={`w-2 h-2 rounded-full ${
                        isDarkMode ? 'bg-primary-400' : 'bg-primary-600'
                      } transition-colors duration-300`}></div>
                    </div>
                    <span className="text-base md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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

export default VisionMissionSection;
