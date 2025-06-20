import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

/**
 * Button - A standardized button component with dark mode support
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant: 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {string} props.href - If provided, button renders as Link/anchor
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {boolean} props.rounded - Whether button should be fully rounded
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional classes
 * @returns {React.Component} Button component
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  to,
  fullWidth = false, 
  rounded = false,
  children,
  className = '',
  ...props 
}) => {
  const { isDarkMode } = useTheme();
  
  // Determine base classes based on variant
  const getVariantClasses = () => {
    const variants = {
      primary: isDarkMode 
        ? 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg hover:shadow-primary-900/20' 
        : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg',
      secondary: isDarkMode
        ? 'bg-gray-700 hover:bg-gray-600 text-white hover:shadow-lg hover:shadow-gray-900/10'
        : 'bg-gray-800 hover:bg-gray-700 text-white hover:shadow-lg',
      outline: isDarkMode
        ? 'bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-900/20'
        : 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50',
      ghost: isDarkMode
        ? 'bg-transparent text-primary-400 hover:bg-gray-800'
        : 'bg-transparent text-primary-600 hover:bg-gray-100',
    };
    
    return variants[variant] || variants.primary;
  };
  
  // Determine size classes
  const getSizeClasses = () => {
    const sizes = {
      sm: 'text-xs py-1.5 px-3',
      md: 'text-sm py-2 px-4',
      lg: 'text-base py-2.5 px-6',
    };
    
    return sizes[size] || sizes.md;
  };
  
  // Combine all classes
  const buttonClasses = [
    'inline-flex items-center justify-center font-medium transition-all duration-300 transform hover:-translate-y-0.5',
    getVariantClasses(),
    getSizeClasses(),
    rounded ? 'rounded-full' : 'rounded-md',
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }
  
  // Render as router Link if to is provided
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // Render as button
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button; 