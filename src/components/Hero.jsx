import React from "react";
import facebook from "../assets/facebook.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import Yusup from "../assets/portofolio_sample.pdf";
import myHero from "../assets/Hero.webp";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col">
     

      <section
        className="text-gray-500 body-font z-10"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* KIRI: Text dan Sosial Media */}
          <div className="relative lh:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div
              className="flex space-x-4 md-2"
              aria-label="Sosial media link"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a href="#" aria-label="facebook">
                <img
                  src={facebook}
                  alt=""
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="github">
                <img
                  src={github}
                  alt=""
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="linkedin">
                <img
                  src={linkedin}
                  alt=""
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="instagram">
                <img
                  src={instagram}
                  alt=""
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
            </div>
            <h1 className="tittle-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
              Hi! I'm <span className="text-red-600">Yusup</span>
            </h1>
            <h2 className="sm:text-3xl mb-4 font-bold text-blue-950">
              Fullstack Web Developer
            </h2>
            <p className="mb-8 leading-relaxed text-black max-w-lg">
              I'm a Fullstack Developer crafting responsive web apps with clean
              UI and robust backend, using tools like React, Next.js, and
              Node.js to build scalable, user-friendly solutions.
            </p>
            <div className="flex justify-center">
              <a
                href={Yusup}
                download="Yusup_CV_pdf"
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-full text-lg 
                hover:shadow-[0_0_20px_rgba(225,100,100,0.5)] transition-all"
              >
                Download CV
              </a>
            </div>
          </div>

          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/8"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              src={myHero}
              alt="Yusup"
              className="object-cover object-center rounded-full w-[320px] h-[320px] border-4 border-white shadow-xl "
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
