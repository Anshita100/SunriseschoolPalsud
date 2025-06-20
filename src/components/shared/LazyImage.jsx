import React from 'react';
import { motion } from 'framer-motion';
import useLazyImage from '../../hooks/useLazyImage';
import { useTheme } from '../../context/ThemeContext';

/**
 * A component for lazy loading images with animation and placeholders
 */
const LazyImage = ({
  src,
  alt,
  placeholderSrc = '',
  className = '',
  imgClassName = '',
  width,
  height,
  animate = true,
  animationVariant = 'fade', // Options: 'fade', 'zoom', 'slide'
  ...props
}) => {
  const { imageRef, isLoaded, currentSrc } = useLazyImage(src, placeholderSrc);
  const { isDarkMode } = useTheme();

  // Define animation variants
  const getAnimationVariants = () => {
    switch (animationVariant) {
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  // Container styles
  const containerClasses = `relative overflow-hidden ${className}`;
  
  // Image styles
  const imageClasses = `w-full h-full object-cover transition-opacity duration-300 ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  } ${imgClassName}`;

  // Placeholder styles - shows a subtle loading background
  const placeholderClasses = `absolute inset-0 ${
    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
  } animate-pulse ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`;

  return (
    <div className={containerClasses} style={{ width, height }} ref={imageRef}>
      {/* Loading placeholder */}
      <div className={placeholderClasses} aria-hidden="true" />
      
      {/* Actual image */}
      {animate ? (
        <motion.img
          src={currentSrc}
          alt={alt}
          className={imageClasses}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={getAnimationVariants()}
          transition={{ duration: 0.5 }}
          loading="lazy"
          {...props}
        />
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          className={imageClasses}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage; 