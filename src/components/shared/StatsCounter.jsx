import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';

const StatsCounter = ({ stats }) => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Track if each counter has completed its animation
  const [countersCompleted, setCountersCompleted] = useState(
    Array(stats.length).fill(false)
  );

  const handleCounterComplete = (index) => {
    const newCountersCompleted = [...countersCompleted];
    newCountersCompleted[index] = true;
    setCountersCompleted(newCountersCompleted);
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-baseline">
                <CountUp 
                  from={0} 
                  to={stat.value} 
                  duration={2} 
                  onComplete={() => handleCounterComplete(index)}
                  className={`text-4xl md:text-5xl font-bold ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  }`}
                />
                {stat.suffix && (
                  <span className={`text-3xl md:text-4xl font-bold ml-1 ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  }`}>
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm md:text-base ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {stat.label}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom counter component with animation
const CountUp = ({ from, to, duration, onComplete, className }) => {
  const [count, setCount] = useState(from);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        if (onComplete) onComplete();
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView, onComplete]);

  return <span ref={ref} className={className}>{count}</span>;
};

export default StatsCounter; 