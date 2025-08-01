// Mengimpor React dan hook useState dari pustaka React
import React, { useState } from "react";

// Mengimpor gambar bioskop dari folder assets
import bioskop from "../assets/bioskop.png";
import star from "../assets/star.png";
import artani from "../assets/artani.png";

// Mengimpor ikon dari pustaka react-icons (Feather Icons)
import {
  FiChevronLeft, // Ikon panah kiri
  FiGithub, // Ikon GitHub
  FiChevronRight, // Ikon panah kanan
  FiExternalLink, // Ikon tautan eksternal
} from "react-icons/fi";

// Array berisi data semua proyek
const projects = [
  {
    id: 1,
    title: "Portofolio",
    desc: "Developed and maintained web applications",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/YusupBudiman",
    demo: "https://github.com/YusupBudiman",
    image: bioskop, // Menggunakan gambar yang diimpor
  },
  {
    id: 2,
    title: "Bioskop",
    desc: "Developed and maintained web applications",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/YusupBudiman",
    demo: "https://github.com/YusupBudiman",
    image: bioskop, // Menggunakan gambar yang diimpor
  },
  {
    id: 3,
    title: "Sistem Transaction",
    desc: "Developed and maintained web applications",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/YusupBudiman",
    demo: "https://github.com/YusupBudiman",
    image: bioskop, // Menggunakan gambar yang diimpor
  },
  {
    id: 4,
    title: "Star",
    desc: "Developed and maintained web applications",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/YusupBudiman",
    demo: "https://github.com/YusupBudiman",
    image: star, // Menggunakan gambar yang diimpor
  },
  {
    id: 5,
    title: "Banking",
    desc: "Developed and maintained web applications",
    technologies: ["PHP", "CSS", "Mysql"],
    github: "https://github.com/YusupBudiman",
    demo: "https://github.com/YusupBudiman",
    image: artani, // Menggunakan gambar yang diimpor
  },
  {
    id: 6,
    title: "Car Rental",
    desc: "Developed and maintained web applications",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/YusupBudiman",
    demo: "https://github.com/YusupBudiman",
    image: bioskop, // Menggunakan gambar yang diimpor
  },
];

// Komponen utama yang menampilkan proyek-proyek
const Projects = () => {
  // State untuk menyimpan indeks proyek yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState(0);

  // Jumlah proyek yang akan ditampilkan per slide
  const projectsPerPage = 3;

  // Fungsi untuk berpindah ke slide berikutnya
  const nextSlide = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex((prevIndex) => prevIndex + projectsPerPage); // Update indeks ke slide berikutnya
    }
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  const prevSlide = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - projectsPerPage); // Update indeks ke slide sebelumnya
    }
  };

  // Menentukan proyek-proyek yang akan ditampilkan pada slide saat ini
  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <section
      id="projects"
      data-aos="fade-right"
      data-aos-delay="250"
      className="w-full py-20 px-4 sm:px-8 relative bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Judul bagian proyek */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-2">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Developed and maintained web applications
          </p>
        </div>

        {/* Kontainer proyek dengan tombol navigasi */}
        <div className="relative">
          {/* Tombol untuk berpindah ke proyek sebelumnya */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0} // Tombol dinonaktifkan jika sudah di awal
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full shadow-md z-10 ${
              currentIndex === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-100"
            }`}
          >
            <FiChevronLeft className="text-gray-700 text-xl" />
          </button>

          {/* Tombol untuk berpindah ke proyek berikutnya */}
          <button
            onClick={nextSlide}
            disabled={currentIndex + projectsPerPage >= projects.length} // Tombol dinonaktifkan jika sudah di akhir
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full shadow-md z-10 ${
              currentIndex + projectsPerPage >= projects.length
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-100"
            }`}
          >
            <FiChevronRight className="text-gray-700 text-xl" />
          </button>

          {/* Grid tampilan proyek */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Gambar proyek */}
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Deskripsi proyek */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>

                  {/* Teknologi yang digunakan */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link ke GitHub dan Demo */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigasi titik (pagination) untuk menentukan halaman */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(projects.length / projectsPerPage), // Menghitung jumlah halaman
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)} // Mengubah indeks saat tombol ditekan
              className={`w-3 h-3 rounded-full ${
                currentIndex === index * projectsPerPage
                  ? "bg-blue-600" // Menandakan halaman yang aktif
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Ekspor komponen Projects agar bisa digunakan di file lain
export default Projects;
