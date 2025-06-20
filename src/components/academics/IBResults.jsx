// IBResults.jsx

import React from "react";
import { Bar } from "react-chartjs-2";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from '../Home/ContactFormSection';
import FooterSection from '../Home/FooterSection';
import WhatsAppFloatingIcon from '../Home/WhatsAppFloatingIcon';
import AcademicsSidebar from "./AcademicsSidebar";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ibData = [
  { year: "2024", sunrise: 33.54, global: 30.02 },
  { year: "2023", sunrise: 34.12, global: 29.88 },
  { year: "2022", sunrise: 35.22, global: 30.33 },
  { year: "2021", sunrise: 36.11, global: 29.95 },
  { year: "2020", sunrise: 34.44, global: 28.87 },
  { year: "2019", sunrise: 33.18, global: 29.31 },
  { year: "2018", sunrise: 34.76, global: 29.82 },
  { year: "2017", sunrise: 35.60, global: 30.01 },
  { year: "2016", sunrise: 33.93, global: 29.75 }
];

const IBResults = () => {
  return (
    <div className="w-full">
      <img
        src="/images/ibresults-top.jpg"
        alt="IB Results"
        className="w-full h-[500px] object-cover"
      />
       <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 py-12">
                      {/* Sidebar */}
                      <div className="md:w-1/4">
                        <AcademicsSidebar />
                      </div>
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-pink-600 mb-2">IB Results</h2>
        <p className="text-xl text-gray-700">
          Outstanding IB results surpassing the IB Global average for 18 consecutive years.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20 py-10">
        {ibData.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-xl border border-pink-200 bg-pink-50"
          >
            <h3 className="text-xl font-bold text-pink-700 mb-3">{item.year}</h3>
            <div className="h-48 flex items-end gap-4 justify-center">
              <div className="bg-pink-500 text-white text-sm flex items-end justify-center w-12 rounded-t-lg"
                style={{ height: `${(item.sunrise / 40) * 100}%` }}>
                <span className="rotate-[-90deg] origin-left whitespace-nowrap text-xs px-1">
                  Sunrise {item.sunrise}
                </span>
              </div>
              <div className="bg-gray-400 text-white text-sm flex items-end justify-center w-12 rounded-t-lg"
                style={{ height: `${(item.global / 40) * 100}%` }}>
                <span className="rotate-[-90deg] origin-left whitespace-nowrap text-xs px-1">
                  Global {item.global}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-10">
        <div>
          <h3 className="text-2xl font-bold text-pink-600 mb-3">IB DP Results 2024</h3>
          <p className="text-gray-700 leading-relaxed">
            The IB DP 2024 results reaffirm Sunrise School’s legacy of academic excellence. With a strong average and numerous top scorers, our students have once again exceeded global expectations, showcasing perseverance, intellectual depth, and critical thinking.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-pink-600 mb-3">IB MYP Results 2024</h3>
          <p className="text-gray-700 leading-relaxed">
            Our MYP students in 2024 displayed commendable achievement, with many securing top grades in diverse subjects. The results reflect their hard work, inquiry-driven learning, and the nurturing support from dedicated educators.
          </p>
        </div>
      </div>
      </div>
      <InfoIconsSection/>
                  <ContactFormSection/>
                  <FooterSection/>
                  <WhatsAppFloatingIcon/>
    </div>
  );
};

export default IBResults;
