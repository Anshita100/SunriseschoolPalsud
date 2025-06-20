import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook for lazy loading images
 * @param {string} src - The image source URL
 * @param {string} placeholder - Optional placeholder image URL
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - { imageRef, isLoaded, currentSrc }
 */
const useLazyImage = (src, placeholder = '', options = { threshold: 0.1, rootMargin: '200px' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imageRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Reset state if src changes
    if (src !== currentSrc) {
      setIsLoaded(false);
    }

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Skip if no image reference or no src
    if (!imageRef.current || !src) return;

    // Create new observer
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If image is in viewport
        if (entry.isIntersecting) {
          // Load the image
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setCurrentSrc(src);
            setIsLoaded(true);
          };
          img.onerror = () => {
            console.error(`Error loading image: ${src}`);
            setIsLoaded(false);
          };

          // Unobserve once loaded
          if (observerRef.current) {
            observerRef.current.unobserve(imageRef.current);
          }
        }
      });
    }, options);

    // Start observing
    observerRef.current.observe(imageRef.current);

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, options, currentSrc]);

  return { imageRef, isLoaded, currentSrc };
};

export default useLazyImage; 