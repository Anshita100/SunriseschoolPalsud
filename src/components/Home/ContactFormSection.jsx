import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function ContactFormSection() {
  const { isDarkMode } = useTheme();

  // Style for highlight animation
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes highlightPulse {
        0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
        70% { box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
        100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
      }
      .highlight-form {
        animation: highlightPulse 1.5s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className={`contact-form-section w-full ${
      isDarkMode 
        ? 'bg-gradient-to-tr from-gray-900 to-gray-800' 
        : 'bg-gradient-to-tr from-primary-50 to-primary-100'
    } py-16 px-6 md:px-32 transition-colors duration-300`} id="contact-form">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold text-center ${
          isDarkMode ? 'text-white' : 'text-primary-800'
        } mb-4`}
      >
        Drop Us Your Details for a Quick Response
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-center text-sm md:text-base ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        } mb-10`}
      >
        Get in touch — we'll reach out shortly!
      </motion.p>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
          isDarkMode 
            ? 'bg-gray-800 shadow-xl shadow-black/30' 
            : 'bg-white shadow-2xl'
        } p-6 md:p-10 rounded-2xl transition-all duration-300`}
      >
        <input
          type="text"
          placeholder="Parent's Name"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="email"
          placeholder="Email Address"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="text"
          placeholder="Country"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="text"
          placeholder="City"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="text"
          placeholder="Current School"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="text"
          placeholder="Current Grade"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="text"
          placeholder="How did you hear about us?"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="text"
          placeholder="Preferred Mode of Contact"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />
        <input
          type="text"
          placeholder="Any Special Requirements"
          className={`border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'border-primary-300'
          }`}
        />

        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className={`bg-primary-600 text-white font-semibold px-10 py-3 rounded-full hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
              isDarkMode ? 'hover:shadow-primary-900/30' : ''
            }`}
          >
            Submit
          </button>
        </div>
      </motion.form>
    </section>
  );
}
