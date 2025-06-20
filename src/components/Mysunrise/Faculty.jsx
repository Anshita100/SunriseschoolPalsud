import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import MysunriseSidebar from "./MysunriseSidebar";

const parentsComments = [
  {
    comment:
      "Sunrise School has been a wonderful experience for my child. The faculty is supportive and the curriculum is world-class.",
    student: "Aarav Mehta",
  },
  {
    comment:
      "The dedication of the teachers is unparalleled. My child loves going to school every day!",
    student: "Diya Sharma",
  },
  {
    comment:
      "A perfect blend of academics and extracurriculars. Highly recommend Sunrise School!",
    student: "Kabir Joshi",
  },
];

// Fill up to 20 comments if needed
while (parentsComments.length < 20) {
  parentsComments.push({
    comment:
      "Sunrise School fosters creativity, leadership, and curiosity. We're happy to be part of this community.",
    student: "Student Name",
  });
}

const ParentsSpeak = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">
      {/* Banner */}
      <img
        src="/images/leadership.jpg"
        alt="Parents Speak Banner"
        className="w-full h-[500px] object-cover"
      />

      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <MysunriseSidebar/>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 px-4 py-6">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 text-center mb-4">
            Faculty's Speak
          </h1>
          <h2 className="text-xl font-semibold text-center text-blue-600 dark:text-blue-300 mb-12">
            Hear what our school families have to say
          </h2>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentsComments.map((item, index) => (
              <div
                key={index}
                className="border border-blue-300 dark:border-blue-700 rounded-xl p-6 shadow-md hover:shadow-xl bg-blue-50 dark:bg-blue-900/40 transition-all duration-300"
              >
                <p className="text-md italic mb-4">“{item.comment}”</p>
                <p className="text-right font-semibold text-blue-700 dark:text-blue-300">- {item.student}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shared Sections */}
      <InfoIconsSection />
      <ContactFormSection />
      <FooterSection />
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default ParentsSpeak;
