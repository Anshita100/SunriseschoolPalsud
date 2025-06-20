import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ScrollReveal from "../../utils/ScrollReveal";

export default function AboutSchoolSection() {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="about"
      className={`w-full py-20 px-6 md:px-10 lg:px-20 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Text */}
          <ScrollReveal 
            className="lg:w-1/2 text-center lg:text-left"
            variant="fadeIn"
            direction="left"
            once={true}
          >
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              isDarkMode ? 'bg-primary-900 text-primary-300' : 'bg-primary-100 text-primary-800'
            }`}>
              Our Story
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Nurturing Excellence Since 1995
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Sunrise School is a nurturing environment where students are encouraged to explore
              their full potential. With a commitment to academic excellence, character
              development, and innovation, we empower young minds to shape a brighter future.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our holistic approach to education integrates rigorous academics with arts, sports, 
              technology, and community service, preparing students to become responsible global citizens.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="/about/our-journey" 
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  isDarkMode 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                Our Journey
              </a>
              <a 
                href="/about/what-sets-us-apart" 
                className={`px-6 py-2 rounded-md font-medium border transition-all ${
                  isDarkMode 
                    ? 'border-gray-600 hover:bg-gray-800 text-white' 
                    : 'border-gray-300 hover:bg-gray-100 text-gray-900'
                }`}
              >
                What Sets Us Apart
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Video with stats */}
          <ScrollReveal 
            className="lg:w-1/2 mt-10 lg:mt-0"
            variant="fadeIn"
            direction="right"
            delay={0.3}
            once={true}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <video
                className="w-full h-auto rounded-xl"
                src="/videos/clip1.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6`}>
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-center">
                    <p className="text-white text-3xl font-bold">25+</p>
                    <p className="text-white/80 text-sm">Years of Excellence</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-3xl font-bold">100%</p>
                    <p className="text-white/80 text-sm">University Placement</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-3xl font-bold">50+</p>
                    <p className="text-white/80 text-sm">Activities & Clubs</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
