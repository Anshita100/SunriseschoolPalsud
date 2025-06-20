import React from "react";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from "../Home/ContactFormSection";
import FooterSection from "../Home/FooterSection";
import WhatsAppFloatingIcon from "../Home/WhatsAppFloatingIcon";
import AdmissionsSidebar from "./AdmissionsSidebar";

export default function ScholarshipProgram() {
  return (
    <div className="text-blue-900 dark:text-blue-100 bg-white dark:bg-neutral-900 transition duration-300">
      {/* Banner */}
      <div className="w-full h-[500px]">
        <img
          src="/images/pedagogy.png"
          alt="Scholarship Banner"
          className="w-full h-full object-cover rounded-b-2xl"
        />
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 shadow border dark:border-blue-700">
            <AdmissionsSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 flex flex-col gap-10">
          {/* Headings */}
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-300">
              Scholarship Program
            </h1>
            <p className="text-xl font-medium">
              Explore Scholarship Opportunities at Sunrise School Palsud
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              At Sunrise School Palsud, we believe every child deserves access to high-quality education regardless of financial background. Our scholarship programs are designed to support meritorious students and help them realize their academic dreams.
            </p>
            <p>
              Through a range of merit-based and need-based scholarships, we provide assistance to students who demonstrate excellence in academics, sports, arts, and community service.
            </p>
          </div>

          {/* Scholarships List */}
          <div className="space-y-10 text-gray-800 dark:text-gray-200">
            {/* 1. Merit-based */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                1. Merit-based Scholarship
              </h3>
              <p className="mb-4">
                Awarded to students who demonstrate outstanding academic performance. The following table outlines the scholarship tiers:
              </p>
              <table className="w-full text-left border border-blue-300 dark:border-blue-600 rounded-lg overflow-hidden">
                <thead className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100">
                  <tr>
                    <th className="border p-2">Grade</th>
                    <th className="border p-2">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr><td className="border p-2">Grade A+</td><td className="border p-2">Above 95%</td></tr>
                  <tr><td className="border p-2">Grade A</td><td className="border p-2">90% - 95%</td></tr>
                  <tr><td className="border p-2">Grade B+</td><td className="border p-2">85% - 90%</td></tr>
                  <tr><td className="border p-2">Grade B</td><td className="border p-2">80% - 85%</td></tr>
                  <tr><td className="border p-2">Grade C</td><td className="border p-2">75% - 80%</td></tr>
                </tbody>
              </table>
            </div>

            {/* 2. Need-based */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                2. Need-based Scholarship
              </h3>
              <p>
                This scholarship supports families with financial constraints who are committed to education. Documentation and income verification are required during application.
              </p>
            </div>

            {/* 3. Sports */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                3. Sports Excellence Scholarship
              </h3>
              <p>
                For students representing the school, district, state, or nation in sports. Special preference for Olympic disciplines.
              </p>
            </div>

            {/* 4. Art & Culture */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                4. Art & Culture Scholarship
              </h3>
              <p>
                Recognizes talent in visual arts, performing arts, or cultural contributions. Requires portfolio and recommendation.
              </p>
            </div>

            {/* 5. Community Service */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                5. Community Service Scholarship
              </h3>
              <p>
                For students showing leadership in social service and community impact. We value initiatives with measurable outcomes.
              </p>
            </div>

            {/* Note */}
            <div className="pt-6 border-t border-blue-300 dark:border-blue-600">
              <p className="text-blue-700 dark:text-blue-300 italic">
                <strong>Note:</strong> All scholarships are reviewed annually and subject to renewal based on performance and conduct.
              </p>
            </div>
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
