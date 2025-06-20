import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AboutSidebar from "./AboutSidebar";

export default function OurJourney() {
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
      {/* Top Banner Image with standardized container */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="/images/ourjourney.png"
          alt="Our Journey"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/50' : 'bg-black/30'}`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
          >
            Our Journey
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
          <AboutSidebar />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="md:w-3/4"
        >
          <div className={`max-w-4xl ${
            isDarkMode ? 'text-gray-200' : 'text-gray-800'
          } transition-colors duration-300`}>
            <motion.h2 
              variants={fadeIn}
              className={`text-3xl font-bold ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              } mb-4 transition-colors duration-300`}
            >
              The Founders & The Journey
            </motion.h2>
            
            <motion.h3 
              variants={fadeIn}
              className={`text-xl font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } mb-6 transition-colors duration-300`}
            >
              The Journey of Sunrise School
            </motion.h3>
            
            <motion.p 
              variants={fadeIn}
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } text-lg mb-8 leading-relaxed transition-colors duration-300`}
            >
              At Sunrise School, our journey began with a vision to create an educational institution that nurtures future leaders equipped with both knowledge and character.
              From our humble beginnings to becoming a premier educational institution, we have maintained our commitment to excellence and holistic development.
            </motion.p>

            {/* Standardized Video Container */}
            <motion.div 
              variants={fadeIn}
              className="w-full h-64 md:h-80 lg:h-96 mb-10 rounded-xl overflow-hidden shadow-xl"
            >
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Our Journey at Sunrise School"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Timeline Section */}
            <div className="space-y-8 mb-10">
              <motion.div 
                variants={fadeIn}
                className={`border-l-4 ${
                  isDarkMode ? 'border-primary-700 text-gray-300' : 'border-primary-200 text-gray-700'
                } pl-6 space-y-6 transition-colors duration-300`}
              >
                <div className="relative">
                  <div className={`absolute -left-8 ${
                    isDarkMode ? 'bg-primary-600' : 'bg-primary-500'
                  } w-4 h-4 rounded-full`}></div>
                  <h4 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } mb-2 transition-colors duration-300`}>1995: Our Founding</h4>
                  <p className="leading-relaxed">
                    Sunrise School was established with a mission to provide quality education that balances academic excellence with character development. The founders envisioned a school where students would grow intellectually, emotionally, and ethically.
                  </p>
                </div>
                
                <div className="relative">
                  <div className={`absolute -left-8 ${
                    isDarkMode ? 'bg-primary-600' : 'bg-primary-500'
                  } w-4 h-4 rounded-full`}></div>
                  <h4 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } mb-2 transition-colors duration-300`}>2005: Expansion & Growth</h4>
                  <p className="leading-relaxed">
                    A decade after our establishment, we expanded our campus and introduced innovative educational programs. This period marked significant growth in our student population and academic offerings.
                  </p>
                </div>
                
                <div className="relative">
                  <div className={`absolute -left-8 ${
                    isDarkMode ? 'bg-primary-600' : 'bg-primary-500'
                  } w-4 h-4 rounded-full`}></div>
                  <h4 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } mb-2 transition-colors duration-300`}>2015: International Recognition</h4>
                  <p className="leading-relaxed">
                    As we continued to excel in providing world-class education, Sunrise School received international accreditation and recognition for our commitment to excellence and innovative teaching methodologies.
                  </p>
                </div>
                
                <div className="relative">
                  <div className={`absolute -left-8 ${
                    isDarkMode ? 'bg-primary-600' : 'bg-primary-500'
                  } w-4 h-4 rounded-full`}></div>
                  <h4 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } mb-2 transition-colors duration-300`}>Present: Leading the Future</h4>
                  <p className="leading-relaxed">
                    Today, we continue to lead in educational innovation while staying true to our founding principles. Our focus remains on preparing students for future challenges through a balanced approach to learning and development.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image Gallery with Standardized Sizing */}
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            >
              <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl shadow-md">
                <img 
                  src="/images/my.jpg" 
                  alt="Sunrise School Early Days" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl shadow-md">
                <img 
                  src="/images/my.jpg" 
                  alt="Sunrise School Campus Today" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Founder's Message */}
            <motion.div 
              variants={fadeIn}
              className={`${
                isDarkMode 
                  ? 'bg-gray-800/50 border border-gray-700' 
                  : 'bg-gray-50 border border-gray-200'
              } p-6 md:p-8 rounded-xl shadow-lg mb-10 transition-colors duration-300`}
            >
              <blockquote>
                <p className={`text-lg italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } mb-4 transition-colors duration-300`}>
                  "Our journey at Sunrise School has been guided by a singular vision: to nurture young minds that will lead with wisdom, compassion, and integrity. Every challenge has been a stepping stone towards greater achievement and every success a reminder of our responsibility to continue striving for excellence."
                </p>
                <footer className="font-medium">
                  <span className={`${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } transition-colors duration-300`}>— Founder, Sunrise School</span>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Other Sections */}
      <InfoIconsSection/>
      <ContactFormSection/>
     
      <WhatsAppFloatingIcon/>
    </div>
  );
} 
