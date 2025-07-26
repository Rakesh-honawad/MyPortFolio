import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../assets/logos.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const onScroll = () => {
      const y = window.scrollY;
      setIsHidden(y > lastScroll && y > 50);
      setLastScroll(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const linkClasses =
    "text-[var(--slate)] hover:text-green-400 transition transform hover:-translate-y-1";

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-md transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "var(--background)" }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-green-400">
          <img src={logo}  className="h-max w-40 inline" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className={linkClasses} data-aos="fade-down">
            Home
          </a>
          <a
            href="#experience"
            className={linkClasses}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Experience
          </a>
          <a
            href="#projects"
            className={linkClasses}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Projects
          </a>
          <a
            href="#achievements"
            className={linkClasses}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Achievement/Certificate
          </a>
          <a
            href="#contact"
            className={linkClasses}
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-green-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="absolute top-20 left-0 w-full backdrop-blur-md shadow-lg md:hidden"
            style={{ backgroundColor: "var(--background)" }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {["Home", "Experience", "Projects", "Achievements", "Contact"].map((label, i) => (
                <a
                  key={label}
                  href={label === "Home" ? "#" : `#${label.toLowerCase()}`}
                  className={linkClasses}
                  onClick={toggleMenu}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
