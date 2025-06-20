import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { ArrowRight } from "lucide-react";

const videos = [
  "/videos/clip1.mp4",
  "/videos/clip2.mp4",
];

export default function VideoSection() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const video = videoRef.current;
    
    const handleEnded = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };
    
    const handleCanPlay = () => {
      setIsLoading(false);
    };
    
    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", handleCanPlay);
    
    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [videos.length]);

  useEffect(() => {
    if (videoRef.current) {
      setIsLoading(true);
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        setIsLoading(false);
      });
    }
  }, [currentVideoIndex]);

  const scrollToContactForm = () => {
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
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if about section isn't found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
        {isLoading && (
          <div className={`absolute inset-0 z-20 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="w-16 h-16 border-4 rounded-full border-t-transparent border-primary-600 animate-spin"></div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10"></div>
        
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          loop
          aria-label="School promotional video"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={scrollToContactForm}
              className={`px-8 py-3 ${
                isDarkMode ? 'bg-primary-600 hover:bg-primary-700' : 'bg-primary-600 hover:bg-primary-700'
              } text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center flex items-center justify-center gap-2 group`}
              aria-label="Apply for admission"
            >
              Apply Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={scrollToAbout}
              className={`px-8 py-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2`}
              aria-label="Learn more about our school"
            >
              Learn More
            </button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => {
                setCurrentVideoIndex(index);
              }}
              aria-label={`View video ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* School name section - moved below the video */}
      <div className={`py-8 text-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-1`}
          style={{ letterSpacing: '0.05em' }}
        >
          Sunrise Public School
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`h-0.5 w-40 mx-auto my-2 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-transparent via-primary-600 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-primary-500 to-transparent'
          }`}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-medium text-lg tracking-wider ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Palsud
        </motion.p>
      </div>
    </>
  );
}
