import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const WhatsAppFloatingIcon = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const { isDarkMode } = useTheme();
  
  const handleTooltipToggle = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <>
      <motion.div 
        className="fixed bottom-24 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: 1.5 
        }}
      >
        <button
          onClick={handleTooltipToggle}
          className="relative flex items-center justify-center w-14 h-14 bg-accent-500 rounded-full shadow-lg hover:bg-accent-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} className="text-white" />
          
          {/* Ripple effect */}
          <motion.span
            className="absolute inset-0 rounded-full bg-accent-400"
            initial={{ scale: 0.85, opacity: 0.5 }}
            animate={{ 
              scale: [0.85, 1.2, 0.85],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </button>
      </motion.div>

      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            className={`fixed bottom-24 right-24 z-50 p-5 rounded-lg shadow-xl max-w-xs ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button 
              onClick={handleTooltipToggle}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">Chat with us</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Have questions? Reach out to our admissions team directly via WhatsApp.
              </p>
            </div>
            
            <a 
              href="https://wa.me/1234567890?text=Hello%20Sunrise%20School,%20I%20would%20like%20to%20know%20more%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-4 bg-accent-500 hover:bg-accent-600 text-white rounded-md text-center font-medium transition-colors duration-300"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloatingIcon;
