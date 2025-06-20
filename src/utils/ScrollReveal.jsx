import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.8) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export default function ScrollReveal({
  children,
  variant = 'fadeIn',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  ...props
}) {
  let selectedVariant;
  
  switch (variant) {
    case 'fadeIn':
      selectedVariant = fadeIn(direction, delay);
      break;
    case 'zoomIn':
      selectedVariant = zoomIn(delay, duration);
      break;
    case 'slideIn':
      selectedVariant = slideIn(direction, 'tween', delay, duration);
      break;
    default:
      selectedVariant = fadeIn(direction, delay);
  }

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
} 