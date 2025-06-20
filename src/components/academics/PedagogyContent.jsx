import React, { useState } from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AcademicsSidebar from "./AcademicsSidebar";
import { motion, AnimatePresence } from "framer-motion";

const pedagogyHighlights = [
  {
    title: "Inquiry-Based Learning",
    description:
      "Students are encouraged to ask questions and develop investigative skills, fostering critical and independent thinking.",
  },
  {
    title: "Experiential Learning",
    description:
      "Hands-on activities and real-world experiences allow students to apply what they learn meaningfully.",
  },
  {
    title: "Collaborative Projects",
    description:
      "We promote teamwork through group tasks, building communication, cooperation, and leadership qualities.",
  },
  {
    title: "Technology Integration",
    description:
      "Interactive digital tools are used in classrooms to enhance engagement and personalize learning experiences.",
  },
  {
    title: "Value-Based Education",
    description:
      "Our curriculum integrates ethics, empathy, and social responsibility, nurturing well-rounded individuals.",
  },
  {
    title: "Personalized Instruction",
    description:
      "Each student receives attention tailored to their pace and learning style, promoting confidence and growth.",
  },
  {
    title: "Interdisciplinary Learning",
    description:
      "Connecting different subjects helps students see the bigger picture and understand the relevance of their education.",
  },
];

const PedagogyContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleExpand = (idx) => setActiveIndex(idx === activeIndex ? null : idx);

  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Banner */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/pedagogy.png"
          alt="Pedagogy Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Layout */}
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
            Our Pedagogy
          </motion.h2>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
            Inspiring Learners, Shaping Futures
          </h3>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Our pedagogy blends traditional wisdom with modern approaches. By focusing on every child’s individual potential, we create personalized pathways for academic excellence and holistic growth. The learning environment is warm, inclusive, and nurturing.
          </p>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Vision-Driven Learning</h3>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Rooted in our vision, we believe that education must empower students to innovate, explore, and engage with the world around them. We strive to develop leadership, compassion, and self-awareness in every learner through curriculum and co-curricular balance.
          </p>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">21st-Century Skill Development</h3>
          <p className="mb-10 text-gray-700 dark:text-gray-300">
            Our classrooms are vibrant hubs of creativity, collaboration, and inquiry. We integrate skill-based learning across disciplines to prepare students for a fast-changing world, fostering adaptability, digital literacy, and problem-solving capabilities.
          </p>

          {/* Expandable Sections */}
          <div className="space-y-4 mb-10">
            {pedagogyHighlights.map((item, index) => (
              <div key={index} className="border border-blue-200 dark:border-blue-700 rounded-lg">
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center text-blue-700 dark:text-blue-300 font-semibold"
                >
                  {item.title}
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="px-6 pb-4 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Student Empowerment</h3>
          <p className="mb-10 text-gray-700 dark:text-gray-300">
            We emphasize student voice and choice in learning. From selecting research topics to designing projects, learners are involved in their educational journey. We aim to cultivate ownership, curiosity, and agency.
          </p>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Core Pedagogical Pillars</h3>
          <ul className="list-disc pl-6 mb-10 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Student-Centered Classrooms</li>
            <li>Real-Life Relevance</li>
            <li>Reflective Thinking</li>
            <li>Global Citizenship</li>
            <li>Continuous Assessment</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Continuous Improvement</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We constantly evaluate our strategies and practices based on feedback from educators, parents, and students. Our teachers participate in ongoing training and workshops to refine their skills and adopt innovative teaching methods.
          </p>
        </div>
      </div>

      {/* Shared Sections */}
      <InfoIconsSection />
      <ContactFormSection />
      
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default PedagogyContent;
