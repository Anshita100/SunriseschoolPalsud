import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AboutPageTemplate from './AboutPageTemplate';
import StandardizedImage from '../../utils/StandardizedImage';
import SectionHeading from './SectionHeading';
import { Award, BookOpen, GraduationCap, Globe } from 'lucide-react';
import { darkClass } from '../../utils/darkModeUtils';

const SchoolDirectorProfile = () => {
  const { isDarkMode } = useTheme();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <AboutPageTemplate
      title="School Director"
      subtitle="Leadership with Vision and Purpose"
      bannerImage="/images/director.jpg"
    >
      {/* Director's Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Photo Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <StandardizedImage
            src="/images/director.jpg"
            alt="Dr. Rajesh Kumar - School Director"
            size="lg"
            className={`shadow-xl ${isDarkMode ? 'ring-1 ring-gray-700' : 'ring-1 ring-gray-100'}`}
          />

          {/* Director's Profile Box */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true }}
            className={`mt-6 p-6 rounded-xl shadow-md ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-800/90 border border-gray-700' 
                : 'bg-white border border-gray-100'
            } transition-colors duration-300`}
          >
            <h3 className={`text-xl font-bold ${
              isDarkMode ? 'text-primary-400' : 'text-primary-700'
            } mb-2 transition-colors duration-300`}>Dr. Rajesh Kumar</h3>
            <p className={`text-sm font-medium ${
              isDarkMode ? 'text-primary-300' : 'text-primary-500'
            } mb-4 transition-colors duration-300`}>School Director & Principal</p>
            
            <ul className={`space-y-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-300`}>
              <li className="flex gap-3 items-center">
                <GraduationCap className={`w-5 h-5 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-600'
                } transition-colors duration-300`} />
                <span>Ph.D. in Educational Leadership</span>
              </li>
              <li className="flex gap-3 items-center">
                <Award className={`w-5 h-5 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-600'
                } transition-colors duration-300`} />
                <span>20+ Years in Education</span>
              </li>
              <li className="flex gap-3 items-center">
                <Globe className={`w-5 h-5 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-600'
                } transition-colors duration-300`} />
                <span>IB Educational Leadership</span>
              </li>
              <li className="flex gap-3 items-center">
                <BookOpen className={`w-5 h-5 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-600'
                } transition-colors duration-300`} />
                <span>Author of 3 Books on Education</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Content Column */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <SectionHeading 
            title="Director's Message"
            subtitle="A Vision for Excellence in Education"
          />
          
          <motion.div 
            variants={fadeIn}
            className="space-y-5"
          >
            <p className={`text-lg leading-relaxed font-medium ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            } transition-colors duration-300`}>
              Dear Parents, Students, and Visitors,
            </p>
            
            <p className={`text-base leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-300`}>
              As the Director of Sunrise School, I am privileged to lead an institution that has established itself as a beacon of educational excellence. Our school's philosophy is anchored in the belief that education must nurture the complete individual – intellectually, emotionally, physically, and socially.
            </p>
            
            <p className={`text-base leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-300`}>
              At Sunrise, we strive to create a learning environment where students don't just acquire knowledge, but develop the skills and attitudes needed to become lifelong learners and responsible global citizens. Our progressive curriculum, combined with our dedicated faculty, ensures that each student receives personalized attention and guidance to discover and develop their unique potential.
            </p>
            
            <blockquote className={`pl-6 border-l-4 ${
              isDarkMode 
                ? 'border-primary-600 bg-primary-900/10 py-4 px-3 rounded-r-lg' 
                : 'border-primary-500 bg-primary-50/50 py-4 px-3 rounded-r-lg'
            } italic my-8 transition-colors duration-300`}>
              <p className={`text-lg ${
                isDarkMode ? 'text-primary-300' : 'text-primary-700'
              } transition-colors duration-300`}>
                "Education is not the filling of a pail, but the lighting of a fire. At Sunrise School, we ignite the passion for learning in every child."
              </p>
            </blockquote>
            
            <p className={`text-base leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-300`}>
              Our commitment extends beyond academics to include character development, community service, and fostering a deep respect for diversity and the environment. We believe that tomorrow's leaders must be equipped not just with knowledge, but with empathy, integrity, and a sense of social responsibility.
            </p>
            
            <p className={`text-base leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-300`}>
              I invite you to explore our campus, engage with our community, and experience firsthand the Sunrise difference. Together, let us embark on this rewarding journey of education and discovery.
            </p>
            
            <div className="mt-8 border-t pt-4 border-gray-200 dark:border-gray-700">
              <p className={`font-semibold ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              } transition-colors duration-300`}>Dr. Rajesh Kumar</p>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } transition-colors duration-300`}>School Director</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
          
      {/* Director's Vision Box */}
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`p-8 md:p-10 rounded-xl mb-12 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl shadow-black/10' 
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg'
        } transition-all duration-300`}
      >
        <SectionHeading 
          title="Director's Vision"
          subtitle="Building the future of education"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              number: "01",
              text: "To establish Sunrise as a center of educational excellence that prepares students for global leadership."
            },
            {
              number: "02",
              text: "To integrate cutting-edge technology and progressive teaching methods to enhance the learning experience."
            },
            {
              number: "03",
              text: "To nurture a community that values diversity, environmental sustainability, and social responsibility."
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className={`${
                isDarkMode ? 'hover:bg-gray-800/50' : 'hover:bg-white/50'
              } p-6 rounded-lg transition-all duration-300 border ${
                isDarkMode ? 'border-gray-700' : 'border-gray-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${
                isDarkMode ? 'bg-primary-900/30 text-primary-400' : 'bg-primary-50 text-primary-600'
              } transition-colors duration-300`}>
                <span className="text-xl font-bold">{item.number}</span>
              </div>
              <p className={`${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              } transition-colors duration-300`}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Educational Philosophy */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8"
      >
        <SectionHeading 
          title="Educational Philosophy" 
          subtitle="Guiding Our Approach" 
        />
        
        <p className={`text-lg mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        } transition-colors duration-300`}>
          Our educational approach is guided by core principles that shape how we teach, mentor, and inspire our students. These principles inform every aspect of school life at Sunrise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Student-Centered Learning",
              description: "We place students at the heart of the educational process, recognizing their unique abilities, interests, and learning styles to create personalized learning experiences."
            },
            {
              title: "Holistic Development",
              description: "We nurture intellectual growth alongside physical wellness, emotional intelligence, creative expression, and ethical development."
            },
            {
              title: "Global Citizenship",
              description: "We prepare students to navigate an interconnected world with cultural sensitivity, open-mindedness, and a commitment to making positive contributions."
            },
            {
              title: "Innovation & Excellence",
              description: "We embrace progressive teaching methodologies and maintain high academic standards while fostering creativity and critical thinking."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-800/70 border border-gray-700' 
                  : 'bg-white shadow-md border border-gray-100'
              } transition-all duration-300 hover:shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-primary-400' : 'text-primary-700'
              } transition-colors duration-300`}>{item.title}</h3>
              
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } transition-colors duration-300`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AboutPageTemplate>
  );
};

export default SchoolDirectorProfile;
