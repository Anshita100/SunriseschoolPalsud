import React, { useEffect } from 'react';
import VideoDisplay from '../components/Home/VideoDisplay';
import HighlightGridSection from '../components/Home/HighlightGridSection';
import BannerFeatureSection from '../components/Home/BannerFeatureSection';
import TrendingNewsSection from '../components/Home/TrendingNewsSection';
import AlumniCarouselSection from '../components/Home/AlumniCarouselSection';
import ContactFormSection from '../components/Home/ContactFormSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Home = () => {
  const { isDarkMode } = useTheme();

  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Original video display after navbar */}
      <VideoDisplay />
      
      {/* Empty spacer section - can be removed if not needed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`py-16 ${
          isDarkMode ? 'bg-gradient-to-r from-primary-900/30 to-secondary-900/30' : 'bg-gradient-to-r from-primary-50 to-secondary-50'
        }`}
      >
        
      </motion.div>
      
      <HighlightGridSection />
      <TestimonialsSection />
      <BannerFeatureSection />
      <TrendingNewsSection />
      <AlumniCarouselSection />
      <ContactFormSection />
    </>
  );
};

export default Home;

