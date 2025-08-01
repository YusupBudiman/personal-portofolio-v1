import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLink = [
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); // Update activeLink based on section id
          }
        });
      },
      {
        threshold: 0.25, // Trigger when 25% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before it reaches the viewport
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup observer
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-200/85 backdrop-blur supports-[backdrop-filter]:bg-gray-200/25 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-center relative">
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-36">
          <a href="#" className="flex items-center space-x-2">
            <p className="text-red-600 text-3xl font-bold">Portofolio</p>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            {navLink.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-red-600 ${
                  activeLink === link.href.substring(1)
                    ? "text-red-600"
                    : "text-gray-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <button
          className="absolute right-4 inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 " aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden ">
          <div className="space-y-1 px-2 py-3 pt-2 text-center">
            {navLink.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  activeLink === link.href.substring(1)
                    ? "text-red-600"
                    : "text-gray-700"
                } hover:bg-slate-50 hover:text-gray-900`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
