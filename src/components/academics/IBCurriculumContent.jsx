import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AcademicsSidebar from "./AcademicsSidebar";
import { motion } from "framer-motion";

const ibPoints = [
  "Encourages inquiry-based learning",
  "Focuses on the development of the whole child",
  "International-mindedness is a core theme",
  "Promotes conceptual understanding",
  "Fosters critical and reflective thinking"
];

const finalPoints = [
  "Global recognition and acceptance",
  "Prepares students for top universities",
  "Builds leadership and community service",
  "Promotes multilingualism and intercultural understanding"
];

const hoverImages = [
  {
    src: "/images/ib-pyp.jpg",
    alt: "IB Learner",
    label: "IB Learner Profile",
    hoverText: "Fostering principled, caring and open-minded learners"
  },
  {
    src: "/images/ib-pyp.jpg",
    alt: "Collaborative Work",
    label: "Collaborative Work",
    hoverText: "Encouraging team spirit and idea exchange"
  },
  {
    src: "/images/ib-pyp.jpg",
    alt: "Global Perspective",
    label: "Global Perspective",
    hoverText: "Preparing students for global citizenship"
  }
];

const IBCurriculum = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Banner */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/ib-banner.png"
          alt="IB Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <AcademicsSidebar />
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
            THE IB CURRICULUM
          </motion.h2>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
            A World-Class Education Framework
          </h3>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            The International Baccalaureate (IB) curriculum aims to develop inquiring, knowledgeable and caring young people. It prepares students to succeed in a globalized and rapidly changing world.
          </p>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Key Features of the IB Programme</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            {ibPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-10 mb-4">The IB Experience</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {hoverImages.map((img, idx) => (
              <motion.div
                key={idx}
                className="relative group overflow-hidden rounded-xl shadow-lg border border-blue-200 dark:border-blue-700"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-64">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-white text-center text-sm">
                  {img.hoverText}
                </div>
                <div className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white font-semibold py-2 text-center">
                  {img.label}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            At our school, we implement the IB framework not just as an academic structure but as a life approach. Through creativity, action, and service, our students grow into thoughtful leaders ready to take on the world.
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            {finalPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Shared Sections */}
      <InfoIconsSection />
      <ContactFormSection />
     
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default IBCurriculum;
