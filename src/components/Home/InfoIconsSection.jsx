import React from "react";
import { Link } from "react-router-dom";
import {
  Brain, MonitorSmartphone, Building2, Users, Newspaper,
  Utensils, Megaphone, Handshake, BadgeCheck, Smile
} from "lucide-react";

const icons = [
  { label: "Learning Support", icon: <Brain size={30} />, path: "/academics/learning-support" },
  { label: "Technology", icon: <MonitorSmartphone size={30} />, path: "/beyond-academics/technology" },
  { label: "Infrastructure", icon: <Building2 size={30} />, path: "/about/our-campus" },
  { label: "Community Service", icon: <Users size={30} />, path: "/beyond-academics/community-service" },
  { label: "News & Trending", icon: <Newspaper size={30} />, path: "/news-&-events/trending-news-" },
  { label: "Food Menu", icon: <Utensils size={30} />, path: "/boarding/cuisine" },
  { label: "Parent's Speak", icon: <Megaphone size={30} />, path: "/news-&-events/parent-testimonials" },
  
  { label: "Admission", icon: <BadgeCheck size={30} />, path: "/admission/admission-process" },
  { label: "Scholarship", icon: <Smile size={30} />, path: "/admission/scholorship" },
];

export default function InfoIconsSection() {
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center md:text-left">
        Explore More
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {icons.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-md bg-white dark:bg-slate-800 hover:shadow-xl hover:scale-[1.03] transition duration-300 border border-blue-100 dark:border-blue-700 hover:border-blue-500"
          >
            <div className="text-blue-600 dark:text-blue-300 mb-2">
              {item.icon}
            </div>
            <p className="text-md font-medium text-black dark:text-white text-center">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
