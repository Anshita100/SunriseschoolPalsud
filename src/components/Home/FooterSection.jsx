import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

const FooterSection = () => {
  const { isDarkMode } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} pt-16 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection animation="fade-up" delay={0.1} className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/my.jpg" 
                alt="Sunrise School Logo" 
                className={`h-12 w-auto ${isDarkMode ? 'brightness-110' : 'drop-shadow-md'}`} 
              />
              <span className="text-xl font-bold">Sunrise School</span>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-4`}>
              Empowering young minds to become global citizens through holistic education and values-based learning.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${isDarkMode ? 'text-white hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'} transition-colors`}>
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={`${isDarkMode ? 'text-white hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'} transition-colors`}>
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${isDarkMode ? 'text-white hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'} transition-colors`}>
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${isDarkMode ? 'text-white hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'} transition-colors`}>
                <Linkedin size={20} />
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={0.2} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>
                <Link to="/about/our-journey" className="hover:underline hover:text-primary-600 transition-colors">Our Journey</Link>
              </li>
              <li>
                <Link to="/academics/the-ib-curriculum" className="hover:underline hover:text-primary-600 transition-colors">IB Curriculum</Link>
              </li>
              <li>
                <Link to="/admission/admission-process" className="hover:underline hover:text-primary-600 transition-colors">Admission Process</Link>
              </li>
              <li>
                <Link to="/about/our-campus" className="hover:underline hover:text-primary-600 transition-colors">Our Campus</Link>
              </li>
              <li>
                <Link to="/news-&-events/trending-news-" className="hover:underline hover:text-primary-600 transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/about/accreditations" className="hover:underline hover:text-primary-600 transition-colors">Accreditations</Link>
              </li>
            </ul>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={0.3} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Education Avenue, Knowledge City, State - 100001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:underline hover:text-primary-600 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@sunriseschool.edu" className="hover:underline hover:text-primary-600 transition-colors">info@sunriseschool.edu</a>
              </li>
            </ul>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={0.4} className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="mt-4 space-y-2">
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email address" 
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                  } border`}
                  required
                />
              </div>
              <button 
                type="submit" 
                className={`w-full px-4 py-2 rounded-md font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                Subscribe
              </button>
            </form>
          </AnimatedSection>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} Sunrise School. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy-policy" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Terms of Service
            </Link>
            <Link to="/sitemap" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${
          isDarkMode 
            ? 'bg-primary-800 text-white hover:bg-primary-700' 
            : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default FooterSection;
