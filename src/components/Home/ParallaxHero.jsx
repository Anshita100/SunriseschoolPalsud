import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ParallaxHero = () => {
  const { isDarkMode } = useTheme();
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Smooth spring physics for parallax
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 25 });
  const smoothY3 = useSpring(y3, { stiffness: 100, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const slides = [
    {
      title: "Empowering Young Minds",
      subtitle: "Building tomorrow's leaders through excellence in education",
      image: "/images/my.jpg",
      color: "primary"
    },
    {
      title: "Discover Your Potential",
      subtitle: "A nurturing environment for academic and personal growth",
      image: "/images/my.jpg",
      color: "secondary"
    },
    {
      title: "Excellence in Education",
      subtitle: "Providing world-class education since 1995",
      image: "/images/my.jpg",
      color: "accent"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (isAutoplayPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length, isAutoplayPaused]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
    >
      {/* Background gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10"
        style={{ opacity: smoothOpacity }}
      />
      
      {/* Parallax layers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              y: smoothY1
            }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-display drop-shadow-lg"
              style={{ y: smoothY2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md"
              style={{ y: smoothY3 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="/admission/admission-process"
                className={`px-8 py-3 ${
                  slides[currentSlide].color === 'primary' ? 'bg-primary-600 hover:bg-primary-700' :
                  slides[currentSlide].color === 'secondary' ? 'bg-secondary-600 hover:bg-secondary-700' :
                  'bg-accent-600 hover:bg-accent-700'
                } text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center flex items-center justify-center gap-2 group`}
                aria-label="Apply for admission"
              >
                Apply Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              
              <button 
                onClick={scrollToAbout}
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                aria-label="Learn more about our school"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoplayPaused(true);
              setTimeout(() => setIsAutoplayPaused(false), 10000);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ 
          y: { repeat: Infinity, duration: 1.5 },
          opacity: { delay: 2, duration: 0.8 }
        }}
      >
        <button 
          onClick={scrollToAbout}
          className="text-white p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Scroll down to learn more"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
};

export default ParallaxHero; 