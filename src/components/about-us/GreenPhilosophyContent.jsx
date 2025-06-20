import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AboutPageTemplate from './AboutPageTemplate';
import StandardizedImage from '../../utils/StandardizedImage';
import SectionHeading from './SectionHeading';

const GreenPhilosophyContent = () => {
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
      title="Green Philosophy"
      subtitle="Our Commitment to a Sustainable Future"
      bannerImage="/images/nature.jpg"
    >
      {/* Introduction Section */}
      <div>
        <SectionHeading
          title="Environmental Stewardship"
          subtitle="Our approach to eco-friendly education and campus sustainability"
        />
        
        <motion.div 
          variants={fadeIn}
          className="space-y-5"
        >
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            At Sunrise School, sustainability is not just taught—it is lived. Our Green Philosophy
            guides every aspect of our campus operations and educational approach, embedding
            environmental consciousness into the very fabric of our school culture.
          </p>
          
          <p className={`text-base leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            From our eco-friendly architecture to our curriculum that emphasizes environmental
            literacy, we strive to nurture students who understand their responsibility as stewards
            of the planet. Our hands-on approach to sustainability education equips students with
            both knowledge and practical skills to address real-world environmental challenges.
          </p>
        </motion.div>
      </div>
      
      {/* Key Initiatives Section with Cards */}
      <div className="mt-12">
        <SectionHeading
          title="Key Green Initiatives"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Solar-Powered Campus",
              description: "Over 75% of our energy needs are met through rooftop solar panels, significantly reducing our carbon footprint.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            },
            {
              title: "Rainwater Harvesting",
              description: "Our comprehensive system collects and reuses rainwater for irrigation and non-potable uses throughout the campus.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: "Zero-Waste Campus",
              description: "Through composting, recycling, and reduction initiatives, we aim to minimize waste sent to landfills.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl shadow-lg p-6 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-100'
              } transition-colors duration-300 hover:shadow-xl`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                isDarkMode ? 'bg-primary-900/50 text-primary-400' : 'bg-primary-50 text-primary-600'
              }`}>
                {item.icon}
              </div>
              
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
      
      {/* Sustainable Campus Features */}
      <div className="mt-14">
        <SectionHeading
          title="Our Sustainable Campus"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <StandardizedImage
              src="/images/nature.jpg"
              alt="Sustainable Campus Buildings"
            />
          </div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className={`text-xl font-bold ${
              isDarkMode ? 'text-primary-400' : 'text-primary-600'
            }`}>Eco-Friendly Infrastructure</h3>
            
            <p className={`text-base leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our campus buildings are designed with sustainability in mind, featuring energy-efficient
              architecture, natural lighting, and materials with low environmental impact. Green roofs
              and walls not only provide insulation but also create habitats for local wildlife.
            </p>
            
            <ul className={`space-y-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {[
                "LEED-certified buildings with energy-efficient design",
                "Natural ventilation systems reducing need for air conditioning",
                "Low-flow water fixtures throughout campus",
                "Native plant landscaping requiring minimal irrigation",
                "Organic garden supplying our cafeteria"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                    isDarkMode ? 'bg-primary-400' : 'bg-primary-600'
                  }`}></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Curriculum Integration */}
      <div className="mt-14">
        <SectionHeading
          title="Green Education"
          subtitle="Integrating sustainability across our curriculum"
        />
        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`p-6 md:p-8 rounded-xl shadow-lg ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
          } transition-colors duration-300`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>Curriculum Integration</h3>
              
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Environmental literacy is woven into every subject area, from science and math to
                arts and humanities, ensuring students develop a holistic understanding of sustainability
                principles and their real-world applications.
              </p>
              
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Through experiential learning, students participate in ongoing research projects,
                environmental monitoring, and conservation efforts both on campus and in the wider community.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${
                isDarkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>Student-Led Initiatives</h3>
              
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Our Green Council, led by students from all grade levels, oversees sustainability 
                initiatives and organizes events such as our annual Earth Week celebration, waste audits,
                and community clean-up efforts.
              </p>
              
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Through these leadership opportunities, students develop project management skills, 
                learn to collaborate effectively, and become empowered to drive positive environmental change.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AboutPageTemplate>
  );
};

export default GreenPhilosophyContent;
