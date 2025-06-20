import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ScrollReveal from "../../utils/ScrollReveal";

const highlights = [
  { title: "Academic Excellence", desc: "Consistently achieving top results in national examinations", img: "/images/education.jpg", size: "large", color: "primary" },
  { title: "Sports Champions", desc: "Excellence in inter-school championships", img: "/images/sports-min.png", size: "medium", color: "accent" },
  { title: "Modern Facilities", desc: "Smart classrooms and advanced labs", img: "/images/technology.png", size: "medium", color: "secondary" },
  { title: "Cultural Programs", desc: "Vibrant cultural programs every semester", img: "/images/arts-min.png", size: "small", color: "primary" },
  { title: "Value Education", desc: "Strong values and moral education", img: "/images/image-1.jpg", size: "small", color: "secondary" },
  { title: "Expert Faculty", desc: "Experienced and supportive teaching staff", img: "/images/teacher.jpg", size: "medium", color: "accent" },
  { title: "Engaging Activities", desc: "Daily learning through fun activities", img: "/images/image-2.jpg", size: "small", color: "primary" },
  { title: "Innovation Hub", desc: "Creative curriculum with hands-on projects", img: "/images/library.png", size: "large", color: "secondary" },
  { title: "Safe Environment", desc: "Safe and secure school environment", img: "/images/ourcampus.jpg", size: "medium", color: "primary" },
  { title: "Transportation", desc: "Well-connected bus facility for all zones", img: "/images/image-3.jpg", size: "small", color: "accent" },
  { title: "Digital Learning", desc: "Advanced tools for modern learning", img: "/images/image-4.jpg", size: "medium", color: "secondary" },
  { title: "Student Support", desc: "Student counseling and career guidance", img: "/images/student_leadership.jpg", size: "small", color: "primary" },
];

export default function HighlightGridSection() {
  const { isDarkMode } = useTheme();

  return (
    <section className={`w-full py-20 px-4 md:px-8 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-white text-gray-900'
    }`}>
      <ScrollReveal>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
          isDarkMode ? 'text-primary-400' : 'text-primary-700'
        }`}>
          Our School Highlights
        </h2>
        <p className={`text-center max-w-3xl mx-auto mb-12 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Discover what makes Sunrise School a center of excellence in education
        </p>
      </ScrollReveal>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 md:gap-6">
          {highlights.map((item, idx) => {
            // Determine grid span based on size
            const colSpan = item.size === 'large' ? 'col-span-2' : 'col-span-1';
            const rowSpan = item.size === 'large' ? 'row-span-2' : item.size === 'medium' ? 'row-span-1' : '';
            const height = item.size === 'large' ? 'h-full' : item.size === 'medium' ? 'h-64' : 'h-48';
            
            // Determine gradient color based on item color
            const gradientColor = () => {
              if (item.color === 'primary') {
                return isDarkMode 
                  ? 'from-primary-900/90 via-primary-800/70 to-transparent' 
                  : 'from-primary-800/80 via-primary-700/60 to-transparent';
              } else if (item.color === 'secondary') {
                return isDarkMode 
                  ? 'from-secondary-900/90 via-secondary-800/70 to-transparent' 
                  : 'from-secondary-800/80 via-secondary-700/60 to-transparent';
              } else {
                return isDarkMode 
                  ? 'from-accent-900/90 via-accent-800/70 to-transparent' 
                  : 'from-accent-800/80 via-accent-700/60 to-transparent';
              }
            };
            
            return (
              <ScrollReveal 
                key={idx}
                variant={idx % 3 === 0 ? 'fadeIn' : idx % 3 === 1 ? 'zoomIn' : 'slideIn'}
                delay={idx * 0.1}
                className={`${colSpan} ${rowSpan}`}
              >
                <motion.div
                  className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${height} h-full`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${gradientColor()} flex flex-col justify-end p-5 text-white`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{item.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
