import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderColor = '#f3f4f6',
  loadingEffect = true,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      setImageSrc(src);
    };
    
    img.onerror = () => {
      setError(true);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (error) {
    return (
      <div 
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt || 'Image failed to load'}
      >
        <svg className="w-10 h-10 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div
          className={`bg-gray-200 dark:bg-gray-700 ${className}`}
          style={{ width, height }}
          aria-hidden="true"
        />
      )}
      
      {loadingEffect ? (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          width={width}
          height={height}
          loading="lazy"
          {...props}
        />
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'block' : 'hidden'}`}
          width={width}
          height={height}
          loading="lazy"
          {...props}
        />
      )}
    </>
  );
} 