import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"; // Importing icons from react-icons library

const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "ABC Corp",
    period: "Jan 2020 - Present",
    desc: "Developed and maintained web applications using React and Node.js.",
    icon: <FaBriefcase className="text-blue-500 text-xl" />,
    type: "work",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "ABC Corp",
    period: "Jan 2020 - Present",
    desc: "Developed and maintained web applications using React and Node.js.",
    icon: <FaBriefcase className="text-green-500 text-xl" />,
    type: "work",
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "ABC Corp",
    period: "Jan 2020 - Present",
    desc: "Developed and maintained web applications using React and Node.js.",
    icon: <FaGraduationCap className="text-purple-500 text-xl" />,
    type: "work",
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "ABC Corp",
    period: "Jan 2020 - Present",
    desc: "Developed and maintained web applications using React and Node.js.",
    icon: <FaGraduationCap className="text-blue-500 text-xl" />,
    type: "work",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-20 px-4 sm:px-8 bg-gray-50/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-red-600">Journy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path and educational background
          </p>
        </div>
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 h-full w-1 bg-red-300"></div>
          {experience.map((ex, idx) => (
            <div
              className={`mb-12 flex flex-col sm:flex-row ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`sm:w-1/2 p-6 rounded-xl shadow-2xl bg-white border border-red-400`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    {ex.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 ">
                      {ex.role}
                    </h3>
                    <p className="text-gray-600">{ex.company}</p>
                  </div>
                </div>
                <p className="text-gray-500 italic mb-2">{ex.period}</p>
                <p className="text-gray-700">{ex.desc}</p>
                <div className="mt-4 px-3 py-1 rounded-full text-sm inline-block bg-blue-100 text-blue-800">
                  Work Experience
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
