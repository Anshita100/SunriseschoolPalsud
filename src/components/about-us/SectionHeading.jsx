import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

/**
 * SectionHeading - Standardized section heading component with dark mode support
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The main title
 * @param {string} props.subtitle - Optional subtitle
 * @param {boolean} props.centered - Whether to center the text (default: false)
 * @param {string} props.className - Additional custom classes
 * @returns {React.Component} Section heading component
 */
const SectionHeading = ({ title, subtitle, centered = false, className = '' }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold ${
        isDarkMode ? 'text-primary-400' : 'text-primary-700'
      } transition-colors duration-300 mb-3`}>
        {title}
      </h2>
      
      {subtitle && (
        <>
          <div className={`h-1 w-16 ${centered ? 'mx-auto' : ''} mb-4 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-primary-700 to-primary-500' 
              : 'bg-gradient-to-r from-primary-600 to-primary-400'
          } transition-colors duration-300`}></div>
          <p className={`text-lg md:text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } transition-colors duration-300`}>
            {subtitle}
          </p>
        </>
      )}
    </motion.div>
  );
};

export default SectionHeading;

 