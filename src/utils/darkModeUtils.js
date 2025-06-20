/**
 * Utility functions and constants for consistent dark mode styling
 */

// Common dark mode classes for different UI elements
export const darkModeClasses = {
  // Background variations
  pageBackground: {
    light: 'bg-white',
    dark: 'bg-gray-900'
  },
  cardBackground: {
    light: 'bg-white',
    dark: 'bg-gray-800'
  },
  cardBackgroundSubtle: {
    light: 'bg-gray-50',
    dark: 'bg-gray-800/70'
  },
  cardBackgroundAccent: {
    light: 'bg-primary-50',
    dark: 'bg-primary-900/30'
  },
  
  // Text colors
  textPrimary: {
    light: 'text-gray-800',
    dark: 'text-gray-200'
  },
  textSecondary: {
    light: 'text-gray-700',
    dark: 'text-gray-300'
  },
  textMuted: {
    light: 'text-gray-500',
    dark: 'text-gray-400'
  },
  textAccent: {
    light: 'text-primary-700',
    dark: 'text-primary-400'
  },
  
  // Borders
  border: {
    light: 'border-gray-200',
    dark: 'border-gray-700'
  },
  borderAccent: {
    light: 'border-primary-500',
    dark: 'border-primary-700'
  },
  
  // Interactive elements
  buttonPrimary: {
    light: 'bg-primary-600 hover:bg-primary-700 text-white',
    dark: 'bg-primary-600 hover:bg-primary-700 text-white'
  },
  buttonOutline: {
    light: 'border border-primary-600 text-primary-600 hover:bg-primary-50',
    dark: 'border border-primary-500 text-primary-400 hover:bg-primary-900/20'
  }
};

/**
 * Get appropriate class based on dark mode state
 * 
 * @param {Object} classOptions - Object with light and dark options
 * @param {boolean} isDarkMode - Current dark mode state
 * @returns {string} The appropriate class
 */
export const getDarkModeClass = (classOptions, isDarkMode) => {
  return isDarkMode ? classOptions.dark : classOptions.light;
};

/**
 * Generate conditional classes for dark mode
 * 
 * @param {boolean} isDarkMode - Current dark mode state
 * @param {string} lightClass - Class to use in light mode
 * @param {string} darkClass - Class to use in dark mode
 * @returns {string} The appropriate class
 */
export const darkClass = (isDarkMode, lightClass, darkClass) => {
  return isDarkMode ? darkClass : lightClass;
};

/**
 * Transition classes for smooth dark mode transitions
 */
export const transitionClasses = 'transition-colors duration-300';

export default {
  darkModeClasses,
  getDarkModeClass,
  darkClass,
  transitionClasses
}; 