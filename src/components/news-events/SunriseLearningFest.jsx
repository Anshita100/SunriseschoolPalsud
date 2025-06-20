import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import NewseventsSidebar from "./NewseventsSidebar";
import { motion } from "framer-motion";

export default function AdditionalLearningSupport() {
  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Banner Image */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/additional-learning-support.jpg"
          alt="Additional Learning Support"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <NewseventsSidebar/>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4">
          <motion.h1
            className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sunrise Learning Fest
          </motion.h1>

          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-8">
            Empowering Every Learner
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            At Sunrise School, we believe that every student deserves the opportunity to thrive. Our Additional Learning Support program is tailored to cater to the individual needs of students, ensuring they receive the attention and guidance they require.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We foster an inclusive environment where students with learning differences are supported through personalized plans, expert staff, and collaborative teaching strategies.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
            Core Support Strategies
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-2">
            <li>Individualized Education Plans (IEPs)</li>
            <li>One-on-one and small group support</li>
            <li>Integrated classroom accommodations</li>
            <li>Ongoing assessments and feedback loops</li>
          </ul>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            These strategies are crafted by our multidisciplinary team to help learners overcome their challenges and build confidence in their academic journey.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
            Specialized Areas of Support
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>Dyslexia and reading difficulties</li>
            <li>ADHD and attention management</li>
            <li>Language and communication challenges</li>
            <li>Emotional and social development</li>
            <li>Autism Spectrum Disorder support</li>
            <li>Occupational therapy and physical development</li>
            <li>Gifted and talented enrichment</li>
          </ul>
        </div>
      </div>

      {/* Shared Sections */}
      <InfoIconsSection />
      <ContactFormSection />
     
      <WhatsAppFloatingIcon />
    </div>
  );
}
