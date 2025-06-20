import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from "../Home/ContactFormSection";
import FooterSection from "../Home/FooterSection";
import WhatsAppFloatingIcon from "../Home/WhatsAppFloatingIcon";
import BoardingSidebar from "./BoardingSidebar";

export default function BoardingExperience() {
  return (
    <div className="pt-16 bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Banner Image */}
      <img
        src="/images/boarding-top.jpg"
        alt="Boarding"
        className="w-full h-[500px] object-cover"
      />

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <BoardingSidebar />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 space-y-10 px-6 py-8">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">
            Benefits of Boarding School
          </h1>

          <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
            <p>Boarding schools offer students a unique opportunity to grow in a structured and nurturing environment. They learn independence, responsibility, and time management.</p>
            <p>Students are immersed in a diverse and vibrant community, developing lifelong friendships and honing their interpersonal skills.</p>
            <p>Academics, extracurriculars, and residential life are seamlessly integrated, fostering holistic development.</p>
          </div>

          <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-300">
            A Residence Is a Student’s Home Away from Home
          </h2>

          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>At PWS, we ensure that our boarding environment feels like a second home. Care, comfort, and community are at the core of the student residential experience.</p>
            <p>Trained staff, counselors, and dorm parents provide support and guidance, ensuring every child feels safe and valued.</p>
          </div>

          {/* Images: Dorm, Cafeteria, Activities */}
          <div className="grid md:grid-cols-3 gap-6 my-10">
            {[
              { src: "/images/boarding1.jpg", label: "Comfortable Dormitories" },
              { src: "/images/boarding1.jpg", label: "Nutritious Dining" },
              { src: "/images/boarding1.jpg", label: "Engaging Weekend Activities" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.src}
                  alt={item.label}
                  className="rounded-xl shadow-lg w-full h-60 object-cover"
                />
                <p className="mt-2 text-blue-600 dark:text-blue-300 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-center text-blue-600 dark:text-blue-300 mt-16 mb-6">
            Benefits of Boarding at PWS
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "24/7 Academic & Emotional Support",
              "Strong Mentorship Culture",
              "Balanced Life Skills & Learning"
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <img
                  src="/images/boarding1.jpg"
                  alt={benefit}
                  className="rounded-xl shadow-lg w-full h-60 object-cover"
                />
                <p className="mt-2 text-blue-600 dark:text-blue-300 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shared Components */}
      <InfoIconsSection />
      <ContactFormSection />
     
      <WhatsAppFloatingIcon />
    </div>
  );
}
