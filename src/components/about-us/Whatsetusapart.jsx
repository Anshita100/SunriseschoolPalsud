import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AboutPageTemplate from './AboutPageTemplate';
import StandardizedImage from '../../utils/StandardizedImage';
import SectionHeading from './SectionHeading';

export default function Whatsetusapart() {
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
      title="What Sets Us Apart"
      subtitle="Discovering Our Unique Approach"
      bannerImage="/images/whatsetusapart.jpg"
    >
      {/* Introduction Section */}
      <div>
        <SectionHeading
          title="The Founders & The Journey"
          subtitle="The Journey of Pathways Schools"
        />
        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            At Sunrise School, technology is not just a tool—it is an integral part of our educational ecosystem. We integrate cutting-edge technology to enhance student engagement and prepare learners for a tech-driven future.
            From AI-based personalized learning platforms to virtual science labs, our students are empowered with tools that go beyond traditional textbooks.
          </p>
        </motion.div>
      </div>
      
      {/* Video Section */}
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-10"
      >
        <div className="w-full md:w-4/5 mx-auto h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Technology at Sunrise School"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      
      {/* Feature Cards */}
      <div className="mt-12">
        <SectionHeading
          title="Our Distinctive Features"
          subtitle="What makes Sunrise School stand out"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Advanced Learning Technology",
              description: "Our classrooms are equipped with interactive smart boards and high-speed internet, ensuring seamless connectivity for dynamic learning experiences.",
              icon: "🖥️"
            },
            {
              title: "Personalized Education",
              description: "From AI-based personalized learning platforms to virtual science labs, our students are empowered with tools that go beyond traditional textbooks.",
              icon: "🎯"
            },
            {
              title: "Professional Development",
              description: "Teachers regularly receive professional development to stay ahead in tech integration, fostering an environment of innovation and adaptability.",
              icon: "🔄"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-100'
              } hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>{item.title}</h3>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Image and Content Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StandardizedImage 
            src="/images/whatsetusapart.jpg" 
            alt="Our Unique Approach" 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className={`text-2xl font-bold ${
            isDarkMode ? 'text-primary-400' : 'text-primary-600'
          }`}>Our Educational Philosophy</h3>
          
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            From AI-based personalized learning platforms to virtual science labs, our students are empowered with tools that go beyond traditional textbooks.
            From AI-based personalized learning platforms to virtual science labs, our students are empowered with tools that go beyond traditional textbooks.
          </p>
          
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Teachers regularly receive professional development to stay ahead in tech integration, fostering an environment of innovation and adaptability.
            From AI-based personalized learning platforms to virtual science labs, our students are empowered with tools that go beyond traditional textbooks.
          </p>
        </motion.div>
      </div>
      
    </AboutPageTemplate>
    
    
  );
} 
