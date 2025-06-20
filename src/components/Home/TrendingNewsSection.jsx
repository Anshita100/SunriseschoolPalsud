import React, { useState } from "react";
import { FaYoutube, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ScrollReveal from "../../utils/ScrollReveal";

export default function TrendingNewsSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <section className={`w-full py-20 px-4 md:px-8 lg:px-16 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
            isDarkMode ? 'text-primary-400' : 'text-primary-700'
          }`}>
            Trending News & Events
          </h2>
          <p className={`text-center max-w-3xl mx-auto mb-12 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Stay updated with the latest happenings at Sunrise School
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Column 1: Video Card */}
          <ScrollReveal variant="fadeIn" direction="left">
            <motion.div
              className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-lg ${
                isDarkMode ? 'shadow-gray-800' : 'shadow-gray-200'
              }`}
              onClick={() => setPlayVideo(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {!playVideo ? (
                <>
                  <img
                    src="/images/education.jpg"
                    alt="Future School"
                    className="w-full h-[250px] md:h-[280px] object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex flex-col justify-center items-center text-white px-4 text-center">
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaYoutube className="text-5xl text-red-500" />
                    </motion.div>
                    <p className="text-xl font-bold mt-4 mb-2">The Future School of India</p>
                    <span className="text-sm font-medium px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full">Watch Now</span>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-[250px] md:h-[280px]"
                  src="https://www.youtube.com/embed/V6eTFSU_tS0?autoplay=1&mute=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          </ScrollReveal>

          {/* Column 2: Award Image */}
          <ScrollReveal variant="fadeIn" delay={0.2}>
            <motion.div 
              className={`rounded-xl overflow-hidden shadow-lg ${
                isDarkMode ? 'shadow-gray-800' : 'shadow-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/images/awardgirl.jpg"
                alt="Award Girls"
                className="w-full h-[250px] md:h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Academic Excellence Awards</h3>
                <p className="text-white/80 text-sm mt-2">Celebrating our top achievers of the year</p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Column 3: Info Cards */}
          <ScrollReveal variant="fadeIn" direction="right" delay={0.3}>
            <div className="flex flex-col gap-4">
              {[
                {
                  img: "/images/image-5.jpg",
                  title: "Inter House Competition",
                  desc: "Students displayed exceptional teamwork and enthusiasm."
                },
                {
                  img: "/images/image-6.jpg",
                  title: "Creative Workshop",
                  desc: "Hands-on projects in art, science, and innovation."
                },
                {
                  img: "/images/image-7.jpg",
                  title: "Dance Competition",
                  desc: "Colorful performances celebrating cultural diversity."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`flex gap-4 p-4 rounded-xl shadow-md ${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-20 h-20 rounded-lg object-cover shadow-sm" 
                  />
                  <div>
                    <h4 className={`font-semibold text-sm md:text-base ${
                      isDarkMode ? 'text-primary-400' : 'text-primary-700'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs md:text-sm mt-1 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* View All Button */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <motion.a 
              href="/news-events/trending"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium ${
                isDarkMode 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              } transition-all duration-300 shadow-md hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All News & Events
              <FaArrowRight className="text-sm" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
