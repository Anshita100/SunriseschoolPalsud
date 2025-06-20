import React from "react";
import NewseventsSidebar from "./NewseventsSidebar";
import InfoIconsSection from "../Home/InfoIconsSection";
import ContactFormSection from "../Home/ContactFormSection";
import FooterSection from "../Home/FooterSection";
import WhatsAppFloatingIcon from "../Home/WhatsAppFloatingIcon";

const newsItems = [
  {
    image: "/images/news1.jpg",
    title: "Sunrise School Wins National IB Award",
    link: "https://example.com/news1",
    date: "June 6, 2025",
  },
  {
    image: "/images/news1.jpg",
    title: "Annual Science Fair Breaks Records",
    link: "https://example.com/news2",
    date: "May 30, 2025",
  },
  {
    image: "/images/news1.jpg",
    title: "Sunrise Students Visit NASA Virtual Tour",
    link: "https://example.com/news3",
    date: "May 14, 2025",
  },
  {
    image: "/images/news1.jpg",
    title: "Guest Lecture by Stanford Professor",
    link: "https://example.com/news4",
    date: "April 25, 2025",
  },
  {
    image: "/images/news1.jpg",
    title: "Sports Day Celebrated with Enthusiasm",
    link: "https://example.com/news5",
    date: "March 18, 2025",
  },
  {
    image: "/images/news1.jpg",
    title: "Robotics Team Qualifies for Internationals",
    link: "https://example.com/news6",
    date: "February 5, 2025",
  },
];

const Newsfeed = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Banner Image */}
      <div>
        <img
          src="/images/additional-learning-support.jpg"
          alt="Newsfeed Banner"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Heading Section */}
      <div className="text-center px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          Newsfeed
        </h1>
        <h2 className="text-xl text-blue-500 dark:text-blue-300">
          Explore Scholarship Opportunities at Sunrise School Palsud
        </h2>
      </div>

      {/* Layout: Sidebar + News */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 pb-16">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border dark:border-blue-700">
            <NewseventsSidebar />
          </div>
        </div>

        {/* News List */}
        <div className="md:w-3/4 space-y-6">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-gray-200 dark:border-gray-700 pb-6 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-4 rounded-lg transition"
            >
              <img
                src={news.image}
                alt={`News ${index + 1}`}
                className="w-24 h-24 object-cover rounded-xl shadow-sm"
              />
              <div>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 dark:text-blue-300 hover:underline"
                >
                  {news.title}
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {news.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Sections */}
      <InfoIconsSection />
      <ContactFormSection />
     
      <WhatsAppFloatingIcon />
    </div>
  );
};

export default Newsfeed;
