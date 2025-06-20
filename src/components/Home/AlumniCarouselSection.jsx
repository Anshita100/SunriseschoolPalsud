import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const alumniData = [
  { img: "/images/my.jpg", desc: "This school built the foundation of my success." },
  { img: "/images/my.jpg", desc: "An unforgettable journey of growth and learning." },
  { img: "/images/my.jpg", desc: "Supportive teachers and lifelong friendships." },
  { img: "/images/my.jpg", desc: "A place that truly felt like a second home." },
  { img: "/images/my.jpg", desc: "Prepared me for real-world challenges." },
  { img: "/images/my.jpg", desc: "Shaped my career and character." },
  { img: "/images/my.jpg", desc: "Where dreams began to take shape." },
  { img: "/images/my.jpg", desc: "I owe my confidence and success to this school." },
  { img: "/images/my.jpg", desc: "A nurturing ground for future leaders." },
  { img: "/images/my.jpg", desc: "Built memories and values that last a lifetime." },
];

export default function AlumniCarouselSection() {
  const { isDarkMode } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div className={`w-3 h-3 ${
        isDarkMode 
          ? 'bg-primary-700 hover:bg-primary-500' 
          : 'bg-primary-200 hover:bg-primary-400'
      } rounded-full transition-colors duration-300`}></div>
    ),
  };

  return (
    <section className={`w-full ${
      isDarkMode
        ? 'bg-gradient-to-br from-gray-900 to-gray-800'
        : 'bg-gradient-to-br from-primary-50 to-white'
    } py-16 px-4 md:px-20 transition-colors duration-300`}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold text-center ${
          isDarkMode ? 'text-white' : 'text-primary-800'
        } mb-10 transition-colors duration-300`}
      >
        Hear What Alumni Have to Say About Us
      </motion.h2>
      <Slider {...settings}>
        {alumniData.map((item, idx) => (
          <div key={idx} className="px-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx % 3 * 0.1 }}
              className={`relative h-[300px] w-[400px] mx-auto overflow-hidden rounded-xl ${
                isDarkMode
                  ? 'shadow-lg shadow-black/30'
                  : 'shadow-lg'
              } group transition-all duration-300`}
            >
              <img
                src={item.img}
                alt="Alumni"
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition duration-300"
              />
              <div className={`absolute inset-0 flex items-center justify-center text-center p-6 ${
                isDarkMode
                  ? 'bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent'
                  : 'bg-gradient-to-t from-primary-900/80 via-transparent to-transparent'
              } transition-colors duration-300`}>
                <p className="text-white text-lg font-medium drop-shadow-lg transform group-hover:scale-105 transition duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>

      <style jsx="true">{`
        .slick-dots {
          bottom: -30px;
        }
        .slick-arrow {
          background: ${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 132, 199, 0.2)'};
          border-radius: 50%;
          width: 40px;
          height: 40px;
          z-index: 1;
        }
        .slick-arrow:hover {
          background: ${isDarkMode ? 'rgba(59, 130, 246, 0.6)' : 'rgba(0, 132, 199, 0.5)'};
        }
        .slick-prev {
          left: -5px;
        }
        .slick-next {
          right: -5px;
        }
      `}</style>
    </section>
  );
}
