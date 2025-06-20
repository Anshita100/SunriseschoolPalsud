import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import BeyondacademicsSidebar from "./BeyondacademicsSidebar";
import { motion } from "framer-motion";

const CareerAndCollegeAdvisory = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Banner */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/natureownschool.png"
          alt="Career and College Advisory"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <BeyondacademicsSidebar />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 px-6 py-8">
          <motion.h2
            className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Career & College Advisory
          </motion.h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            At Sunrise School, we believe in preparing students not just for academic success but for lifelong achievement. Our Career & College Advisory program is a personalized journey designed to help students discover their strengths, set meaningful goals, and make informed decisions about their future.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
            Our Comprehensive Support Includes:
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-base text-gray-700 dark:text-gray-300">
            <li>One-on-one career counseling sessions</li>
            <li>College selection and application guidance (India & abroad)</li>
            <li>Workshops on resume writing, interviews, and SOP creation</li>
            <li>Standardized test prep support (SAT, ACT, IELTS, etc.)</li>
            <li>Scholarship and financial aid application assistance</li>
            <li>Parent orientation and goal-alignment meetings</li>
            <li>Industry interactions and alumni mentorship programs</li>
          </ul>

          <p className="mt-8 text-gray-700 dark:text-gray-300">
            Whether a student is aiming for top Indian universities, Ivy League institutions, or pursuing alternative career paths, our team supports them at every step with dedication and clarity.
          </p>
        </div>
      </div>

      {/* Footer */}
      <InfoIconsSection />
      <ContactFormSection />
     
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default CareerAndCollegeAdvisory;
