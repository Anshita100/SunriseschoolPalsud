import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const menuItems = [
  {
    name: "HOME",
    sub: [],
  },
  {
    name: "ABOUT",
    sub: [
      "OUR JOURNEY",
      "WHAT SETS US APART",
      "NATURE'S OWN SCHOOL",
      "VISION AND MISSION",
      "BOARD OF GOVERNORS",
      "SCHOOL DIRECTOR",
      "OUR CAMPUS",
      "GREEN PHILOSOPHY",
      "Academic Achievements",
      "Accreditations",
      "LEADERSHIP & FACULTY"
    ],
  },
  {
    name: "BEYOND ACADEMICS",
    sub: [
      "OVERVIEW",
      "TECHNOLOGY",
      "THE ARTS",
      "SPORTS",
      "STUDENT LEADERSHIP",
      "EXCHANGES & EXPEDITIONS",
      "STUDENT WELLBEING",
      "CAREER & COLLEGE ADVISORY",
      "COMMUNITY SERVICE",
      
    ],
  },
  {
    name: "ACADEMICS",
    sub: [
      "OUR PEDAGOGY",
      "THE IB CURRICULUM",
      "LEARNING SUPPORT",
      "LIBRARY",
    ],
  },
  {
    name: "BOARDING",
    sub: [
      "THE BOARDING EXPERIENCE",
      "DEAN OF RESIDENCES",
      "BOARDING FAQ",
      "CUISINE",
      
    ],
  },
  {
    name: "ADMISSION",
    sub: [
      
      "SCEDULE A TOUR",
      "ADMISSION PROCESS",
      "FEE STRUCTURE",
      "SCHOLORSHIP",
      "ADMISSION FAQ",
      "TRANSPORT FACILITY",
      
    ],
  },
  {
    name: "NEWS & EVENTS",
    sub: [
      "TRENDING NEWS ",
      "SUNRISE LEARNING FEST",
      "PARENT TESTIMONIALS",
      
    ],
  },
  { name: "MY SUNRISE", sub: ["STUDENTS", "PARENTS", "FACULTY"] },
  { name: "CONTACT US", sub: ["CONTACT US", "CAREERS AT SUNRISE"] },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const isHomePage = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const formatPath = (main, sub) => {
    return `/${main.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`;
  };

  const scrollToContactForm = () => {
    if (!isHomePage) {
      // If not on homepage, navigate to home and then scroll
      window.location.href = "/#contact-form";
      return;
    }
    
    const contactForm = document.querySelector(".contact-form-section");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
      
      // Add focus/highlight effect
      setTimeout(() => {
        contactForm.classList.add("highlight-form");
        setTimeout(() => {
          contactForm.classList.remove("highlight-form");
        }, 1500);
      }, 800);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? `${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md` 
          : isHomePage
            ? `bg-transparent ${isDarkMode ? 'text-white' : 'text-gray-900'} backdrop-blur-sm`
            : `${isDarkMode ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <motion.div 
          className="flex items-center gap-3 min-w-max"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/images/my.jpg" 
            alt="Logo" 
            className={`h-10 w-auto ${isDarkMode || (!scrolled && isHomePage && isDarkMode) ? 'brightness-110' : 'drop-shadow-lg'}`} 
          />
          <span className={`text-lg font-bold tracking-wide whitespace-nowrap ${
            !scrolled && isHomePage && isDarkMode ? 'text-white drop-shadow-md' : ''
          }`}>Sunrise School</span>
        </motion.div>

        <ul className="hidden md:flex items-center text-[10px] lg:text-xs font-medium">
          {menuItems.map((item, index) => (
            <motion.li 
              className="relative group whitespace-nowrap px-[2px] lg:px-1" 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={item.name === "HOME" ? "/" : `/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`cursor-pointer px-1 py-1 rounded-md transition duration-300 ease-in-out whitespace-nowrap ${
                  location.pathname === "/" && item.name === "HOME" || 
                  (item.name !== "HOME" && location.pathname.includes(item.name.toLowerCase().replace(/\s+/g, "-")))
                    ? `${isDarkMode || (!scrolled && isHomePage && isDarkMode) ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-800'}`
                    : `${!scrolled && isHomePage && isDarkMode ? 'text-white hover:bg-white/20' : !scrolled && isHomePage ? 'text-gray-900 hover:bg-gray-100/70' : `hover:${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:text-primary-600`}`
                }`}
              >
                {item.name}
              </Link>

              {item.sub.length > 0 && (
                <div className={`absolute top-full left-0 mt-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-50 min-w-[200px] scale-95 group-hover:scale-100 origin-top transform overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white' 
                    : 'bg-gradient-to-br from-white to-gray-100 text-black'
                }`}>
                  <div className={`absolute -top-2 left-6 w-4 h-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rotate-45 transform z-10`}></div>
                  <ul className="relative z-20">
                    {item.sub.map((sub, idx) => (
                      <li key={idx} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} last:border-b-0`}>
                        {typeof sub === 'string' ? (
                          <Link
                            to={formatPath(item.name, sub)}
                            className={`block px-5 py-3 text-sm tracking-wide transition-all duration-300 ease-in-out ${
                              isDarkMode 
                                ? 'hover:bg-primary-900 hover:text-primary-200 hover:pl-7' 
                                : 'hover:bg-primary-600 hover:text-white hover:pl-7'
                            }`}
                          >
                            {sub}
                          </Link>
                        ) : (
                          <details className="group">
                            <summary className={`cursor-pointer px-5 py-3 text-sm tracking-wide ${
                              isDarkMode 
                                ? 'hover:bg-primary-900 hover:text-primary-200' 
                                : 'hover:bg-primary-100 hover:text-primary-800'
                            }`}>
                              {sub.name}
                            </summary>
                            <ul className={`pl-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                              {sub.sub.map((s, i) => (
                                <li key={i}>
                                  <Link
                                    to={formatPath(item.name, s)}
                                    className={`block py-2 text-sm ${isDarkMode ? 'hover:text-primary-400' : 'hover:text-primary-600'}`}
                                  >
                                    {s}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.li>
          ))}

          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="ml-2"
          >
            <Search className={`h-5 w-5 cursor-pointer ${
              !scrolled && isHomePage && isDarkMode
                ? 'text-white hover:text-gray-200' 
                : !scrolled && isHomePage
                ? 'text-gray-800 hover:text-gray-900'
                : isDarkMode ? 'hover:text-primary-400' : 'hover:text-primary-500'
            }`} />
          </motion.li>
          
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="ml-2"
          >
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${
                !scrolled && isHomePage && isDarkMode
                  ? 'bg-white/20 text-white hover:bg-white/30'
                  : !scrolled && isHomePage
                  ? 'bg-gray-200/70 text-gray-800 hover:bg-gray-300/70'
                  : isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </motion.li>
          
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="ml-2"
          >
            <button 
              onClick={scrollToContactForm}
              className={`${
              !scrolled && isHomePage
                ? 'bg-white text-primary-600 hover:bg-gray-100'
                : isDarkMode 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              } font-semibold px-4 py-1 rounded-md transition shadow-md`}>
              Apply Now
            </button>
          </motion.li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className={`p-1 rounded-full ${
              !scrolled && isHomePage && isDarkMode
                ? 'bg-white/20 text-white'
                : !scrolled && isHomePage
                ? 'bg-gray-200/70 text-gray-800'
                : isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className={`p-1 rounded ${
              !scrolled && isHomePage && isDarkMode
                ? 'text-white'
                : !scrolled && isHomePage
                ? 'text-gray-900'
                : ''
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${
              isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
          >
            <div className="px-4 py-2 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item, idx) => (
                <div key={idx} className="py-2">
                  <Link
                    to={item.name === "HOME" ? "/" : `/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block py-2 px-3 rounded-md font-medium ${
                      location.pathname === "/" && item.name === "HOME" || 
                      (item.name !== "HOME" && location.pathname.includes(item.name.toLowerCase().replace(/\s+/g, "-")))
                        ? `${isDarkMode ? 'bg-primary-800 text-primary-100' : 'bg-primary-100 text-primary-800'}`
                        : ''
                    }`}
                    onClick={() => item.sub.length === 0 && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {item.sub.length > 0 && (
                    <div className={`pl-4 mt-1 ${isDarkMode ? 'border-l border-gray-700' : 'border-l border-gray-200'}`}>
                      {item.sub.map((sub, i) => (
                        <Link
                          key={i}
                          to={formatPath(item.name, sub)}
                          className={`block py-2 px-3 text-sm ${
                            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={scrollToContactForm}
                  className={`${
                  isDarkMode 
                    ? 'bg-primary-600 hover:bg-primary-700' 
                    : 'bg-primary-600 hover:bg-primary-700'
                  } text-white font-semibold px-6 py-2 rounded-md w-full`}>
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
