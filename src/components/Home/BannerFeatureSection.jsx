import React from "react";
import { FaLeaf, FaMapMarkerAlt, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function BannerFeatureSection() {
  const { isDarkMode } = useTheme();

  const features = [
    { 
      icon: <FaLeaf className="text-green-400" />, 
      text: "Purest Air Quality" 
    },
    { 
      icon: <FaMapMarkerAlt className="text-yellow-400" />, 
      text: "Well Centered to the City" 
    },
    { 
      icon: <FaChalkboardTeacher className="text-blue-400" />, 
      text: "Outdoor Learning" 
    }
  ];

  return (
    <section className="relative w-full h-auto py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/banner.jpg"
          alt="Nature Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay with adjustable opacity for dark/light mode */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-black/70 backdrop-blur-[1px]' 
            : 'bg-black/40'
        }`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col md:flex-row items-center justify-between gap-8 py-4">
        {/* Left: Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">
            Nature's Own School
          </h3>
          <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-blue-400 mt-3 mx-auto md:mx-0"></div>
        </motion.div>

        {/* Middle: Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-1/3 text-center"
        >
          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
            A school nestled in the lap of nature, providing a calm and inspiring environment
            for holistic education.
          </p>
        </motion.div>

        {/* Right: Features */}
        <motion.ul 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/3 flex flex-col gap-3 md:gap-4"
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 justify-center md:justify-start group"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                {feature.icon}
              </span>
              <span className="text-white text-sm md:text-base tracking-wide group-hover:text-white/90 transition-colors">
                {feature.text}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
