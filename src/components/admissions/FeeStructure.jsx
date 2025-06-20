import React, { useState } from 'react';
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AdmissionsSidebar from "./AdmissionsSidebar";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="border-b border-blue-300 dark:border-blue-800 py-4">
    <button
      onClick={onToggle}
      className="flex justify-between items-center w-full text-left font-semibold text-blue-700 dark:text-blue-300 text-lg"
    >
      {title}
      <span>{isOpen ? '−' : '+'}</span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mt-4 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {typeof content === 'string' ? <p>{content}</p> : content}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FeeStructure2025 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const feeTables = [
    {
      title: '1. Tuition Fees',
      content: (
        <table className="w-full text-left border border-blue-300 dark:border-blue-700">
          <thead>
            <tr className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Quarterly Fee</th>
              <th className="p-2 border">Annual Fee</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr><td className="p-2 border">Nursery</td><td className="p-2 border">₹10,000</td><td className="p-2 border">₹40,000</td></tr>
            <tr><td className="p-2 border">KG</td><td className="p-2 border">₹11,000</td><td className="p-2 border">₹44,000</td></tr>
            <tr><td className="p-2 border">I–V</td><td className="p-2 border">₹12,000</td><td className="p-2 border">₹48,000</td></tr>
            <tr><td className="p-2 border">VI–XII</td><td className="p-2 border">₹15,000</td><td className="p-2 border">₹60,000</td></tr>
          </tbody>
        </table>
      )
    },
    {
      title: '2. Boarding Fees',
      content: (
        <table className="w-full text-left border border-blue-300 dark:border-blue-700">
          <thead>
            <tr className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Monthly</th>
              <th className="p-2 border">Yearly</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr><td className="p-2 border">Full Boarding</td><td className="p-2 border">₹20,000</td><td className="p-2 border">₹2,40,000</td></tr>
            <tr><td className="p-2 border">Weekly Boarding</td><td className="p-2 border">₹15,000</td><td className="p-2 border">₹1,80,000</td></tr>
            <tr><td className="p-2 border">Day Boarding</td><td className="p-2 border">₹10,000</td><td className="p-2 border">₹1,20,000</td></tr>
          </tbody>
        </table>
      )
    },
    {
      title: '3. Transportation Fees',
      content: (
        <table className="w-full text-left border border-blue-300 dark:border-blue-700">
          <thead>
            <tr className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              <th className="p-2 border">Zone</th>
              <th className="p-2 border">Monthly Fee</th>
              <th className="p-2 border">Annual Fee</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr><td className="p-2 border">Zone A</td><td className="p-2 border">₹3,000</td><td className="p-2 border">₹36,000</td></tr>
            <tr><td className="p-2 border">Zone B</td><td className="p-2 border">₹3,500</td><td className="p-2 border">₹42,000</td></tr>
            <tr><td className="p-2 border">Zone C</td><td className="p-2 border">₹4,000</td><td className="p-2 border">₹48,000</td></tr>
          </tbody>
        </table>
      )
    },
    {
      title: '4. Additional Services',
      content: (
        <table className="w-full text-left border border-blue-300 dark:border-blue-700">
          <thead>
            <tr className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              <th className="p-2 border">Service</th>
              <th className="p-2 border">Quarterly</th>
              <th className="p-2 border">Annually</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr><td className="p-2 border">Language Lab</td><td className="p-2 border">₹1,500</td><td className="p-2 border">₹6,000</td></tr>
            <tr><td className="p-2 border">STEM Lab</td><td className="p-2 border">₹2,000</td><td className="p-2 border">₹8,000</td></tr>
            <tr><td className="p-2 border">Sports</td><td className="p-2 border">₹1,800</td><td className="p-2 border">₹7,200</td></tr>
          </tbody>
        </table>
      )
    },
    {
      title: '5. Notes and Guidelines',
      content: (
        <div className="text-gray-700 dark:text-gray-300 space-y-3">
          <p>• All fees are payable quarterly in advance.</p>
          <p>• Late payment will attract a fine of ₹500 per week.</p>
          <p>• Transportation and boarding fees are optional and based on usage.</p>
          <p>• Refunds are not applicable once the term has commenced.</p>
          <p>• Scholarships are available for meritorious and underprivileged students.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white transition duration-300">
      {/* Banner */}
      <img src="/images/pedagogy.png" alt="Fee Structure" className="w-full h-[500px] object-cover" />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <AdmissionsSidebar />
          </div>
        </div>

        {/* Main */}
        <div className="md:w-3/4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">Fee Structure 2025-26</h1>
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Sunrise School Palsud</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our transparent and comprehensive fee structure ensures clarity and value for our parents.
              Below is a detailed breakdown of the fees for different categories and services.
            </p>
          </div>

          <div className="space-y-6">
            {feeTables.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/fee-structure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition"
            >
              📄 Download the Fee Structure
            </a>
          </div>
        </div>
      </div>

      {/* Shared Sections */}
      <InfoIconsSection />
      <ContactFormSection />
    
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default FeeStructure2025;
