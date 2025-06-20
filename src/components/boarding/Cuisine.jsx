import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import BoardingSidebar from "./BoardingSidebar";

export default function Cuisine() {
  return (
    <div className="pt-16 bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      {/* Top Banner Image */}
      <img
        src="/images/food1.jpg"
        alt="Cuisine Banner"
        className="w-full h-[500px] object-cover rounded-b-xl shadow-md"
      />

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <BoardingSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 flex flex-col gap-8">
          {/* Headings and Description */}
          <div>
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Cuisine</h1>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
              At Sunrise School, our cuisine reflects diversity, nutrition, and a taste of home. With a strong focus on hygiene and wellness, every meal is crafted with utmost care and love.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
              Our dining facilities serve a variety of Indian, continental, and international dishes to cater to varied student preferences and dietary needs.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
              Weekly meal plans are curated by our nutritionist, ensuring balanced meals that energize and support academic and physical performance.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/food2.jpg",
              "/images/food2.jpg",
              "/images/food2.jpg",
              "/images/food2.jpg",
              "/images/food2.jpg",
              "/images/food2.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg border border-blue-100 dark:border-blue-700 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Cuisine ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shared Sections */}
      <InfoIconsSection />
      <ContactFormSection />
      
      <WhatsAppFloatingIcon />
    </div>
  );
}
