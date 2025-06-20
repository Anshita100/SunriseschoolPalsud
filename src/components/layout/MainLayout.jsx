import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTopButton from '../shared/ScrollToTopButton';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main 
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-16"
        >
          {/* Page header styling - adds a subtle blue gradient to all pages */}
          {!pathname.includes('/Home') && pathname !== '/' && (
            <div className="w-full h-16 bg-gradient-to-r from-primary-100 to-primary-50 shadow-sm mb-4"></div>
          )}
          
          <div className="relative">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
      
      <FooterSection />
      <WhatsAppFloatingIcon />
      <ScrollToTopButton />
    </div>
  );
} 