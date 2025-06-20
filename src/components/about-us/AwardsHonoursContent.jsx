import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';
import AboutPageTemplate from './AboutPageTemplate';
import SectionHeading from './SectionHeading';
import "./AwardsHonours.css";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AboutSidebar from "./AboutSidebar";

const awardsData = {
  2025: [
    { name: "Education World Ranking", img: "/images/award1.jpg" },
    { name: "Best Infrastructure", img: "/images/award1.jpg" },
    { name: "Green Campus Award", img: "/images/award1.jpg" },
  ],
  2024: [
    { name: "Excellence in Leadership", img: "/images/award1.jpg" },
    { name: "Tech-Enabled School", img: "/images/award1.jpg" },
  ],
  2023: [
    { name: "Top International School", img: "/images/award1.jpg" },
    { name: "Student Wellbeing Award", img: "/images/award1.jpg" },
    { name: "Sports Excellence", img: "/images/award2.jpg" },
  ],
  2022: [
    { name: "Best Boarding Experience", img: "/images/award2.jpg" },
    { name: "Innovative Teaching Award", img: "/images/award2.jpg" },
  ],
  2021: [
    { name: "Eco Friendly Campus", img: "/images/award2.jpg" },
  ],
  2020: [
    { name: "Best Co-Curricular Activities", img: "/images/award2.jpg" },
  ],
};

const AwardsHonoursContent = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const years = Object.keys(awardsData).sort((a, b) => b - a);
  const { isDarkMode } = useTheme();

  return (
    <AboutPageTemplate
      title="Awards & Honours"
      subtitle="Celebrating Our Achievements Year by Year"
      bannerImage="/images/awardsbanner.jpg"
    >
      <SectionHeading
        title="Awards & Honours"
        subtitle="Celebrating Our Achievements Year by Year"
      />

      {/* Scrollable Year Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto flex space-x-4 mb-10 pb-2 awards-scroll"
      >
        {years.map((year) => (
          <motion.button
            key={year}
            onClick={() => setSelectedYear(parseInt(year))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`min-w-[100px] px-6 py-2.5 rounded-full border font-semibold transition-all ${
              selectedYear === parseInt(year)
                ? isDarkMode
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-primary-600 text-white border-primary-600"
                : isDarkMode
                  ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700/70"
                  : "bg-white border-primary-200 text-gray-600 hover:bg-primary-50"
            }`}
          >
            {year}
          </motion.button>
        ))}
      </motion.div>

      {/* Awards Grid with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {awardsData[selectedYear].map((award, index) => (
            <motion.div
              key={`${selectedYear}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className={`rounded-lg shadow-md p-5 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-100'
              } transition-all duration-300`}
            >
              <div className="h-48 rounded-md overflow-hidden mb-4">
                <img 
                  src={award.img} 
                  alt={award.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <h4 className={`text-lg font-semibold text-center ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>{award.name}</h4>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Trophy Wall Section */}
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
        <SectionHeading
          title="Our Trophy Wall"
          subtitle="A Legacy of Excellence"
          alignment="center"
          withAccent={true}
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "50+", label: "National Awards" },
            { stat: "25+", label: "International Recognition" },
            { stat: "10", label: "Years of Excellence" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>{item.stat}</div>
              <div className={`text-lg ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>{item.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-center mt-8 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Our awards and recognitions reflect our unwavering commitment to educational excellence, innovation, and holistic development of students. Each accolade represents the collective effort of our dedicated staff, talented students, and supportive parents.
        </motion.p>
      </motion.div>
    </AboutPageTemplate>
  );
};

export default AwardsHonoursContent;
