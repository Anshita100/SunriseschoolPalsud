import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ScrollToTopButton = ({ 
  showAtPosition = 300, // Show button after scrolling this many pixels
  right = 8,
  bottom = 8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAtPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAtPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed p-3 rounded-full shadow-lg z-50 ${
            isDarkMode 
              ? 'bg-primary-800 text-white hover:bg-primary-700' 
              : 'bg-primary-600 text-white hover:bg-primary-500'
          } focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
          style={{ bottom: `${bottom}rem`, right: `${right}rem` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton; 