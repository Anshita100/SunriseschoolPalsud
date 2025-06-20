import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

/**
 * StandardizedImage - A component for consistent image display throughout the site
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - Additional class names
 * @param {boolean} props.animate - Whether to animate the image (default: true)
 * @param {string} props.aspectRatio - CSS aspect ratio (default: 'aspect-w-16 aspect-h-9')
 * @param {boolean} props.hover - Whether to apply hover effects (default: true)
 * @param {string} props.size - Size preset: 'sm', 'md', 'lg', or 'custom' (default: 'md')
 * @returns {React.Component} Standardized image component
 */
const StandardizedImage = ({ 
  src, 
  alt, 
  className = '', 
  animate = true,
  aspectRatio = '',
  hover = true,
  size = 'md',
  ...props 
}) => {
  const { isDarkMode } = useTheme();

  // Define size presets
  const sizes = {
    sm: 'h-48 md:h-56',
    md: 'h-64 md:h-72 lg:h-80',
    lg: 'h-72 md:h-80 lg:h-96',
    custom: ''
  };

  // Base component to render
  const ImageComponent = animate ? motion.div : 'div';
  
  // Animation props if animation is enabled
  const animationProps = animate ? {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } : {};

  return (
    <ImageComponent
      className={`${size !== 'custom' ? sizes[size] : ''} ${aspectRatio} w-full overflow-hidden rounded-xl ${
        isDarkMode 
          ? 'shadow-lg shadow-black/20 ring-1 ring-gray-800' 
          : 'shadow-md'
      } ${className}`}
      {...animationProps}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          hover ? 'transition-transform duration-500 hover:scale-105' : ''
        }`}
        {...props}
      />
    </ImageComponent>
  );
};

export default StandardizedImage; 