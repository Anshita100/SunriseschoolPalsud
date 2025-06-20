import React, { useState } from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import BeyondacademicsSidebar from "./BeyondacademicsSidebar";
import { motion } from "framer-motion";

const primaryStudents = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  img: `/images/my1.jpg`,
}));

const secondaryStudents = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  img: `/images/my2.jpg`,
}));

export default function StudentLeadership() {
  const [selectedCouncil, setSelectedCouncil] = useState("primary");
  const students = selectedCouncil === "primary" ? primaryStudents : secondaryStudents;

  return (
    <div className="pt-20 bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Banner */}
      <div className="w-full h-[400px] md:h-[500px]">
        <img
          src="/images/student_leadership.jpg"
          alt="Student Leadership Banner"
          className="w-full h-full object-cover rounded-b-xl shadow-lg"
        />
      </div>

      {/* Content */}
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
            transition={{ duration: 0.4 }}
          >
            Student Leadership
          </motion.h1>

          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            Empowering Voices: Student Leadership at Sunrise School
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            At Sunrise School, we believe that leadership is a vital part of student development.
            Through structured leadership opportunities, our students learn to make responsible decisions,
            collaborate effectively, and champion causes close to their hearts.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our Student Council programs across different school levels empower students to take initiative,
            enhance school spirit, and serve as the voice of their peers.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-10">
            These roles help build confidence, communication skills, and a strong sense of responsibility—
            key traits that students carry with them for life.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-6">
            Explore the Student Councils for (2024–25)
          </h3>

          {/* Council Toggle */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setSelectedCouncil("primary")}
              className={`px-6 py-2 rounded-full font-medium text-white shadow-md transition duration-300 ${
                selectedCouncil === "primary"
                  ? "bg-blue-700 dark:bg-blue-500"
                  : "bg-blue-300 hover:bg-blue-500"
              }`}
            >
              Primary School
            </button>
            <button
              onClick={() => setSelectedCouncil("secondary")}
              className={`px-6 py-2 rounded-full font-medium text-white shadow-md transition duration-300 ${
                selectedCouncil === "secondary"
                  ? "bg-blue-700 dark:bg-blue-500"
                  : "bg-blue-300 hover:bg-blue-500"
              }`}
            >
              Secondary School
            </button>
          </div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 text-center">
                  {student.name}
                </h4>
              </div>
            ))}
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
