import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

// Images
import jssImg from "../assets/jss.jpeg";
import kmggpImg from "../assets/kmggp.jpeg";
import sbImg from "../assets/sb.jpeg";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech Computer Science & Engineering(DS)",
      institute: "JSS Academy of Technical Education, Noida (GBN)",
      year: "2024 - 2027",
      desc: "Currently pursuing B.Tech in CSE with specialization in Data Science, focusing on AI, Web Dev and Data Analytics.",
      img: jssImg,
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institute: "KM Mayawati Government Girls Polytechnic, Badalpur (GBN)",
      year: "2021 - 2024",
      desc: "Completed Diploma in CSE with strong foundation in programming, DBMS, networking and software development.",
      img: kmggpImg,
    },
    {
      degree: "Secondary (10th)",
      institute: "Subedar Memorial I.C., Asanahara Chhapia, Gonda",
      year: "2019 - 2021",
      desc: "Completed secondary education with strong foundation in Science and Mathematics.",
      img: sbImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 px-4 sm:px-8 md:px-20 py-16">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
      >
        <FaGraduationCap className="text-purple-400 drop-shadow-lg" />
        Education
      </motion.h1>

      {/* ✅ Quote Added */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-300 text-sm sm:text-base md:text-lg italic max-w-2xl mx-auto mb-12"
      >
        “Education is not the learning of facts, but the training of the mind to think.”
      </motion.p>

      {/* Timeline Line */}
      <div className="relative border-l-2 border-purple-500 ml-3 sm:ml-6 md:ml-20">

        {/* Glow line effect */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-purple-400 blur-sm opacity-60 animate-pulse"></div>

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="mb-12 ml-4 sm:ml-6 relative group"
          >

            {/* Timeline Dot */}
            <div className="absolute -left-[10px] top-6 w-5 h-5 bg-purple-500 rounded-full shadow-lg border-4 border-gray-950 group-hover:scale-125 transition-all duration-300 animate-pulse"></div>

            {/* Card */}
            <div className="flex flex-col sm:flex-row bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-lg
                            transition-all duration-500 hover:shadow-purple-500/30 hover:-translate-y-2">

              {/* Image */}
              <div className="sm:w-1/3 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.institute}
                  className="h-44 sm:h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="sm:w-2/3 w-full p-5 text-white flex flex-col justify-center">

                <h2 className="text-lg sm:text-xl font-bold group-hover:text-purple-300 transition">
                  {item.degree}
                </h2>

                <h3 className="text-purple-300 text-sm font-medium mt-1">
                  {item.institute}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  {item.year}
                </p>

                <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Education;