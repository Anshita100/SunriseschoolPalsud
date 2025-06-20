import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    image: "/images/my.jpg",
    quote: "Sunrise School has been transformative for my daughter. The teachers are exceptional and truly care about each student's growth and well-being.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Alumni",
    image: "/images/my.jpg",
    quote: "My years at Sunrise prepared me exceptionally well for university and beyond. The rigorous academics combined with emphasis on character development gave me a strong foundation.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Current Student",
    image: "/images/my.jpg",
    quote: "I love the diverse opportunities available here. From robotics to debate club to sports, there's something for everyone to discover their passion.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Education Expert",
    image: "/images/my.jpg",
    quote: "In my 20 years of educational consulting, Sunrise School stands out for its innovative approach to learning and commitment to excellence.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoplay(false);
    setDirection(-1);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setDirection(1);
    setCurrentIndex(prevIndex => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Generate star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What People Say About Us
          </h2>
          <p className={`max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Hear from our community of students, parents, and alumni about their experiences at Sunrise School.
          </p>
        </div>
        
        <div className="relative">
          {/* Testimonial carousel */}
          <div className="overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`p-6 md:p-10 rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl' 
                    : 'bg-gradient-to-br from-white to-gray-50 shadow-xl'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="relative mb-4">
                      <div className={`absolute -top-2 -left-2 w-full h-full rounded-full ${
                        isDarkMode ? 'bg-primary-700' : 'bg-primary-100'
                      }`}></div>
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover relative z-10"
                      />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {testimonials[currentIndex].role}
                    </p>
                    <div className="flex mt-2">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <Quote 
                      size={48} 
                      className={`mb-4 ${
                        isDarkMode ? 'text-primary-600 opacity-40' : 'text-primary-300'
                      }`}
                    />
                    <p className={`text-lg md:text-xl leading-relaxed ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrevious}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoplay(false);
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? isDarkMode ? 'bg-primary-500 scale-125' : 'bg-primary-600 scale-125'
                      : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 