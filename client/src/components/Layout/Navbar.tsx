import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll spy for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
      <nav className="container py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold playfair text-primary flex items-center">
            <span className="text-accent">P</span>aula{" "}
            <span className="text-accent ml-1">O</span>livheira
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`text-sm font-medium border-b-2 ${
                activeSection === "home"
                  ? "navbar-active"
                  : "border-transparent hover:text-accent hover:border-accent"
              } transition duration-300 py-1`}
            >
              Início
            </a>
            <a
              href="#about"
              className={`text-sm font-medium border-b-2 ${
                activeSection === "about"
                  ? "navbar-active"
                  : "border-transparent hover:text-accent hover:border-accent"
              } transition duration-300 py-1`}
            >
              Sobre
            </a>
            <a
              href="#services"
              className={`text-sm font-medium border-b-2 ${
                activeSection === "services"
                  ? "navbar-active"
                  : "border-transparent hover:text-accent hover:border-accent"
              } transition duration-300 py-1`}
            >
              Serviços
            </a>
            <a
              href="#testimonials"
              className={`text-sm font-medium border-b-2 ${
                activeSection === "testimonials"
                  ? "navbar-active"
                  : "border-transparent hover:text-accent hover:border-accent"
              } transition duration-300 py-1`}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={handleLinkClick}
            >
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark hover:text-accent"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden pt-4 pb-2 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-sm font-medium hover:text-accent py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Início
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-accent py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Sobre
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-accent py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Serviços
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-accent py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="btn btn-primary inline-block text-center"
              onClick={handleLinkClick}
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
