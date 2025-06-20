import React from "react";
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AboutPageTemplate from './AboutPageTemplate';
import SectionHeading from './SectionHeading';
import StandardizedImage from '../../utils/StandardizedImage';
import { Leaf, Sun, Droplet, Wind } from 'lucide-react';

const NaturesOwnSchoolSection = () => {
  const { isDarkMode } = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Nature's principles cards
  const principles = [
    {
      icon: <Leaf className={`w-7 h-7 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />,
      title: "Sustainable Living",
      description: "We emphasize sustainable living practices through hands-on gardening, waste management, and conservation initiatives that help students develop a deep sense of environmental responsibility."
    },
    {
      icon: <Sun className={`w-7 h-7 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />,
      title: "Solar Power",
      description: "Our campus utilizes solar energy, reducing our carbon footprint while teaching students about renewable resources and energy conservation in practical ways."
    },
    {
      icon: <Droplet className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: "Water Conservation",
      description: "We employ rainwater harvesting systems and water-efficient practices, showing students the importance of preserving this vital resource for future generations."
    },
    {
      icon: <Wind className={`w-7 h-7 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />,
      title: "Clean Air Initiatives",
      description: "Located away from urban pollution, our campus maintains excellent air quality through extensive green cover and tree-planting programs that students actively participate in."
    }
  ];

  return (
    <AboutPageTemplate
      title="Nature's Own School"
      subtitle="Living and learning in harmony with the environment"
      bannerImage="/images/natureownschool.png"
    >
      {/* Introduction Section */}
      <div className="mb-12">
        <SectionHeading 
          title="A School Nestled in Nature" 
          subtitle="Education in harmony with the environment"
        />

        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}
        >
          At Sunrise School, we believe that the environment in which students learn is just as important as what they learn. Our campus, spread across 25 acres of lush greenery, serves as a living classroom that nurtures a deep connection with nature. The natural surroundings create an atmosphere of peace and tranquility that enhances learning and promotes mental well-being.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <StandardizedImage 
            src="/images/my.jpg" 
            alt="Sunrise School Natural Campus"
            size="md"
          />
          <StandardizedImage 
            src="/images/my.jpg" 
            alt="Students Learning Outdoors"
            size="md"
          />
        </div>
        
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}
        >
          Our school's design integrates with the natural landscape, featuring open classrooms, abundant natural light, and outdoor learning spaces. This approach not only reduces our environmental impact but also creates an inspiring learning environment that stimulates creativity and encourages exploration.
        </motion.p>
      </div>

      {/* Nature's Principles Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <SectionHeading 
          title="Nature's Principles" 
          subtitle="Building environmental consciousness"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-800/70 border border-gray-700 shadow-lg shadow-black/20' 
                  : 'bg-white border border-gray-100 shadow-lg'
              } transition-all duration-300 hover:transform hover:translate-y-[-5px]`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                } transition-colors duration-300`}>
                  {principle.icon}
                </div>
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-700'
                } transition-colors duration-300`}>{principle.title}</h3>
              </div>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } transition-colors duration-300`}>
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Environmental Programs Section */}
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8"
      >
        <SectionHeading 
          title="Environmental Programs" 
          subtitle="Learning through active participation" 
        />
        
        <div className={`p-8 rounded-xl mb-8 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-900/30' 
            : 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-100'
        } transition-colors duration-300`}>
          <ul className="space-y-4">
            {[
              "Organic Gardening: Students maintain organic vegetable and herb gardens, learning about sustainable agriculture and healthy food choices.",
              "Waste Management: Our comprehensive recycling and composting programs teach practical skills for reducing waste and environmental impact.",
              "Conservation Projects: Regular activities focused on local conservation needs, including tree planting and habitat restoration.",
              "Nature Walks & Field Studies: Regular excursions that incorporate biology, geography, and environmental science into hands-on learning experiences.",
              "Environmental Leadership: Students lead initiatives to raise awareness about environmental issues within the school and local community."
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="flex items-start"
              >
                <div className={`mr-3 mt-1.5 w-4 h-4 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-green-900/50' : 'bg-green-100'
                } transition-colors duration-300`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-green-500' : 'bg-green-500'
                  } transition-colors duration-300`}></div>
                </div>
                <span className={`${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                } transition-colors duration-300`}>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <StandardizedImage 
          src="/images/my.jpg" 
          alt="Environmental Programs in Action"
          size="lg"
          className="mb-8"
        />
      </motion.div>

      {/* Quote Section */}
      <motion.blockquote 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`p-8 border-l-4 ${
          isDarkMode 
            ? 'bg-gray-800/50 border-green-600 shadow-lg shadow-black/10' 
            : 'bg-gray-50 border-green-500 shadow-md'
        } rounded-r-xl mb-8 transition-colors duration-300`}
      >
        <p className={`text-xl italic mb-4 ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        } transition-colors duration-300`}>
          "In the end we will conserve only what we love, we will love only what we understand, and we will understand only what we are taught."
        </p>
        <cite className={`block ${
          isDarkMode ? 'text-primary-400' : 'text-primary-600'
        } font-medium transition-colors duration-300`}>— Baba Dioum</cite>
      </motion.blockquote>
    </AboutPageTemplate>
  );
};

export default NaturesOwnSchoolSection;
