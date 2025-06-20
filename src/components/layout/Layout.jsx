import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Home/Navbar';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import ScrollToTopButton from '../shared/ScrollToTopButton';
import { useTheme } from '../../context/ThemeContext';
import SEO from '../../utils/SEO';
import Preloader from '../shared/Preloader';
import CookieConsent from '../shared/CookieConsent';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -15,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};

const Layout = ({ children }) => {
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate preloading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Sunrise School - Excellence in Education';
    
    // Convert path to title format
    const pathSegments = path.split('/').filter(segment => segment);
    if (pathSegments.length > 0) {
      const lastSegment = pathSegments[pathSegments.length - 1];
      return `${lastSegment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Sunrise School`;
    }
    
    return 'Sunrise School - Excellence in Education';
  };

  // Get meta description based on current route
  const getMetaDescription = () => {
    const path = location.pathname;
    if (path === '/') {
      return 'Sunrise School offers world-class education with a holistic approach to learning. Discover our programs, campus, and admission process.';
    }
    
    if (path.includes('about')) {
      return 'Learn about Sunrise School\'s history, mission, values, and what makes us a premier educational institution.';
    }
    
    if (path.includes('academics')) {
      return 'Explore our rigorous academic programs, IB curriculum, and learning support services at Sunrise School.';
    }
    
    if (path.includes('admission')) {
      return 'Find information about the admission process, fees, scholarships, and how to apply to Sunrise School.';
    }
    
    return 'Sunrise School - Empowering young minds to become global citizens through holistic education and values-based learning.';
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <SEO 
        title={getPageTitle()} 
        description={getMetaDescription()}
      />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="flex-grow pt-16 overflow-x-hidden"
        >
          <div className="max-w-screen-2xl mx-auto">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
      <FooterSection />
      <WhatsAppFloatingIcon />
      <ScrollToTopButton />
      <CookieConsent />
    </div>
  );
};

export default Layout; 