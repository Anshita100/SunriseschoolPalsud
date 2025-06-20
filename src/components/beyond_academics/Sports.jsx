import React from 'react';
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import BeyondacademicsSidebar from "./BeyondacademicsSidebar";
import { motion } from 'framer-motion';

export default function Technology() {
  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300 pt-16">
      {/* Top Banner Image */}
      <img
        src="/images/sports-min.png"
        alt="Technology Banner"
        className="w-full h-[400px] md:h-[500px] object-cover"
      />

      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <BeyondacademicsSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 px-6 py-12">
          <motion.h1
            className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technology
          </motion.h1>

          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Technology for 21st Century Learning
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
            At Sunrise School, technology is not just a tool—it is an integral part of our educational ecosystem. We integrate cutting-edge technology to enhance student engagement and prepare learners for a tech-driven future.
          </p>

          {/* YouTube Video */}
          <div className="w-full h-[300px] md:h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Technology at Sunrise School"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Descriptive Paragraphs */}
          <div className="text-left space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Our classrooms are equipped with interactive smart boards and high-speed internet, ensuring seamless connectivity for dynamic learning experiences.
            </p>
            <p>
              From AI-based personalized learning platforms to virtual science labs, our students are empowered with tools that go beyond traditional textbooks.
            </p>
            <p>
              Teachers regularly receive professional development to stay ahead in tech integration, fostering an environment of innovation and adaptability.
            </p>
          </div>

          {/* Technology in Use List */}
          <div className="mt-16 text-left">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">Technology in Use</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-300">
              <li>Smart Boards and Digital Classrooms</li>
              <li>1:1 Device Program for Students</li>
              <li>Online Assessment and Feedback Systems</li>
              <li>Cloud-based Collaboration Tools</li>
              <li>Augmented Reality & Virtual Reality Labs</li>
              <li>AI-Driven Learning Platforms</li>
              <li>Student Portfolios and Digital Showcases</li>
              <li>Learning Management System Integration</li>
              <li>Cyber Safety and Digital Citizenship Curriculum</li>
              <li>Tech Clubs and Coding Bootcamps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Sections */}
      <InfoIconsSection />
      <ContactFormSection />
     
      <WhatsAppFloatingIcon />
    </div>
  );
}
