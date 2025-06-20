import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AdmissionsSidebar from "./AdmissionsSidebar";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  { title: "Modern Classrooms", description: "Equipped with smart boards, ergonomic seating, and natural lighting to create a student-centric environment." },
  { title: "Science & Tech Labs", description: "State-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science." },
  { title: "Library & Resource Center", description: "Vast collections of books, digital media, and peaceful reading zones." },
  { title: "Auditorium", description: "Fully air-conditioned with advanced sound and lighting systems for events and presentations." },
  { title: "Sports Complex", description: "Indoor and outdoor sports facilities including swimming pool, courts, and gym." },
  { title: "Creative Arts Studio", description: "Dedicated spaces for music, dance, painting, drama and photography." },
  { title: "Green Campus", description: "Eco-friendly infrastructure with lush green zones and sustainable practices." },
];

const OurCampus = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Banner */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/ourcampus.jpg"
          alt="Our Campus Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <AdmissionsSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <motion.h2
            className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Campus
          </motion.h2>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-8">
            Experience the Spirit of Our School Through Photos
          </h3>

          {/* Accordion */}
          <div className="space-y-4 mb-12">
            {accordionData.map((item, index) => (
              <div key={index} className="border border-blue-200 dark:border-blue-700 rounded-lg shadow-sm transition-all">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full p-4 text-lg font-medium text-left text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-800/30 transition"
                >
                  <span>{item.title}</span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="p-4 bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              >
                <img
                  src={`/images/imagecampus-${i + 1}.png`}
                  alt={`Campus ${i + 1}`}
                  className="w-full h-[200px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shared Sections */}
      <InfoIconsSection />
      <ContactFormSection />
      
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default OurCampus;
