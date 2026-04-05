import { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("início");

  const sections = ["início", "sobre", "projetos", "habilidades", "experiência", "serviços", "contatos"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offset = el.offsetTop - window.innerHeight / 3;
          const height = el.offsetHeight;

          if (window.scrollY >= offset && window.scrollY < offset + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `cursor-pointer transition relative ${active === section
      ? "text-purple-600"
      : "text-gray-300 hover:text-purple-600"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-gray-950/80 backdrop-blur-lg border-b border-purple-600/20"
        : "bg-gray-950/80"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-4">

          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <a
            href="#início"
            className="group flex items-center gap-2 text-xl font-bold text-white animate-pulse"
          >
            <FaCode className="text-purple-600 transition group-hover:scale-110 group-hover:rotate-6" />
            Gustavo
            <span className="text-purple-600">
              .Dev
            </span>
          </a>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`${linkClass(section)} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all hover:after:w-full`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`md:hidden bg-gray-900/20 backdrop-blur-lg px-6 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={linkClass(section)}
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
