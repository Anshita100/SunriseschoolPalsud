import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Preloader = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scroll when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="flex flex-col items-center">
        {/* Logo animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src="/images/my.jpg" 
            alt="Sunrise School Logo" 
            className="h-24 w-auto rounded-full shadow-lg"
          />
        </motion.div>
        
        {/* School name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Sunrise School
        </motion.h1>
        
        {/* Loading animation */}
        <motion.div 
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-primary-500' : 'bg-primary-600'}`}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.1,
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`mt-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          Loading amazing experiences...
        </motion.p>
      </div>
    </div>
  );
};

export default Preloader; 