import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from "../Home/ContactFormSection";
import FooterSection from "../Home/FooterSection";
import WhatsAppFloatingIcon from "../Home/WhatsAppFloatingIcon";
import ContactusSidebar from "./ContactusSidebar";

const ScheduleTour = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-blue-800 dark:text-blue-200 transition duration-300">
      {/* Top Banner */}
      <img
        src="/images/pedagogy.png"
        alt="Tour Banner"
        className="w-full h-[500px] object-cover"
      />

      {/* Page Layout */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 shadow-md border dark:border-blue-700">
            <ContactusSidebar/>
          </div>
        </div>

        {/* Main Section */}
        <div className="md:w-3/4 flex flex-col space-y-10">
          {/* Heading */}
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-400">
              Schedule a Tour
            </h1>
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300">
              School Tour: Visit the Top IB School in Palsud, India
            </h2>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
              <strong>Our Location:</strong> Sunrise School, Palsud
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-blue-50 dark:bg-blue-900/40 px-6 py-8 rounded-lg text-center gap-6">
            {/* Address */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-1">School Address</h3>
              <p>Sunrise School, Palsud, Madhya Pradesh, India</p>
            </div>

            {/* Phone */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-1">Phone</h3>
              <p>+91 99999 99999</p>
            </div>

            {/* Email */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-1">Email</h3>
              <p>addf@gmail.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-[700px] h-[450px] rounded-lg overflow-hidden mx-auto shadow-lg border dark:border-blue-700">
            <iframe
              title="Sunrise School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.745654651545!2d75.865!3d22.999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAwJzAwLjAiTiA3NcKwNTInMzMuOCJF!5e0!3m2!1sen!2sin!4v1623064828492!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Shared Components */}
      <InfoIconsSection />
      <ContactFormSection />
      <FooterSection />
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default ScheduleTour;
