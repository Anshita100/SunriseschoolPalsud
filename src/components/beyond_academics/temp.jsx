// src/components/beyond_academics/BeyondacademicsSidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const beyondAcademicsLinks = [
  "OVERVIEW",
  "TECHNOLOGY",
  "THE ARTS",
  "SPORTS",
  "STUDENT LEADERSHIP",
  "EXCHANGES & EXPEDITIONS",
  "STUDENT WELLBEING",
  "CAREER & COLLEGE ADVISORY",
  "COMMUNITY SERVICE",
];


export default function BeyondacademicsSidebar() {
  const location = useLocation();

  const formatPath = (sub) =>
    `/beyond-academics/${sub.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <aside className="w-full md:w-80 px-4 py-6 space-y-6">
      {/* Box 1: Beyond Academics Navigation */}
      <div className="bg-white shadow-xl rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 border-b pb-2 text-primary-600">Beyond Academics</h2>
        <ul className="space-y-2">
          {beyondAcademicsLinks.map((link) => (
            <li key={link}>
              <Link
                to={formatPath(link)}
                className={`block px-3 py-2 rounded-md font-medium text-sm transition ${
                  location.pathname === formatPath(link)
                    ? "bg-primary-100 text-primary-600"
                    : "hover:bg-primary-50 hover:text-primary-500"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Box 2: School Info */}
      <div className="bg-primary-50 shadow-xl rounded-lg p-4 space-y-3">
        <h2 className="text-lg font-semibold text-primary-700">Sunrise School</h2>
        <p className="text-sm font-medium text-gray-600">
          Flagship Campus of Sunrise Schools. <br />
          Consistently Ranked #1 Top International Day cum Boarding School in Delhi, Gurgaon & India.
        </p>
        <div className="flex items-start gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4 mt-1 text-primary-600" />
          <span>93 Shakti Nagar, Airport Road, Indore</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Mail className="w-4 h-4 text-primary-600" />
          <a href="mailto:info@sunriseschool.edu.in">info@sunriseschool.edu.in</a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone className="w-4 h-4 text-primary-600" />
          <a href="tel:+917725076767">+91 77250 76767</a>
        </div>
      </div>
    </aside>
  );
}
