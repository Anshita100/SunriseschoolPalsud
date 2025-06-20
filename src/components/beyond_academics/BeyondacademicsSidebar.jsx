// src/components/about-us/AboutSidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const aboutLinks = [
  "OVERVIEW",
  "TECHNOLOGY",
  "THE ARTS",
  "SPORTS",
  "STUDENT LEADERSHIP",
  "EXCHANGES & EXPEDITIONS",
  "STUDENT WELLBEING",
  "CAREER & COLLEGE ADVISORY",
  "COMMUNITY SERVICE",
];


export default function AboutSidebar() {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const formatPath = (sub) =>
    `/beyond-academics/${sub.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <aside className="w-full md:w-80 space-y-6">
      {/* Box 1: ABOUT Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`${
          isDarkMode 
            ? 'bg-gray-800/90 shadow-xl shadow-black/20 border border-gray-700/50' 
            : 'bg-white shadow-lg border border-gray-100'
        } rounded-2xl p-6 transition-all duration-300`}
      >
        <h2 className={`text-xl font-bold mb-5 border-b pb-3 ${
          isDarkMode 
            ? 'text-primary-400 border-gray-700' 
            : 'text-primary-700 border-gray-200'
        } tracking-wide`}>BEYOND ACADEMICS</h2>
        <ul className="space-y-1.5">
          {aboutLinks.map((link) => (
            <li key={link}>
              <Link
                to={formatPath(link)}
                className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  location.pathname === formatPath(link)
                    ? isDarkMode
                      ? "bg-primary-900/40 text-primary-300 border-l-2 border-primary-500"
                      : "bg-primary-50 text-primary-700 border-l-2 border-primary-500"
                    : isDarkMode
                      ? "hover:bg-gray-700/70 hover:text-primary-300 text-gray-300 hover:pl-6" 
                      : "hover:bg-gray-100 hover:text-primary-700 text-gray-700 hover:pl-6"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Box 2: School Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`${
          isDarkMode 
            ? 'bg-gray-800/90 shadow-xl shadow-black/20 border border-gray-700/50' 
            : 'bg-gray-50/80 shadow-lg border border-gray-100'
        } rounded-2xl p-6 space-y-5 transition-all duration-300`}
      >
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-primary-400' : 'text-primary-700'
        } tracking-wide`}>Sunrise School</h2>
        <p className={`text-sm font-medium ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        } leading-relaxed`}>
          Flagship Campus of Sunrise Schools. <br />
          Consistently Ranked #1 Top International Day cum Boarding School in Delhi, Gurgaon & India.
        </p>
        <div className={`flex items-start gap-3 text-sm ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        } hover:translate-x-1 transition-transform duration-300 group`}>
          <MapPin className={`w-5 h-5 mt-0.5 ${
            isDarkMode ? 'text-primary-400 group-hover:text-primary-300' : 'text-primary-600 group-hover:text-primary-700'
          } transition-colors duration-300`} />
          <span>93 Shakti Nagar, Airport Road, Indore</span>
        </div>
        <div className={`flex items-center gap-3 text-sm group hover:translate-x-1 transition-transform duration-300`}>
          <Mail className={`w-5 h-5 ${
            isDarkMode ? 'text-primary-400 group-hover:text-primary-300' : 'text-primary-600 group-hover:text-primary-700'
          } transition-colors duration-300`} />
          <a 
            href="mailto:info@sunriseschool.edu.in"
            className={`${
              isDarkMode 
                ? 'text-gray-300 hover:text-primary-400' 
                : 'text-gray-700 hover:text-primary-700'
            } transition-colors duration-300`}
          >
            info@sunriseschool.edu.in
          </a>
        </div>
        <div className={`flex items-center gap-3 text-sm group hover:translate-x-1 transition-transform duration-300`}>
          <Phone className={`w-5 h-5 ${
            isDarkMode ? 'text-primary-400 group-hover:text-primary-300' : 'text-primary-600 group-hover:text-primary-700'
          } transition-colors duration-300`} />
          <a 
            href="tel:+917725076767"
            className={`${
              isDarkMode 
                ? 'text-gray-300 hover:text-primary-400' 
                : 'text-gray-700 hover:text-primary-700'
            } transition-colors duration-300`}
          >
            +91 77250 76767
          </a>
        </div>
      </motion.div>
    </aside>
  );
}
