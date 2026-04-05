import { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "projetos", label: "Projetos" },
    { id: "atividades", label: "Atividades" },
    { id: "habilidades", label: "Habilidades" },
    { id: "experiencia", label: "Experiência" },
    { id: "servicos", label: "Serviços" },
    { id: "contato", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      menuItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const offset = el.offsetTop - 120;
          if (window.scrollY >= offset && window.scrollY < offset + el.offsetHeight) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-gray-950/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-gray-950/80 py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <div className="flex-1 lg:hidden">
          <button
            className="text-white text-2xl p-2 hover:text-purple-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="flex justify-center lg:justify-start lg:flex-none">
          <a href="#inicio" className="flex items-center gap-2 group">
            <FaCode className="text-purple-600 text-xl group-hover:rotate-12 transition-transform" />
            <span className="text-white font-black italic tracking-tighter text-lg uppercase animate-pulse">
              Gustavo<span className="text-purple-600">.Dev</span>
            </span>
          </a>
        </div>

        <nav className="hidden lg:flex gap-5 flex-1 justify-end">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all relative group ${active === item.id ? "text-purple-500" : "text-gray-400 hover:text-purple-400"}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-600 transition-all ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`} />
            </a>
          ))}
        </nav>

        <div className="flex-1 lg:hidden pointer-events-none"></div>

      </div>

      <div className={`lg:hidden bg-gray-950 transition-all duration-500 overflow-hidden border-b border-white/5 ${menuOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-bold uppercase text-xs tracking-widest ${active === item.id ? "text-purple-500" : "text-gray-400"}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}