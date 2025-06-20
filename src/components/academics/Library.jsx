import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import AcademicsSidebar from "./AcademicsSidebar";
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import { motion } from "framer-motion";

const Library = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Top Full Width Banner */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/library.png"
          alt="Nature’s Own School"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layout */}
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
            className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Library Access
          </motion.h2>

          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6">
            Library – A Journey Through the Pathways Library Resources
          </h3>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Sunrise School embraces nature not just as a backdrop, but as a powerful teacher. Surrounded by lush landscapes, open skies, and eco-diverse flora and fauna, our campus serves as a living laboratory. Students explore, question, and connect with the natural world through hands-on experiences that enrich their understanding, ignite curiosity, and cultivate responsibility for the environment. Nature inspires creativity, enhances physical and mental well-being, and encourages exploration beyond the classroom walls.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
            Our Vision for Outdoor Learning
          </h3>

          <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 text-base">
            <li>Foster environmental stewardship and sustainable living.</li>
            <li>Provide experiential learning through outdoor labs and eco-trails.</li>
            <li>Enhance cognitive development through play and exploration.</li>
            <li>Promote teamwork, leadership, and resilience in natural settings.</li>
            <li>Integrate outdoor activities into the mainstream curriculum.</li>
          </ul>
        </div>
      </div>

      {/* Footer and Icons */}
      <InfoIconsSection />
      <ContactFormSection />
     
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default Library;
